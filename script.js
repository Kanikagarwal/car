let brake = document.querySelector(".brake");
let speed = document.querySelector(".speed");
let car = document.querySelector(".car");
let track = document.querySelector(".track");
let wheel1 = document.getElementById("img1")
let wheel2 = document.getElementById("img2")
let start = 0;

function animate(){
    car.style.animation = "shake 2s 1s linear infinite";
    track.style.animation = "moveTrack 14s 1s linear infinite";
    wheel1.style.animation = "rotate 1s 1s infinite linear";
    wheel2.style.animation = "rotate 1s 1s infinite linear";
}
function animateNo(){
    car.style.animation = "none";
    track.style.animation = "none";
    wheel1.style.animation = "none";
    wheel2.style.animation = "none";
}
function control(){
    if(animate()){
        return !animate()
    }
    else{
        return animate()
    }
}

document.addEventListener("keypress",function () {
    if(start === 0){
        animate();
        start = start+1;
    }
    document.querySelector("h1").style.display = "none";

})

brake.addEventListener("click",function () {
    brake.style.transform = "scale(1)";
    setTimeout(() => {
        brake.style.transform = "scale(1.3)"
    }, 100);
    
animateNo();
 
})
speed.addEventListener("click",function () {
    speed.style.transform = "scale(1)";
    setTimeout(() => {
        speed.style.transform = "scale(1.3)"
    }, 100);
    animate()
    track.style.animation = "moveTrack 10s 1s linear infinite";
})