$(document).ready(function () {
    $(".btnIz-Peaton").click(function (e) {
        e.preventDefault();
        setTimeout(() => {
            controlPeatones();
        }, 3000);
    });

    function cambioPeatonesIzquierda() {

        $(".CambioRojo").attr("src", "../recursos/img/semafororojo.png");
        $(".CambioVerde").attr("src", "../recursos/img/semaforoverde.png");
    }

    function controlPeatones() {
        $(".img-rojo").attr("src", "../recursos/img/Peatonesverde.png");
        $(".img-verde").attr("src", "../recursos/img/PeatonesrojoVertical.png");
    }
});