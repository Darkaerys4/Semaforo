$(document).ready(function(){

    //semaforos peatones zon2 izquierda
    let btnDer_peatonIz = $('.btnDer-Peaton-Izq');
    let contDer_iz = $('#cont-p-de-iz');

    //semaforos peatones zona2 derecha
    let btnDer_peatonDer = $('.btnDer-Peaton-Der');
    let contDer_der = $('#cont-p-der-der');

    //semaforos coches PRICIPALES
    let carretera2 = $('#carretera2');
    let carretera10 = $('#carretera10');

    //semaforos coches CARRETERA SECUNDARIA
    //arriba
    let carretera6 = $('#carretera6');
    let carretera7 = $('#carretera7');
    //abajo
    let carretera14 = $('#carretera14');
    let carretera3 = $('#carretera3');

    let intervalIdZona2_iz;
    let intervalIdZona2_der;

    //tiempos de espera
    const ESPERA_ROJO_P = 5;
    const ESPERA_VERDE_P = 8;

    const EMPEZAR_AMBAR_C = 2;
    const AMBOS_ROJO = 1;

    //variables que controlan el contador zona2 IZQUIERDA
    let tiempoZona2_iz = 0;
    let labelPeaton_zona2Iz = ESPERA_ROJO_P;
    let presionadoZona2_iz = false;

    let tiempoZona2_der = 0;
    let labelPeaton_zona2der = ESPERA_ROJO_P;
    let presionadoZona2_der = false;

    //semaforos peatonales
    const ROJO_HORIZ_P = '../recursos/img/Peatonesrojo.png';
    const VERDE_HORIZ_P = '../recursos/img/Peatonesverde.png';

    //semaforos coches
    const ROJO_C = '../recursos/img/semafororojo.png';
    const AMBAR_C = '../recursos/img/semaforoambar.png';
    const VERDE_C = '../recursos/img/semaforoverde.png';


    //***********  DESHABILITAMIENTO DE BOTONES DE PEATÓN ****************//

    var btnDr_peatones_Ar1 = $(".btnDr-Peaton-Ar-1");
    var btnIz_peatones_Dr_Ab = $(".btnDr-Peaton-Ab");
    btnDer_peatonIz;
    btnDer_peatonDer;


    //*********** PROGRAMACIÓN DE BOTONES DE PEATONES ZONA2 *************//


    btnDer_peatonIz.on( 'click', function() {

        if(presionadoZona2_iz){
            return;
        }

        contDer_iz.text(ESPERA_ROJO_P);
        presionadoZona2_iz = true;
        contDer_iz.css({ opacity: 1 });
        btnIz_peatones_Dr_Ab.prop("disabled", true);
        btnDr_peatones_Ar1.prop("disabled", true);
        btnDer_peatonDer.prop("disabled", true);
        intervalIdZona2_iz = setInterval(iniciarPeatonesZona2Iz,1000);
    });

    btnDer_peatonDer.on( 'click', function() {

        if(presionadoZona2_der){
            return;
        }

        contDer_der.text(ESPERA_ROJO_P);
        presionadoZona2_der = true;
        contDer_der.css({ opacity: 1 });
        btnIz_peatones_Dr_Ab.prop("disabled", true);
        btnDr_peatones_Ar1.prop("disabled", true);
        btnDer_peatonIz.prop("disabled", true);
        intervalIdZona2_der = setInterval(iniciarPeatonesZona2Der,1000);

    });

    function iniciarPeatonesZona2Der(){
        tiempoZona2_der++;
        labelPeaton_zona2der--;
        contDer_der.text(labelPeaton_zona2der);

        if(tiempoZona2_der == ESPERA_ROJO_P - EMPEZAR_AMBAR_C){ // 5-2 = 3
            cambiarSemaforoC([carretera2, carretera10, carretera7, carretera3], AMBAR_C);

        }else if(tiempoZona2_der == ESPERA_ROJO_P - EMPEZAR_AMBAR_C + AMBOS_ROJO){ // 5-2+1 = 4 
            cambiarSemaforoC([carretera2, carretera10, carretera7, carretera3], ROJO_C);

        }else if(tiempoZona2_der == ESPERA_ROJO_P){ //5
            contDer_der.text(ESPERA_VERDE_P);
            labelPeaton_zona2der = ESPERA_VERDE_P;
            $(btnDer_peatonDer).children('img').attr('src', VERDE_HORIZ_P);

        }else if(tiempoZona2_der == ESPERA_ROJO_P + ESPERA_VERDE_P){
            $(btnDer_peatonDer).children('img').attr('src', ROJO_HORIZ_P);
            contDer_der.css({ opacity: 0 });

        }else if(tiempoZona2_der == ESPERA_ROJO_P + ESPERA_VERDE_P + AMBOS_ROJO){
            $(btnDer_peatonDer).children('img').attr('src', ROJO_HORIZ_P);
            clearInterval(intervalIdZona2_der);
            labelPeaton_zona2der = ESPERA_ROJO_P;
            intervalIdZona2_der = null;
            tiempoZona2_der = 0;
            presionadoZona2_der = false;
            btnIz_peatones_Dr_Ab.prop("disabled", false);
            btnDr_peatones_Ar1.prop("disabled", false);
            btnDer_peatonIz.prop("disabled", false);
            cambiarSemaforoC([carretera2, carretera10], VERDE_C);
            cambiarSemaforoC([ carretera7, carretera3], AMBAR_C);
            
        }

    }


    function iniciarPeatonesZona2Iz(){
        tiempoZona2_iz++;
        labelPeaton_zona2Iz--;
        contDer_iz.text(labelPeaton_zona2Iz);

        if(tiempoZona2_iz == ESPERA_ROJO_P - EMPEZAR_AMBAR_C){ // 5-2 = 3
            cambiarSemaforoC([carretera2, carretera10, carretera6, carretera14], AMBAR_C);

        }else if(tiempoZona2_iz == ESPERA_ROJO_P - EMPEZAR_AMBAR_C + AMBOS_ROJO){ // 5-2+1 = 4 
            cambiarSemaforoC([carretera2, carretera10, carretera6, carretera14], ROJO_C);

        }else if(tiempoZona2_iz == ESPERA_ROJO_P){ //5
            contDer_iz.text(ESPERA_VERDE_P);
            labelPeaton_zona2Iz = ESPERA_VERDE_P;
            $(btnDer_peatonIz).children('img').attr('src', VERDE_HORIZ_P);

        }else if(tiempoZona2_iz == ESPERA_ROJO_P + ESPERA_VERDE_P){
            $(btnDer_peatonIz).children('img').attr('src', ROJO_HORIZ_P);
            contDer_iz.css({ opacity: 0 });

        }else if(tiempoZona2_iz == ESPERA_ROJO_P + ESPERA_VERDE_P + AMBOS_ROJO){
            $(btnDer_peatonIz).children('img').attr('src', ROJO_HORIZ_P);
            clearInterval(intervalIdZona2_iz);
            labelPeaton_zona2Iz = ESPERA_ROJO_P;
            intervalIdZona2_iz = null;
            tiempoZona2_iz = 0;
            presionadoZona2_iz = false;
            btnIz_peatones_Dr_Ab.prop("disabled", false);
            btnDr_peatones_Ar1.prop("disabled", false);
            btnDer_peatonDer.prop("disabled", false);
            cambiarSemaforoC([carretera2, carretera10], VERDE_C);
            cambiarSemaforoC([ carretera6, carretera14], AMBAR_C);
            
        }

    }

    function cambiarSemaforoC(list, fotoCambiar){
        for(let i = 0 ; i < list.length; i++){
            list[i].attr('src', fotoCambiar);
        }
    }

    
});