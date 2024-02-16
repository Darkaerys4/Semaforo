$(document).ready(function(){

    //semaforos peatones izquierda izquierda
    let btnIz_peatonIz = $('.btnIz-Peaton-Iz-1');
    let contIz_iz = $('#cont-p-iz-iz');
    
    //semaforos peatones izquierda derecha
    let btnIz_peatonDer = $('.btnIz-Peaton-Iz-2');
    let contIz_der = $('#cont-p-iz-der');

    //semaforos coches PRICIPALES
    let carretera1 = $('#carretera1');
    let carretera11 = $('#carretera11');

    //semaforos coches CARRETERA SECUNDARIA IZQ
    let carretera5 = $('#carretera5');
    let carretera13 = $('#carretera13');
    let carretera8 = $('#carretera8');
    let carretera4 = $('#carretera4');

    //intervalos controladores
    let intervalId;
    let intervalId_der;

    //tiempos de espera
    const ESPERA_ROJO_P = 5;
    const ESPERA_VERDE_P = 8;

    const EMPEZAR_AMBAR_C = 2;
    const AMBOS_ROJO = 1;

    //variables que controlan el contador IZQUIERDA IZQUIERDA
    let tiempoGeneral = 0;
    let labelPeaton = ESPERA_ROJO_P;
    let presionado = false;

    //variables que controlan el contador IZQUIERDA DERECHA
    let tiempoGeneral_der = 0;
    let labelPeaton_der = ESPERA_ROJO_P;
    let presionado_der = false;



    //semaforos peatonales
    const ROJO_HORIZ_P = '../recursos/img/Peatonesrojo.png';
    const VERDE_HORIZ_P = '../recursos/img/Peatonesverde.png';

    const ROJO_VERT_P = '../recursos/img/PeatonesrojoVertical.png';
    const VERDE_VERT_P = '../recursos/img/PeatonesverdeVertical.png';

    //semaforos coches
    const ROJO_C = '../recursos/img/semafororojo.png';
    const AMBAR_C = '../recursos/img/semaforoambar.png';
    const VERDE_C = '../recursos/img/semaforoverde.png';


    //*********** PROGRAMACIÓN DE BOTONES DE PEATONES *************//

    btnIz_peatonIz.on( 'click', function() {
        console.log('BOTON PRESIONADO IZQUIERDA IZQUIERDA')

        if(presionado){
            console.log('NO PUDES PRESIONARLO OTRA VEZ');
            return;
        }
        contIz_iz.text(ESPERA_ROJO_P);
        presionado = true;
        contIz_iz.css({ opacity: 1 });
        intervalId = setInterval(iniciarPeatonesIzquierda,1000);

    });

    btnIz_peatonDer.on( 'click', function() {
        console.log('BOTON PRESIONADO IZQUIERDA DERECHA')

        if(presionado_der){
            console.log('NO PUDES PRESIONARLO OTRA VEZ')
            return;
        }
        contIz_der.text(ESPERA_ROJO_P);
        presionado_der = true;
        contIz_der.css({ opacity: 1 });
        intervalId_der = setInterval(iniciarPeatonesDerecha,1000);

    });

    //*********** FUNCIONES USADAS POR LOS BOTONES *************//


    function iniciarPeatonesDerecha(){
        tiempoGeneral_der++;
        console.log(tiempoGeneral_der);
        labelPeaton_der--;
        contIz_der.text(labelPeaton_der);

        if(tiempoGeneral_der == ESPERA_ROJO_P - EMPEZAR_AMBAR_C){ // 5-2 = 3
            cambiarSemaforoC([carretera1, carretera11, carretera8, carretera4], AMBAR_C);

        }else if(tiempoGeneral_der == ESPERA_ROJO_P - EMPEZAR_AMBAR_C + AMBOS_ROJO){ // 5-2+1 = 4 
            cambiarSemaforoC([carretera1, carretera11, carretera8, carretera4], ROJO_C);

        }else if(tiempoGeneral_der == ESPERA_ROJO_P){ //5
            contIz_der.text(ESPERA_VERDE_P);
            labelPeaton_der = ESPERA_VERDE_P;
            console.log('pasar a verde');
            $(btnIz_peatonDer).children('img').attr('src', VERDE_HORIZ_P);

        }else if(tiempoGeneral_der == ESPERA_ROJO_P + ESPERA_VERDE_P){
            $(btnIz_peatonDer).children('img').attr('src', ROJO_HORIZ_P);
            contIz_der.css({ opacity: 0 });

        }else if(tiempoGeneral_der == ESPERA_ROJO_P + ESPERA_VERDE_P + AMBOS_ROJO){
            console.log('pasa a rojo');
            $(btnIz_peatonDer).children('img').attr('src', ROJO_HORIZ_P);
            clearInterval(intervalId_der);
            labelPeaton_der = ESPERA_ROJO_P;
            intervalId_der = null;
            tiempoGeneral_der = 0;
            presionado_der = false;
            cambiarSemaforoC([carretera1, carretera11], VERDE_C);
            cambiarSemaforoC([ carretera8, carretera4], AMBAR_C);
            
        }

    }

    function iniciarPeatonesIzquierda() {

        tiempoGeneral++;
        console.log(tiempoGeneral);
        labelPeaton--;
        contIz_iz.text(labelPeaton);


        if(tiempoGeneral == ESPERA_ROJO_P - EMPEZAR_AMBAR_C){ // 5-2 = 3
            cambiarSemaforoC([carretera1, carretera11, carretera5, carretera13], AMBAR_C);

        }else if(tiempoGeneral == ESPERA_ROJO_P - EMPEZAR_AMBAR_C + AMBOS_ROJO){ // 5-2+1 = 4 
            cambiarSemaforoC([carretera1, carretera11, carretera5, carretera13], ROJO_C);

        }else if(tiempoGeneral == ESPERA_ROJO_P){ //5
            contIz_iz.text(ESPERA_VERDE_P);
            labelPeaton = ESPERA_VERDE_P;
            console.log('pasar a verde');
            $(btnIz_peatonIz).children('img').attr('src', VERDE_HORIZ_P);

        }else if(tiempoGeneral == ESPERA_ROJO_P + ESPERA_VERDE_P){
            $(btnIz_peatonIz).children('img').attr('src', ROJO_HORIZ_P);
            contIz_iz.css({ opacity: 0 });

        }else if(tiempoGeneral == ESPERA_ROJO_P + ESPERA_VERDE_P + AMBOS_ROJO){
            console.log('pasa a rojo');
            $(btnIz_peatonIz).children('img').attr('src', ROJO_HORIZ_P);
            clearInterval(intervalId);
            labelPeaton = ESPERA_ROJO_P;
            intervalId = null;
            tiempoGeneral = 0;
            presionado = false;
            cambiarSemaforoC([carretera1, carretera11], VERDE_C);
            cambiarSemaforoC([ carretera5, carretera13], AMBAR_C);
            
        }
    }



    //recibe una lista de elementos y cambia la foto por la ruta pasada tmb como argumento
    function cambiarSemaforoC(list, fotoCambiar){
        for(let i = 0 ; i < list.length; i++){
            list[i].attr('src', fotoCambiar);
        }
    }
});