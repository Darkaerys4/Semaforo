$(document).ready(function(){

    let intervalSemaforos;

    //segSemaforoCoches determina el tiempo de los semaforos
    const TIEMPO_VERDE = 8;
    const TIEMPO_AMBAR = 3;
    const TIEMPO_AMBOS_ROJO = 3;

    const ROJO_RUTA = '../recursos/img/semafororojo.png';
    const AMBAR_RUTA = '../recursos/img/semaforoambar.png'; 
    const VERDE_RUTA = '../recursos/img/semaforoverde.png';

    let semaforoCochesPrincipal = $('.calle-principal');
    let semaforCochesIzquierda = $('.calle-izquierda');

    let x = 0;
    let ambar = false;


    let velocidad = 3000;

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



    }






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

    }




    
});