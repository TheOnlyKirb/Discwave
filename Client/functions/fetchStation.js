module.exports = async function fetchStation(station) {
    const stationSID = {
        "game": 1,
        "ocremix": 2,
        "covers": 3,
        "chiptune": 4,
        "all": 5
    }
    const fetch = require("node-fetch")
    let results = null;
    await fetch(`https://rainwave.cc/api4/info?sid=${stationSID[station.toLowerCase()]}&key=${require("../config/config.json").apiKey}`)
        .then(res => res.json())
        .then(json => {
            results = json
            results.sid = stationSID[station.toLowerCase()]
        });
    return results
}