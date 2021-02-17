module.exports = (Client) => {
    // Node-Fetch has always been my go-to, but anything that makes a simple get request would work /shrug
    const fetch = require("node-fetch")
    // Base Object
    Client.music = {}
    // Map for server cache
    Client.music.servers = new Map()
}