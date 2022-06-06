var clock = setInterval(clocktiming, 1000);

function clocktiming() {
    var date = new Date;
    var time = date.toLocaleTimeString();
    document.getElementById('showclock').innerHTML = time;
}