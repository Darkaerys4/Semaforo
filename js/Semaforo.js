let r = document.getElementById('l1');
let a = document.getElementById('l2');
let v = document.getElementById('l3');

let n = 1;

let nIntervId;
function start() {
    // check if an interval has already been set up
    if (!nIntervId) {
      nIntervId = setInterval(semaforoCambiar, 600);
    }
}

function semaforoCambiar() {

    apagarSemaforo([r,a,v]);

    console.log('semanadsd');

    switch(n){
        case 1:
            r.style.background = 'red';
            break;
        case 2:
            a.style.background = 'yellow';
            break
        case 3:
            v.style.background = 'green';
    }

    n++;

    if(n == 4){
        n = 1;
    }


}

function apagarSemaforo(list){

    let color = 'gray';

    list.forEach(luz => {
        luz.style.background = color;
    });
}   



function stop() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
}

/*
console.log('asd')

let cursor = true;
let velocidad = 600;


setInterval(() => {

    if (cursor) {
        r.style.background = 'red';
        cursor = false;
    } else {
        r.style.background = 'yellow';
        cursor = true;
    }

}, velocidad);*/