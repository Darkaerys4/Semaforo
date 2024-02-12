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




    //+++++++++++OTRA VERSION+++++++++++++
    /*

    let ambar = false;
    let velocidad = 3000;

    function startSemaforoCoche(){
        
        //si bool  es TRUE --> [VERDE - AMBAR - ROJO]
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
    
            semaforoCochesPrincipal.attr('src', imagen);

            setTimeout(activarSemaforo, velocidad);
        }
    
        setTimeout(activarSemaforo, velocidad);

    }

    function startSemaforoCoche2(){
        semaforoCochesPrincipal.attr('src', ROJO_RUTA);

        let intervaID;
        intervaID = setInterval(deRojoAVerdeCoche, 3000)
    }

    function deRojoAVerdeCoche(){
        semaforoCochesPrincipal.attr('src', VERDE_RUTA);
        intervaID = null;
        console.log('addas')
        clearInterval(intervaID);

    }*/









    //+++++++++CODIGO QUE NO CREO Q SIRVA++++++++++++
//HACIA LOS SEMAFOROS PRINCIPALES Y SECUNDARIOS CAMBAR INFITNITAMENTE DE ROJO-VERDE
/*
    let intervalSemaforos;

    //segSemaforoCoches determina el tiempo de los semaforos
    const TIEMPO_VERDE = 8;
    const TIEMPO_AMBAR = 1;
    const TIEMPO_AMBOS_ROJO = 2;

    const ROJO_RUTA = '../recursos/img/semafororojo.png';
    const AMBAR_RUTA = '../recursos/img/semaforoambar.png'; 
    const VERDE_RUTA = '../recursos/img/semaforoverde.png';

    let semaforoCochesPrincipal = $('.calle-principal');
    let semaforCochesIzquierda = $('.calle-izquierda');

    let x = 0;

    intervalSemaforos = setInterval(iniciarSemaforosCohes,1000);
    
    function iniciarSemaforosCohes(){
        x++;
        console.log(x);

        if(x == TIEMPO_VERDE){
            console.log('CAMBIA AMBAR PRINCIPAL')
            semaforoCochesPrincipal.attr('src', AMBAR_RUTA);
        }else if(x == TIEMPO_AMBAR + TIEMPO_VERDE){
            console.log('CAMBIA ROJO PRINCIPAL')
            semaforoCochesPrincipal.attr('src', ROJO_RUTA);
            //clearInterval(intervalSemaforos);
        }else if(x == TIEMPO_AMBAR + TIEMPO_VERDE + TIEMPO_AMBOS_ROJO){
            console.log('CAMBIA VERDE SECUNDARIO')
            semaforCochesIzquierda.attr('src', VERDE_RUTA);
        }else if(x == TIEMPO_AMBAR + TIEMPO_VERDE + TIEMPO_AMBOS_ROJO + TIEMPO_VERDE){
            console.log('CAMBIA AMBAR SECUNDARIO')
            semaforCochesIzquierda.attr('src', AMBAR_RUTA);
        }else if(x == TIEMPO_AMBAR + TIEMPO_VERDE + TIEMPO_AMBOS_ROJO + TIEMPO_VERDE + TIEMPO_AMBAR){
            console.log('CAMBIA AMBAR SECUNDARIO')
            semaforCochesIzquierda.attr('src', ROJO_RUTA);
            //clearInterval(intervalSemaforos);
        }else if(x == TIEMPO_AMBAR + TIEMPO_VERDE + TIEMPO_AMBOS_ROJO + TIEMPO_VERDE + TIEMPO_AMBAR + TIEMPO_AMBOS_ROJO){
            semaforoCochesPrincipal.attr('src', VERDE_RUTA);
            console.log('CAMBIA VERDE PRINCIAPAL')
            console.log('--------TERMIADO-------')
            //clearInterval(intervalSemaforos);
            x = 0;

        }



    }*/





    



    
});