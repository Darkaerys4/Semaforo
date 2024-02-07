$(document).ready(function () {
    $(".btnIz-Peaton-Ar").each(function () {
        var pulsarBoton = false;
        $(this).click(function () {
            if (!pulsarBoton) {
                pulsarBoton = true;
                var contador1 = 3;
                $(".contPeatones-Ar-1").text(contador1);
                var intervalo1 = setInterval(() => {
                    contador1--;
                    $(".contPeatones-Ar-1").text(contador1);
                    if (contador1 == 1) {
                        $(".sema-Co-Ar").attr("src", "../recursos/img/semafororojo.png");
                    }
                    else if (contador1 == 0) {
                        clearInterval(intervalo1);
                        controlPeatonesAr1("verde", "rojo")
                    }
                }, 1000);
            }
        });
        function controlPeatonesAr1(colorP, colorS) {
            $(".sema-Co-Ar").attr("src", "../recursos/img/semaforo"+colorS+".png");
            $(".img-rojo-Vr-1").attr("src", "../recursos/img/Peatones" + colorP + "Vertical.png");
            var segundos = 3;
            $(".contPeatones-Ar-1").text(segundos);
            intervalo2 = setInterval(function () {
                segundos--;
                $(".contPeatones-Ar-1").text(segundos);
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
                    $(".contPeatones-Ar-1").text(" ");
                    if (colorS == "rojo") {
                        setTimeout(function () {
                            controlPeatonesAr1("rojo", "ambar")
                            clearInterval(intervalo2);
                            $(".contPeatones-Ar-1").text(" ");
                        }, 2000);
                    }

                }
            }
        }
    });

    $(".btnIz-Peaton-Ab").each(function () {
        var pulsarBoton = false;
        $(this).click(function () {
            if (!pulsarBoton) {
                pulsarBoton = true;
                var contador1 = 3;
                $(".contPeatones-Ab-1").text(contador1);
                var intervalo1 = setInterval(() => {
                    contador1--;
                    $(".contPeatones-Ab-1").text(contador1);
                    if (contador1 == 1) {
                        $(".sema-Co-Ab").attr("src", "../recursos/img/semafororojo.png");
                    }
                    else if (contador1 == 0) {
                        clearInterval(intervalo1);
                        controlPeatonesAr2("verde", "rojo")
                    }
                }, 1000);
            }
        });
        function controlPeatonesAr2(colorP, colorS) {
            $(".sema-Co-Ab").attr("src", "../recursos/img/semaforo"+colorS+".png");
            $(".img-rojo-Vr-2").attr("src", "../recursos/img/Peatones" + colorP + "Vertical.png");
            var segundos = 3;
            $(".contPeatones-Ab-1").text(segundos);
            intervalo2 = setInterval(function () {
                segundos--;
                $(".contPeatones-Ab-1").text(segundos);
                if (segundos == 0) {
                    clearInterval(intervalo2);
                    cambioARojoVerAr2();
                }
            }, 1000);
            //Parte que devuelve la imagen  
            function cambioARojoVerAr2() {
                if (colorP == "verde") {
                    pulsarBoton = false;
                    controlPeatonesAr2("rojo", "rojo")
                    clearInterval(intervalo2);
                    $(".contPeatones-Ab-1").text(" ");
                    if (colorS == "rojo") {
                        setTimeout(function () {
                            controlPeatonesAr2("rojo", "ambar")
                            clearInterval(intervalo2);
                            $(".contPeatones-Ab-1").text(" ");
                        }, 2000);
                    }

                }
            }
        }
    });

});