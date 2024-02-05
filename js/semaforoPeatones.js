$(document).ready(function () {

    let peatonesDerecha = $('.peatones-derecha');
    const PEATON_VERDE = '../recursos/img/Peatonesverde.png';

    $(peatonesDerecha).click(function (e) {
        setInterval(peatonesDerecha,3000);
        peatonesDerecha.attr('src', PEATON_VERDE);
        });
});