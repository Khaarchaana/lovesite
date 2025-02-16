const yourDate = new Date("2023-08-27T00:00:00")

document.addEventListener('DOMContentLoaded', function () {
    var rootTime = document.querySelector("time");
    document.querySelector("anni").textContent = '27 - 08 - 2024';
    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 /60 / 24) + " DAYS";

    function olock() {
        var today = new Date(),
        hrs = (Math.floor(Math.floor((today - yourDate) / 1000) /60 /60))%24,
        min = (Math.floor(Math.floor((today - yourDate) / 1000) /60))%60,
        sec = Math.floor((today - yourDate) / 1000) %60;
        rootTime.textContent = `${(hrs > 9) ? hrs : "0" + hrs}: ${(min > 9) ? min : "0" + min}: ${(sec > 9) ? sec : "0" + sec}`;
    }olock();

    var timer = setInterval(function () { olock()}, 1000);


}, false);
