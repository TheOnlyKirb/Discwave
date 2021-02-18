module.exports = function formatMusic(num) {
    var sec_num = parseInt(num, 10)
    var hours = Math.floor(sec_num / 3600)
    var min = Math.floor((sec_num - (hours * 3600)) / 60)
    var sec = sec_num - (hours * 3600) - (min * 60)
    if (hours < 10) { hours = "0" + hours }
    if (min < 10) { min = "0" + min }
    if (sec < 10) { sec = "0" + sec }
    if (hours == "00") return min + ':' + sec
    else return hours + ":" + min + ":" + sec
}