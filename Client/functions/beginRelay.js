module.exports = async function beginRelay(Client, message, data) {
    message.member.voice.channel.join().then(async connection => {
        await require("../functions/cacheServer")(Client, { guild: message.guild, dispatcher: connection, user: message.author, player: null, summoned: message.channel.id, vc: message.member.voice.channel.id, station: data.station.toLowerCase() })
        await require("../relay/base")(Client, message.guild.id, data.station)
        const player = Client.music.servers.get(message.guild.id) ? Client.music.servers.get(message.guild.id).dispatcher.play(`${Client.music.servers.get(message.guild.id).buffer[data.station]}`, { bitrate: "auto" }) : connection.play(`${Client.music.servers.get(message.guild.id).buffer[data.station]}`, { bitrate: "auto" })
        Client.music.servers.get(message.guild.id).player = player;
    }).catch(error => {
       console.log(error)
    })
}