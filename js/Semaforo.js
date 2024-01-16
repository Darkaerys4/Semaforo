$(document).ready(function(){

    let container = $('#contenedor-semaforo');

    let semaforo


    
    //con.hide();

    
});

    /*

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
        nIntervId = null;
    }*/
