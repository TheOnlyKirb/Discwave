exports.run = async (Client, message, args) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    if(!Client.music.servers.get(message.guild.id)) return embed.setAuthor(Client.txt.c.current.l1, `${message.author.displayAvatarURL()}`), message.channel.send(embed)
    const station = await require("../../functions/fetchStation")(Client.music.servers.get(message.guild.id).station)
    embed
    .setAuthor(`Rainwave ${Client.music.servers.get(message.guild.id).station.toLowerCase().charAt(0).toUpperCase() + Client.music.servers.get(message.guild.id).station.toLowerCase().substr(1, Client.music.servers.get(message.guild.id).station.length)}`, Client.user.displayAvatarURL())
    .setDescription(`:cd: **${station.all_stations_info[station.sid].title}** \`|\` :star: **${station.sched_current.songs[0].rating}**\n📖 ${station.all_stations_info[station.sid].album}\n\n${require("../../functions/timeSlider")(station.sched_current.start_actual, station.sched_current.end, station.sched_current.length)}`)
    .setThumbnail(`https://rainwave.cc${station.all_stations_info[station.sid].art}_240.jpg`)
    message.channel.send(embed)
}
exports.help = {
    name: "current",
    aliases: ["nowplaying", "np"],
    category: "Music",
    description: "Fetches the track playing"
};