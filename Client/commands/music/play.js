exports.run = async (Client, message, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    embed
    if (!message.member.voice.channel) return embed.setAuthor(Client.txt.c.play.l1, `${message.author.displayAvatarURL()}`), message.channel.send(embed)
    if (!args[0]) return embed.setAuthor(Client.txt.c.play.l2, `${message.author.displayAvatarURL()}`), message.channel.send(embed)
    if (!["game", "all", "ocremix", "covers", "chiptune"].includes(args[0].toLowerCase())) return embed.setAuthor(Client.txt.c.play.l3, `${message.author.displayAvatarURL()}`), message.channel.send(embed)
    await require("../../functions/beginRelay")(Client, message, {station: args[0].toLowerCase()})
    
    embed
    .setTitle(`Rainwave ${args[0].toLowerCase().charAt(0)+args[0].toLowerCase().substr(1, args[0].length)}`)
    .setDescription(`:music_note: ${Client.txt.c.play.embed.l1}`)
}

exports.help = {
    name: 'play',
    aliases: ["p", "stream"],
    category: 'Music',
    description: "plays a station or genre!"
};