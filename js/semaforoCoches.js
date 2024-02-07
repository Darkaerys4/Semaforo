$(document).ready(function(){
    
    let btnIz_peatonIz = $('.btnIz-Peaton-Iz-1');
    let cont_iz = $('#cont-p-iz-iz');


    let intervalId;

    const ESPERA_ROJO_P = 3;
    const ESPERA_VERDE_P = 6;

    let tiempoGeneral = 0;
    let labelPeaton = ESPERA_ROJO_P;
    let presionado = false;

    const ROJO_HORIZ_P = '../recursos/img/Peatonesrojo.png';
    const VERDE_HORIZ_P = '../recursos/img/Peatonesverde.png';

    const ROJO_VERT_P = '../recursos/img/PeatonesrojoVertical.png';
    const VERDE_VERT_P = '../recursos/img/PeatonesverdeVertical.png';

    btnIz_peatonIz.on( 'click', function() {
        console.log('BOTON PRESIONADO')

        if(presionado){
            console.log('NO PUDES PRESIONARLO OTRA VEZ')
            return;
        }
        cont_iz.text(ESPERA_ROJO_P);
        presionado = true;
        intervalId = setInterval(iniciarPeatones,1000);

    });


    function iniciarPeatones() {

        tiempoGeneral++;
        console.log(tiempoGeneral);
        labelPeaton--;
        cont_iz.text(labelPeaton);
        
        if(tiempoGeneral == ESPERA_ROJO_P){
            cont_iz.text(ESPERA_VERDE_P);
            labelPeaton = ESPERA_VERDE_P;
            console.log('pasar a verde');
            $(btnIz_peatonIz).children('img').attr('src', VERDE_HORIZ_P);

        }else if(tiempoGeneral == ESPERA_ROJO_P + ESPERA_VERDE_P){
            console.log('pasa a rojo');
            $(btnIz_peatonIz).children('img').attr('src', ROJO_HORIZ_P);
            clearInterval(intervalId);
            labelPeaton = ESPERA_ROJO_P;
            cont_iz.css({ opacity: 0 });   
            intervalId = null;
            tiempoGeneral = 0;
            presionado = false;
        }
    }

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




    
});