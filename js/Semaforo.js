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


    startBtn.on( 'click', function() {
        startSemaforoCoche(false);
    });

    stopBtn.on( 'click', function() {
        stop();
    } );


    function startSemaforoCoche(bool){
        
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

            let intervaID;

            intervaID = setInterval(deRojoAVerdeCoche, 3000)

        }

    }


    function stop() {
       console.log('STOP');
    }

    function deRojoAVerdeCoche(){
        semaforoCoche.attr('src', VERDE_RUTA);
        intervaID = null;
        console.log('addas')
        clearInterval(intervaID);

    }


    /*
        function startSemaforoCoche(bool){
        
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
    
    
    */






    



    
});