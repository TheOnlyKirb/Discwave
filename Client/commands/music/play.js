exports.run = async (Client, message, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    embed
    if (!message.member.voice.channel) return embed.setAuthor(Client.txt.c.play.l1, `${message.author.displayAvatarURL()}`), message.channel.send(embed)
    if (!args[0]) return embed.setAuthor(Client.txt.c.play.l2, `${message.author.displayAvatarURL()}`), message.channel.send(embed)
    if (!["game", "all", "ocremix", "covers", "chiptune"].includes(args[0].toLowerCase())) return embed.setAuthor(Client.txt.c.play.l3, `${message.author.displayAvatarURL()}`), message.channel.send(embed)
    await require("../../functions/beginRelay")(Client, message, { station: args[0].toLowerCase() })
    const station = await require("../../functions/fetchStation")(args[0].toLowerCase())
    embed
        .setAuthor(`Rainwave ${args[0].toLowerCase().charAt(0).toUpperCase() + args[0].toLowerCase().substr(1, args[0].length)}`, Client.user.displayAvatarURL())
        .setDescription(`:cd: **${station.all_stations_info[station.sid].title}**\n📖 ${station.all_stations_info[station.sid].album}`)
        .setThumbnail(`https://rainwave.cc${station.all_stations_info[station.sid].art}_240.jpg`)
    return message.channel.send(embed)
}

exports.help = {
    name: 'play',
    aliases: ["p", "stream"],
    category: 'Music',
    description: "plays a station or genre!"
};