module.exports = async function cacheServer(Client, data) {
    Client.music.servers.set(data.guild.id, {
        guild: data.guild,
        spawnedChannel: data.summoned,
        station: data.station,
        vc: data.vc,
        dispatcher: data.dispatcher,
        player: data.player,
        userControl: data.user,
        args: { // so i dont really need to add this but im going to bc im bored
            bass: 0,
            tempo: 1,
            treble: 0,
            custom: ""
        },
        buffer: { // each server will have its own buffer/opus stream- this allows equalizer settings via ffmpeg.
            game: null,
            all: null,
            ocremix: null,
            covers: null,
            chiptune: null
        }
    })
}