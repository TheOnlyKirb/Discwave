
module.exports = function cacheServer(Client, data) {
    Client.music.servers.set(data.guild.id, {
        guild: data.guild,
        spawnedChannel: data.summoned,
        station: data.station,
        vc: data.vc,
        dispatcher: data.dispatcher,
        player: data.player,
        userControl: data.user
    })
}