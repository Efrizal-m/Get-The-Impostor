const vents = document.getElementsByClassName('vent')
const imp = document.getElementsByClassName('impostor')
let time = document.getElementById('time');
let kill = document.getElementById('kill')
let stop = false
let duration = 30;
let speed;
let difficulty = window.prompt("choose level:", '1 to 5')

function countdown(){
    let timer = setInterval(function() {
       if (duration <= 0) {
           clearInterval(timer);
       }
       time.innerText = duration;
       duration--;
    }, 1000);
}

let v_before = 0;
function randomVents (vents){
    const v = Math.floor(Math.random()*vents.length);
    const vRandom = vents[v]
    if (vRandom === v_before) {
        randomVents(vents)
    }
    v_before = vRandom
    return vRandom;
}

function appear(){
    const vRandom = randomVents(vents) 
    vRandom.classList.add('appear')
    setTimeout(function(){
        vRandom.classList.remove('appear');
        if (!stop) { appear();}        
    }, speed)
}


function start(){
    appear();
    setTimeout(function(){ stop = true }, 30000)
}


let point;
function ready(difficulty){
    point = 0
    kill.innerText = 0
    if (difficulty === '1'){
        speed = 3000;
        start();
        countdown();
    } else if (difficulty === '2') {
        speed = 2500;
        start();
        countdown();
    } else if (difficulty === '3') {
        speed = 2000;
        start();
        countdown();
    } else if (difficulty === '4') {
        speed = 1500;
        start();
        countdown();
    } else if (difficulty === '5') {
        speed = 1000;
        start();
        countdown();
    }
}

function hit(){
    point++;
    kill.innerText = point;
}

// for (let i = 0; i < imp.length; i++) {
// if sesuai baru hit, cek event
    imp[0].addEventListener('click',function(MouseEvent) {
        console.log(MouseEvent)
        // hit();        
    })
// }

