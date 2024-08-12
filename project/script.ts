function Clock(){
    let days:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let hrs:any = document.getElementById("hours")
    let mnt:any = document.getElementById("minutes")
    let sec:any = document.getElementById("seconds")
    let ampm:any= document.getElementById("ampm")
    let date:any = document.getElementById("Date")
    let day:any = document.getElementById("Day")

    let time = new Date()
 
    let m:number | string = time.getMinutes()
    let s:number | string = time.getSeconds()
    let h:number | string = time.getHours()
    let d = time.getDay()
    let dd = time.getDate()
    let mm = time.getMonth()
    let yy = time.getFullYear()

    if(h > 12){
        h = h - 12
    }

    if( h == 0 ){
        h = 12
    }

    let ap = h <= 12 ? "AM" : "PM"

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hrs.innerHTML = h
    mnt.innerHTML = m
    sec.innerHTML = s
    ampm.innerHTML = ap
    day.innerHTML = days [d]
    date.innerHTML = months [mm] + " " + dd + ", " + yy

}

setInterval(Clock, 1000)