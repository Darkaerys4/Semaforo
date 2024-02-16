$(document).ready(function(){

    //arriba
    let carretera5 = $('#carretera5');
    let carretera8 = $('#carretera8');
    let carretera6 = $('#carretera6');
    let carretera7 = $('#carretera7');

    //abajo
    let carretera13 = $('#carretera13');
    let carretera4 = $('#carretera4');
    let carretera14 = $('#carretera14');
    let carretera3 = $('#carretera3');

    //semaforos de las esquinas
    let carretera12 = $('#carretera12');
    let carretera9 = $('#carretera9');

    let list = [carretera5,carretera8,carretera6,carretera7,carretera13,carretera4,carretera14,carretera3];

    let intermitentes_interval;

    const SEMAFORO_APAGADO_C = '../recursos/img/semaforo.png';
    const SEMAFORO_AMBAR_C = '../recursos/img/semaforoambar.png';
    const SEMAFORO_ROJO_C = '../recursos/img/semafororojo.png';
    const SEMAFORO_VERDE_C = '../recursos/img/semaforoverde.png';

    const ESPERA_ROJO_P = 5;
    const ESPERA_VERDE_P = 8;
    const ESPERA_AMBAR = 2;

    intermitentes_interval = setInterval(iniciarIntermitentes,1000);
    let inter = true;
    let cont = 0;

    function iniciarIntermitentes(){
        cont++;
        console.log('interval ' + cont);

        if(inter){
            alternarSemaforos(SEMAFORO_APAGADO_C);
            inter = false;
        }else{
            inter = true;
            alternarSemaforos(SEMAFORO_AMBAR_C);
        }

        if(cont == ESPERA_VERDE_P){ //8
            console.log('cambiar')
            cambiarSemaforos([carretera12,carretera9], SEMAFORO_AMBAR_C);
        }else if(cont == ESPERA_VERDE_P + ESPERA_AMBAR){ //8+1 = 9
            cambiarSemaforos([carretera12,carretera9], SEMAFORO_ROJO_C);
        }else if(cont == ESPERA_VERDE_P + ESPERA_ROJO_P + ESPERA_AMBAR){ //8+5 = 13
            cambiarSemaforos([carretera12,carretera9], SEMAFORO_VERDE_C);
            cont = 0;
        }

        
    }

    function alternarSemaforos(fotoCambiar){ 

        for(let i = 0; i< list.length ;i++){
            //list[i].attr('src', fotoCambiar);
            let src = list[i].attr('src');

            if(src == SEMAFORO_ROJO_C){
                continue;
            }

            list[i].attr('src', fotoCambiar);

        }

    }

    function cambiarSemaforos(list, fotoCambiar){
        for(let i = 0 ; i < list.length; i++){
            list[i].attr('src', fotoCambiar);
        }
    }

    

});
