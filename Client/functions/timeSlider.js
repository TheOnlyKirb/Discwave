module.exports = function slide(startTime, endTime, length) {
    // time provided by rainwave is... unix seconds? instead of unix ms...
    const percentage = Math.abs(startTime-(Date.now()/1000)) / length;
    const progress = Math.round((10 * percentage));
    const emptyProgress = 10 - progress;
    const progressText = "█".repeat(progress);
    const emptyProgressText = '░'.repeat(emptyProgress);
    return `[${progressText}${emptyProgressText}] 💧 \`[${require("../functions/timeFormat")(Math.abs(startTime-(Date.now()/1000)))}/${require("../functions/timeFormat")(length)}]\``;
}