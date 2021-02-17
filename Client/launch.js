const Discord = require("discord.js")
const Client = new Discord.Client({
    fetchAllMembers: false,
    disableEveryone: true,
    disabledEvents: [],
    // intents are required now, we don't need anything special, so we get the bitwise # of the non-special ones
    intents: new Discord.Intents(Discord.Intents.NON_PRIVILEGED),
    http: { api: 'https://discordapp.com/api', version: 7 },
    shardCount: 1
});
const fs = require("fs");
Client.config = require("./config/config.json")
Client.commands = new Map();
Client.commands.categories = []
Client.aliases = new Map();

fs.readdir("./events/", (err, files) => { // reads the directory/folder
    if (err) return console.error(err) // optional: log the error
    files.forEach(file => { // loops through the files in the directory/folder
        let eventFunction = require(`./events/${file}`); // grabs the file
        let eventName = file.split(".")[0]; // gets the event name from the file name by removing the extention
        Client.on(eventName, (...args) => eventFunction.run(Client, ...args)); // sets the bot to run the event file on event recieved, and pass in the client
    });
});
fs.readdir("./commands", (err, categories) => {
    if (err) return console.error(err) // Log error to console
    if (!categories) return console.log("No categories found!")
    categories.forEach(category => { // The categories are organized by fs as an array, so loop through them.
        fs.readdir(`./commands/${category}`, (err2, commands) => { // Read the commands in each category
            if (err2) return console.error(err2)
            let files = commands.filter(f => f.split(".").pop() === "js") // only set javascript files!
            if (!files) return console.info(`No commands found in the ${category} category!`)
            files.forEach(filename => { // for each command file do the following
                try {
                    let props = require(`./commands/${category}/${filename}`) // Require the file so we can use it's exports
                    if(!Client.commands.categories.includes(props.help.category)) Client.commands.categories.push(props.help.category) // set the categories
                    Client.commands.set(props.help.name, props) // Set the command contents in the map we made earlier
                    props.help.aliases.forEach(alias => { // loop through the alias names and set them in the alias map
                        Client.aliases.set(alias, props.help.name) // set the alias name with the main command name
                    })
                } catch (err3) { console.error(err3) } // if there is an error with setting the command, log it here
            })
        })
    })
})
// Log in to Discords API
Client.login(Client.config.token)