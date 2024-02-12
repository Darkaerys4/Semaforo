$(document).ready(function () {
    var pulsarBoton = false;
    $(".btnIz-Peaton-Ar").click(function () {
        if (pulsarBoton) {
            return;
        }
        pulsarBoton = true;
        var contador1 = 5;
        $("#contPeatones-Ar-1").text(contador1);
        var intervalo1 = setInterval(() => {
            contador1--;
            $("#contPeatones-Ar-1").text(contador1);
            if (contador1 == 1) {
                $(".sema-Co-Ar").attr("src", "../recursos/img/semafororojo.png");
            }
            else if (contador1 == 0) {
                clearInterval(intervalo1);
                controlPeatonesAr1("verde", "rojo")
            }
        }, 1000);
    });
    function controlPeatonesAr1(colorP, colorS) {
        $(".sema-Co-Ar").attr("src", "../recursos/img/semaforo" + colorS + ".png");
        $(".img-rojo-Vr-1").attr("src", "../recursos/img/Peatones" + colorP + "Vertical.png");
        var segundos = 8;
        $("#contPeatones-Ar-1").text(segundos);
        intervalo2 = setInterval(function () {
            segundos--;
            $("#contPeatones-Ar-1").text(segundos);
            if (segundos == 0) {
                clearInterval(intervalo2);
                cambioARojoVerAr();
            }
        }, 1000);
        //Parte que devuelve la imagen  
        function cambioARojoVerAr() {
            if (colorP == "verde") {
                pulsarBoton = false;
                controlPeatonesAr1("rojo", "rojo")
                clearInterval(intervalo2);
                $("#contPeatones-Ar-1").text(" ");
                if (colorS == "rojo") {
                    setTimeout(function () {
                        controlPeatonesAr1("rojo", "ambar")
                        clearInterval(intervalo2);
                        $("#contPeatones-Ar-1").text(" ");
                    }, 2000);
                }

            }
        }
    }



    var pulsarBoton2 = false;
    $(".btnIz-Peaton-Ab").click(function () {
        if (pulsarBoton2) {
            return;
        }
        pulsarBoton2 = true;
        var contador2 = 3;
        $(".contPeatones-Ab-1").text(contador2);
        var intervalo2 = setInterval(() => {
            contador2--;
            $(".contPeatones-Ab-1").text(contador2);
            if (contador2 == 1) {
                $(".sema-Co-Ab").attr("src", "../recursos/img/semafororojo.png");
            }
            else if (contador2 == 0) {
                clearInterval(intervalo2);
                controlPeatonesAr2("verde", "rojo")
            }
        }, 1000);

    });
    function controlPeatonesAr2(colorP, colorS) {
        $(".sema-Co-Ab").attr("src", "../recursos/img/semaforo" + colorS + ".png");
        $(".img-rojo-Vr-2").attr("src", "../recursos/img/Peatones" + colorP + "Vertical.png");
        var segundos2 = 5;
        $(".contPeatones-Ab-1").text(segundos2);
        intervalo3 = setInterval(function () {
            segundos2--;
            $(".contPeatones-Ab-1").text(segundos2);
            if (segundos2 == 0) {
                clearInterval(intervalo3);
                cambioARojoVerAr2();
            }
        }, 1000);
        //Parte que devuelve la imagen  
        function cambioARojoVerAr2() {
            if (colorP == "verde") {
                pulsarBoton2 = false;
                controlPeatonesAr2("rojo", "rojo")
                clearInterval(intervalo3);
                $(".contPeatones-Ab-1").text(" ");
                if (colorS == "rojo") {
                    setTimeout(function () {
                        controlPeatonesAr2("rojo", "ambar")
                        clearInterval(intervalo3);
                        $(".contPeatones-Ab-1").text(" ");
                    }, 2000);
                }
            }
        }
    }



    //calle segundaria derecha
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
                else if (contador2 == 1) {
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

    
    //calle secundaria por abajo

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
                else if (contador3 == 1) {
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