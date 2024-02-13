$(document).ready(function(){

    //semaforos carretera izquierda arriba
    let carretera5 = $('#carretera5');
    let carretera8 = $('#carretera8');

    let contIz_ar = $('#contPeatones-Ar-1');

    //tiempos de espera
    const ESPERA_ROJO_P = 5;
    const ESPERA_VERDE_P = 8;

    const EMPEZAR_AMBAR_C = 2;
    const AMBOS_ROJO = 1;

    let intervalId_ar;

    let presionado_ar = false;
    let tiempoGeneral_ar = 0;
    let labelPeaton_ar = ESPERA_ROJO_P;

    const ROJO_VERT_P = '../recursos/img/PeatonesrojoVertical.png';
    const VERDE_VERT_P = '../recursos/img/PeatonesverdeVertical.png';

    //semaforos coches
    const ROJO_C = '../recursos/img/semafororojo.png';
    const AMBAR_C = '../recursos/img/semaforoambar.png';
    const VERDE_C = '../recursos/img/semaforoverde.png';

    //semaforos peatones
    let btnIz_peatonIz = $('.btnIz-Peaton-Ar');

    btnIz_peatonIz.on( 'click', function() {
        if(presionado_ar){
            console.log('NO PUDES PRESIONARLO OTRA VEZ')
            return;
        }

        contIz_ar.text(ESPERA_ROJO_P);
        presionado_ar = true;
        contIz_ar.css({ opacity: 1 });
        intervalId_ar = setInterval(iniciarPeatonesIzquierda,1000);

    });

    function iniciarPeatonesIzquierda(){
        tiempoGeneral_ar++;
        console.log(tiempoGeneral_ar);
        labelPeaton_ar--;
        contIz_ar.text(labelPeaton_ar);

        if(tiempoGeneral_ar == ESPERA_ROJO_P - EMPEZAR_AMBAR_C + AMBOS_ROJO){ // 5-2+1 = 4
            cambiarSemaforoC([carretera8, carretera5], ROJO_C);

        }else if(tiempoGeneral_ar == ESPERA_ROJO_P){ //5
            contIz_ar.text(ESPERA_VERDE_P);
            labelPeaton_ar = ESPERA_VERDE_P;
            console.log('pasar a verde');
            $(btnIz_peatonIz).children('img').attr('src', VERDE_VERT_P);

        }else if(tiempoGeneral_ar == ESPERA_VERDE_P + ESPERA_ROJO_P){ //13
            $(btnIz_peatonIz).children('img').attr('src', ROJO_VERT_P);
            contIz_ar.css({ opacity: 0 });
        }
        else if(tiempoGeneral_ar == ESPERA_VERDE_P + ESPERA_ROJO_P + AMBOS_ROJO){ //14
            cambiarSemaforoC([carretera8, carretera5], AMBAR_C);
            clearInterval(intervalId_ar);
            labelPeaton_ar = ESPERA_ROJO_P;
            contIz_ar.css({ opacity: 0 });
            intervalId_ar = null;
            tiempoGeneral_ar = 0;
            presionado_ar = false;
            console.log('ULTIMO');
        }
    }



    function cambiarSemaforoC(list, fotoCambiar){
        for(let i = 0 ; i < list.length; i++){
            list[i].attr('src', fotoCambiar);
        }
    }


});