$(document).ready(function(){

    let contenedorSemaforo = $('#contenedor-semaforo');
    let semaforoCoche = $('#semaforo-img');

    const ROJO_RUTA = '../recursos/img/semafororojo.png';
    const AMBAR_RUTA = '../recursos/img/semaforoambar.png'; 
    const VERDE_RUTA = '../recursos/img/semaforoverde.png';

    let velocidad = 3000;
    let ambar = false;

    //BOTONES
    let startBtn = $('#start-btn');
    let stopBtn = $('#stop-btn');

    let interval;


    startBtn.on( 'click', function() {
        start(true);
    });

    stopBtn.on( 'click', function() {
        stop();
    } );


    function start(bool){
        
        //si bool  es TRUE --> [VERDE - AMBAR - ROJO]
        if(bool){
            //La imagen empieza en verde
            semaforoCoche.attr('src', VERDE_RUTA);

            //espera 3 segundos en verde
            let activarSemaforo = function() {
                console.log('loop')
                let imagen = AMBAR_RUTA;
                
                if(!ambar){
                    //pasa a ambar (1.5s)
                    ambar = true;
                    velocidad = 1500;
                }else{
                    //al ser rojo se BORRA el timeout
                    imagen = ROJO_RUTA;
                    activarSemaforo = null;
                }
    
                semaforoCoche.attr('src', imagen);

                setTimeout(activarSemaforo, velocidad);
            }
    
            setTimeout(activarSemaforo, velocidad);

        }else{
            //si bool  es FALSE --> [ROJO - AMBAR - VERDE]
            semaforoCoche.attr('src', ROJO_RUTA);

            let activarSemaforo = function() {
                console.log('loopROJO')
                let imagen = AMBAR_RUTA;
                
                if(!ambar){
                    //pasa a ambar (1.5s)
                    ambar = true;
                    velocidad = 1500;
                }else{
                    //al ser verde se BORRA el timeout
                    imagen = VERDE_RUTA;
                    activarSemaforo = null;
                }
    
                semaforoCoche.attr('src', imagen);

                setTimeout(activarSemaforo, velocidad);
            }

            setTimeout(activarSemaforo, velocidad);

        }

    }


    function stop() {
       console.log('STOP')
    }






    



    
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
