$(document).ready(function(){

    //semaforos peatones izquierda derecha
    let btnIz_peatonDer = $('.btnIz-Peaton-Iz-2');
    let contIz_der = $('#cont-p-iz-der');

    //semaforos coches PRICIPALES
    let carretera1 = $('#carretera1');
    let carretera11 = $('#carretera11');

    //semaforos coches CARRETERA SECUNDARIA IZQ
    let carretera8 = $('#carretera8');
    let carretera4 = $('#carretera4');

    let intervalId_der;
    //tiempos de espera
    const ESPERA_ROJO_P = 5;
    const ESPERA_VERDE_P = 8;

    const EMPEZAR_AMBAR_C = 2;
    const AMBOS_ROJO = 1;

    //variables que controlan el contador
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

        }else if(tiempoGeneral_der == ESPERA_ROJO_P + ESPERA_VERDE_P - AMBOS_ROJO){
            $(btnIz_peatonDer).children('img').attr('src', ROJO_HORIZ_P);
        }else if(tiempoGeneral_der == ESPERA_ROJO_P + ESPERA_VERDE_P){
            console.log('pasa a rojo');
            $(btnIz_peatonDer).children('img').attr('src', ROJO_HORIZ_P);
            clearInterval(intervalId_der);
            labelPeaton_der = ESPERA_ROJO_P;
            contIz_der.css({ opacity: 0 });
            intervalId_der = null;
            tiempoGeneral_der = 0;
            presionado_der = false;
            cambiarSemaforoC([carretera1, carretera11], VERDE_C);
            cambiarSemaforoC([ carretera8, carretera4], AMBAR_C);
            
        }

    }

    function cambiarSemaforoC(list, fotoCambiar){
        for(let i = 0 ; i < list.length; i++){
            list[i].attr('src', fotoCambiar);
        }
    }


});