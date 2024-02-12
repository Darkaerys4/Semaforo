$(document).ready(function(){

    //peatones izquierda izquierda
    let btnIz_peatonIz = $('.btnIz-Peaton-Iz-1');
    let cont_iz = $('#cont-p-iz-iz');

    //semaforos coches PRICIPALES
    let carretera1 = $('#carretera1');
    let carretera11 = $('#carretera11');

    //semaforos coches CARRETERA SECUNDARIA IZQ
    let carretera5 = $('#carretera5');
    let carretera13 = $('#carretera13');


    let intervalId;

    //tiempos de espera
    const ESPERA_ROJO_P = 5;
    const ESPERA_VERDE_P = 8;

    const EMPEZAR_AMBAR_C = 2;
    const AMBOS_ROJO = 1;

    //variables que controlan el contador
    let tiempoGeneral = 0;
    let labelPeaton = ESPERA_ROJO_P;
    let presionado = false;


    //semaforos peatonales
    const ROJO_HORIZ_P = '../recursos/img/Peatonesrojo.png';
    const VERDE_HORIZ_P = '../recursos/img/Peatonesverde.png';

    const ROJO_VERT_P = '../recursos/img/PeatonesrojoVertical.png';
    const VERDE_VERT_P = '../recursos/img/PeatonesverdeVertical.png';

    //semaforos coches
    const ROJO_C = '../recursos/img/semafororojo.png';
    const AMBAR_C = '../recursos/img/semaforoambar.png';
    const VERDE_C = '../recursos/img/semaforoverde.png';


    btnIz_peatonIz.on( 'click', function() {
        console.log('BOTON PRESIONADO')

        if(presionado){
            console.log('NO PUDES PRESIONARLO OTRA VEZ')
            return;
        }
        cont_iz.text(ESPERA_ROJO_P);
        presionado = true;
        cont_iz.css({ opacity: 1 });
        intervalId = setInterval(iniciarPeatones,1000);

    });


    function iniciarPeatones() {

        tiempoGeneral++;
        console.log(tiempoGeneral);
        labelPeaton--;
        cont_iz.text(labelPeaton);
        

        if(tiempoGeneral == ESPERA_ROJO_P - EMPEZAR_AMBAR_C){ // 5-2 = 3
            cambiarSemaforoC([carretera1, carretera11, carretera5, carretera13], AMBAR_C);

        }else if(tiempoGeneral == ESPERA_ROJO_P - EMPEZAR_AMBAR_C + AMBOS_ROJO){ // 5-2+1 = 4 
            cambiarSemaforoC([carretera1, carretera11, carretera5, carretera13], ROJO_C);

        }else if(tiempoGeneral == ESPERA_ROJO_P){ //5
            cont_iz.text(ESPERA_VERDE_P);
            labelPeaton = ESPERA_VERDE_P;
            console.log('pasar a verde');
            $(btnIz_peatonIz).children('img').attr('src', VERDE_HORIZ_P);

        }else if(tiempoGeneral == ESPERA_ROJO_P + ESPERA_VERDE_P - AMBOS_ROJO){
            $(btnIz_peatonIz).children('img').attr('src', ROJO_HORIZ_P);
        }else if(tiempoGeneral == ESPERA_ROJO_P + ESPERA_VERDE_P){
            console.log('pasa a rojo');
            $(btnIz_peatonIz).children('img').attr('src', ROJO_HORIZ_P);
            clearInterval(intervalId);
            labelPeaton = ESPERA_ROJO_P;
            contIz_iz.css({ opacity: 0 });
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



//cambio ultimo

/*
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
        }*/