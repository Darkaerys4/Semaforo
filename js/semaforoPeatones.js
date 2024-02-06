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

    function controlPeatones(color1, color2) {
        $(".img-rojo").attr("src", "../recursos/img/Peatones" + color1 + ".png");
        $(".img-verde").attr("src", "../recursos/img/Peatones" + color2 + "Vertical.png");
        var segundos = 3;
        $(".contador-verde-horizontal").text(segundos);
        intervalo2 = setInterval(function () {
            segundos--;
            $(".contador-verde-horizontal").text(segundos);
            if (segundos == 0) {
                clearInterval(intervalo2);
                if (color1 == "verde" && color2 == "rojo") {
                    pulsarBoton = false;
                    controlPeatones("rojo", "verde")
                    clearInterval(intervalo2);
                    $(".contador-verde-horizontal").text(" ");
                }
            }
        }, 1000);
    }
});