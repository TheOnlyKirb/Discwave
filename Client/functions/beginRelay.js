module.exports = async function beginRelay(Client, message, data) {
    const stationUrls = {
        game: "http://relay.rainwave.cc/game.mp3",
        all: "http://relay.rainwave.cc/all.mp3",
        ocremix: "http://relay.rainwave.cc/ocremix.mp3",
        covers: "http://relay.rainwave.cc/covers.mp3",
        chiptune: "http://relay.rainwave.cc/chiptune.mp3"
    }
    message.member.voice.channel.join().then(connection => {
        const player = Client.music.servers.get(message.guild.id) ? Client.music.servers.get(message.guild.id).dispatcher.play(`${stationUrls[data.station.toLowerCase()]}`, { bitrate: "auto" }) : connection.play(`${stationUrls[data.station.toLowerCase()]}`, { bitrate: "auto" })
        require("../functions/cacheServer")(Client, { guild: message.guild, dispatcher: connection, user: message.author, player: player, summoned: message.channel.id, vc: message.member.voice.channel.id, station: data.station.toLowerCase() })
    }).catch(error => {
       console.log(error)
    })
}