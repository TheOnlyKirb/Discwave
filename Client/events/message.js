exports.run = (Client, message) => {
    // If the guild doesn't exist, or is offline, stop; Blocks private messages; Skips other bot messages
    if (!message.guild || message.IsPrivate || message.author.bot) return;
    // Checks for the provided text prefix, or checks if the bot has been tagged
    const prefix = [Client.config.prefix, `<@!${Client.user.id}>`].find(p => message.content.toLowerCase().indexOf(p) === 0)
    // If no prefix, stop
    if (!prefix) return;
    // Break the message up after the prefix to provide command arguments
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    // Grab the first argument which in this case is the command- make it case insensitive
    let command = args.shift().toLowerCase();
    // Check if the bot has a command with the name provided, if yes, get it from the Map
    if (Client.commands.has(command)) command = Client.commands.get(command)
    // Check if the bot has an alias with the name provided, if yes, get it from the Map
    else if (Client.aliases.has(command)) command = Client.commands.get(Client.aliases.get(command))
    // If no command, or the command has no run function, stop
    if (!command.run) return;
    // Run the command- passing in the bot/client, the message object, and the user-provided arguments
    command.run(Client, message, args).catch(error => {
        // if there is an error, log it
        if (error) return console.error(error)
    })
}