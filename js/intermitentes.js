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

    let list = [carretera5,carretera8,carretera6,carretera7,carretera13,carretera4,carretera14,carretera3];

    let intermitentes_interval;

    const SEMAFORO_APAGADO_C = '../recursos/img/semaforo.png';
    const SEMAFORO_AMBAR_C = '../recursos/img/semaforoambar.png';

    intermitentes_interval = setInterval(iniciarIntermitentes,900);
    let inter = true;

    function iniciarIntermitentes(){
        console.log('interval');
        if(inter){
            alternarSemaforos(SEMAFORO_APAGADO_C);
            inter = false;
        }else{
            inter = true;
            alternarSemaforos(SEMAFORO_AMBAR_C);
        }
        
    }

    function alternarSemaforos(fotoCambiar){ 

        for(let i = 0; i< list.length ;i++){
            list[i].attr('src', fotoCambiar);
        }

    }

    function verificar(){

        for(let i = 0; i< list.length ;i++){
            list[i].attr('src', fotoCambiar);
        }

    }

    

});
