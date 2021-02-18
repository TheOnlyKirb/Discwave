exports.run = async (Client, message, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    if(!Client.music.servers.get(message.guild.id)) return embed.setAuthor(Client.txt.c.disconnect.l1, `${Client.user.displayAvatarURL()}`), message.channel.send(embed)
    if(message.author.id !== Client.music.servers.get(message.guild.id).userControl.id && !message.member.hasPermission("MANAGE_GUILD")) return embed.setAuthor(`${Client.music.servers.get(message.guild.id).userControl.tag} ${Client.txt.c.disconnect.l2}`, `${Client.user.displayAvatarURL()}`), message.channel.send(embed)
    Client.music.servers.get(message.guild.id).dispatcher.disconnect()
    embed.setAuthor(Client.txt.c.disconnect.l3, `${Client.user.displayAvatarURL()}`), message.channel.send(embed)
    return Client.music.servers.delete(message.guild.id)
}

exports.help = {
    name: 'stop',
    aliases: ["leave", "s", "disconnect"],
    category: 'Music',
    description: "Stops playback"
};