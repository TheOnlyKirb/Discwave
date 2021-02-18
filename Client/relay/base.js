module.exports = async function createRelay(Client, guildid, station) {
    const http = require("http")
    const prism = require('prism-media');
    Client.music.servers.get(guildid).buffer[station] = new prism.opus.Encoder({ rate: 112000, channels: 2, frameSize: 960 })
    const transcoder = new prism.FFmpeg({
        args: ['-af', `bass=g=${Client.music.servers.get(guildid).args.bass},treble=g=${Client.music.servers.get(guildid).args.treble}${Client.music.servers.get(guildid).args.custom}`]
    });
    http.request({ host: "relay.rainwave.cc", path: `/${station}.mp3` }, function (res) {
        res.on('data', function (chunk) {
            chunk.pipe(transcoder).pipe(Client.music.servers.get(guildid).buffer[station]);
        });
    })
}