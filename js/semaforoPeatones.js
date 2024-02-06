$(document).ready(function () {

    let peatonesDerechaH = $('.peatones-derecha');
    let peatonesDerechaV = $('.peatones-derecha-vertical');
    let tmp = 0;
    const PEATON_VERDE_HORIZONTAL = '../recursos/img/Peatonesverde.png';
    const PEATON_VERDE_VERTICAL = '../recursos/img/PeatonesverdeVertical.png';
    const PEATON_ROJO_HORIZONTAL = '../recursos/img/Peatonesrojo.png';
    const PEATON_ROJO_VERTICAL = '../recursos/img/PeatonesrojoVertical.png';

    $(peatonesDerechaH).click(function (e) {
        setInterval(() => {
            peatonesDerechaH.attr('src', PEATON_VERDE_HORIZONTAL);
            peatonesDerechaV.attr('src', PEATON_ROJO_VERTICAL);
            tmp++;
            console.log(tmp);
            if (tmp == 5) {
                peatonesDerechaH.attr('src', PEATON_ROJO_HORIZONTAL);
                peatonesDerechaV.attr('src', PEATON_VERDE_VERTICAL);
            }
            
        }, 1000);
        });

        
});