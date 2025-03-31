var timepass = document.getElementById("Time");
function Time() {
    setInterval(function(){ var time = new Date(); timepass.textContent = time.getHours() + ":" + time.getMinutes() }, 1000); 
}
Time();
/*Versión 1.0.2.1*/
