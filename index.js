function humanReadable(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;

    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .join(":");
}

// test

console.log(humanReadable(0));        // Output: "00:00:00"
console.log(humanReadable(5));        // Output: "00:00:05"
console.log(humanReadable(60));       // Output: "00:01:00"
console.log(humanReadable(86399));    // Output: "23:59:59"
console.log(humanReadable(359999));   // Output: "99:59:59"
