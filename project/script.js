"use strict";
function Clock() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hrs = document.getElementById("hours");
    let mnt = document.getElementById("minutes");
    let sec = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");
    let date = document.getElementById("Date");
    let day = document.getElementById("Day");
    let time = new Date();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let h = time.getHours();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    let ap = h <= 12 ? "AM" : "PM";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    mnt.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = ap;
    day.innerHTML = days[d];
    date.innerHTML = months[mm] + " " + dd + ", " + yy;
}
setInterval(Clock, 1000);
