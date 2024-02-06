$(document).ready(function () {
    var pulsarBoton = false;
    $(".btnIz-Peaton").click(function () {
        if (!pulsarBoton) {
            pulsarBoton = true;
            var contador1 = 3;
            $(".contador-verde-horizontal").text(contador1);
            var intervalo1 = setInterval(() => {
                contador1--;
                $(".contador-verde-horizontal").text(contador1);
                if (contador1 == 0) {
                    clearInterval(intervalo1);
                    controlPeatones("verde", "rojo")
                }
            }, 1000);
        }
    });

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