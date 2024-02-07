$(document).ready(function () {
    var pulsarBoton = false;
    $(".btnIz-Peaton").click(function () {
        if (!pulsarBoton) {
            pulsarBoton = true;
            var contador1 = 3;
            $(".contPeatones").text(contador1);
            var intervalo1 = setInterval(() => {
                contador1--;
                $(".contPeatones").text(contador1);
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
        var segundos1 = 3;
        $(".contPeatones").text(segundos1);
        intervalo2 = setInterval(function () {
            segundos1--;
            $(".contPeatones").text(segundos1);
            if (segundos1 == 0) {
                clearInterval(intervalo2);
                if (color1 == "verde" && color2 == "rojo") {
                    pulsarBoton = false;
                    controlPeatones("rojo", "verde")
                    clearInterval(intervalo2);
                    $(".contPeatones").text(" ");
                }
            }
        }, 1000);
    }
});
//calle secundaria por arriba
$(document).ready(function () {
    var pulsarBoton = false;
    $(".btnIz-Peaton_2Arriba").click(function () {
        if (!pulsarBoton) {
            pulsarBoton = true;
            var contador2 = 3;
            $(".contPeatones2Arriba").text(contador2);
            var intervalo3 = setInterval(() => {
                contador2--;
                $(".contPeatones2Arriba").text(contador2);
                if (contador2 == 0) {
                    clearInterval(intervalo3);
                    controlPeatones2Arriba("verde")                    
                }
                else if (contador2 == 1)
                {
                    controlcarretera2Arriba("rojo")
                }
            }, 1000);
        }
    });

    function controlPeatones2Arriba(color1) {
        $(".img-rojo2Arriba").attr("src", "../recursos/img/Peatones" + color1 + "Vertical.png");
        var segundos2 = 3;
        $(".contPeatones2Arriba").text(segundos2);
        intervalo4 = setInterval(function () {
            segundos2--;
            $(".contPeatones2Arriba").text(segundos2);
            if (segundos2 == 0) {
                clearInterval(intervalo4);
                if (color1 == "verde") {
                    pulsarBoton = false;
                    controlPeatones2Arriba("rojo")
                    clearInterval(intervalo4);
                    $(".contPeatones2Arriba").text(" ");
                }
            }
        }, 1000);
    }

    function controlcarretera2Arriba(color1) {
        $(".calle-carretera2Arriba").attr("src", "../recursos/img/semaforo" + color1 + ".png");
        var segundos3 = 5;
        intervalo5 = setInterval(function () {
            segundos3--;
            if (segundos3 == 0) {
                clearInterval(intervalo5);
                if (color1 == "rojo") {
                    pulsarBoton = false;
                    controlcarretera2Arriba("ambar")
                    clearInterval(intervalo5);
                }
            }
        }, 1000);
    }
});
//calle secundaria por abajo
$(document).ready(function () {
    var pulsarBoton = false;
    $(".btnIz-Peaton_2Abajo").click(function () {
        if (!pulsarBoton) {
            pulsarBoton = true;
            var contador3 = 3;
            $(".contPeatones2Abajo").text(contador3);
            var intervalo6 = setInterval(() => {
                contador3--;
                $(".contPeatones2Abajo").text(contador3);
                if (contador3 == 0) {
                    clearInterval(intervalo6);
                    controlPeatones2Abajo("verde")                    
                }
                else if (contador3 == 1)
                {
                    controlcarretera2Abajo("rojo")
                }
            }, 1000);
        }
    });

    function controlPeatones2Abajo(color1) {
        $(".img-rojo2Abajo").attr("src", "../recursos/img/Peatones" + color1 + "Vertical.png");
        var segundos4 = 3;
        $(".contPeatones2Abajo").text(segundos4);
        intervalo7 = setInterval(function () {
            segundos4--;
            $(".contPeatones2Abajo").text(segundos4);
            if (segundos4 == 0) {
                clearInterval(intervalo7);
                if (color1 == "verde") {
                    pulsarBoton = false;
                    controlPeatones2Abajo("rojo")
                    clearInterval(intervalo7);
                    $(".contPeatones2Abajo").text(" ");
                }
            }
        }, 1000);
    }

    function controlcarretera2Abajo(color1) {
        $(".calle-carretera2Abajo").attr("src", "../recursos/img/semaforo" + color1 + ".png");
        var segundos5 = 5;
        intervalo8 = setInterval(function () {
            segundos5--;
            if (segundos5 == 0) {
                clearInterval(intervalo8);
                if (color1 == "rojo") {
                    pulsarBoton = false;
                    controlcarretera2Abajo("ambar")
                    clearInterval(intervalo8);
                }
            }
        }, 1000);
    }
});