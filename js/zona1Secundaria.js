$(document).ready(function () {
    //boton peatones izquierdo arriba 
    var btnIz_peatones_Iz_Ar1 = $(".btnIz-Peaton-Ar-1");

    //contador peatones arriba izquierda
    var cont_iz_Ar1 = $("#contPeatones-Ar-1");

    //semaforo coches arriba izquierda
    var carretera5 = $("#carretera5");
    var carretera8 = $("#carretera8");

    var internavlId;
    var tiempoGen = 0;

    /**tiempo de espera */
    //Tiempo de peatones arriba izquierda
    const cont_peatonesVerde = 5;
    const cont_peatonesRojo = 8;

    //Tiempo de coche arriba izquierd
    const ambos_coche_Rojo = 2;
    const ambos_coches_Ambar = 1;

    //span de contador arriba
    var contadorPeaton = cont_peatonesVerde;
    var btnPresionado = false;

    //Fotos peaton arriba izquierda
    const img_PeatonRojoVert = "../recursos/img/PeatonesrojoVertical.png";
    const img_PeatonVerdeVert = "../recursos/img/PeatonesverdeVertical.png";

    //Foto semaforo
    const ambar_CoIz = "../recursos/img/semaforoambar.png";
    const rojo_CoIz = "../recursos/img/semafororojo.png";

    btnIz_peatones_Iz_Ar1.on("click", function () {
        console.log("Boton Peatones ARRIBA IZ PRESIONADO");
        if (btnPresionado) {
            console.log("no puedes presionar lo siento");
            return;
        }

        cont_iz_Ar1.text(cont_peatonesVerde);
        btnPresionado = true;
        cont_iz_Ar1.css({ opacity: 1 });
        internavlId = setInterval(iniciarContador, 1000)
    });

    function iniciarContador() {

        tiempoGen++;
        console.log(tiempoGen);
        contadorPeaton--;
        cont_iz_Ar1.text(contadorPeaton);

        switch (true) {
            case tiempoGen == cont_peatonesVerde - ambos_coches_Ambar://5-1=4

                cambioSemaforoCoche([carretera5, carretera8], rojo_CoIz);
                break;

            case tiempoGen == cont_peatonesVerde://5

                cont_iz_Ar1.text(cont_peatonesRojo);
                contadorPeaton = cont_peatonesRojo; //8
                console.log('pasar a rojo');
                $(btnIz_peatones_Iz_Ar1).children('img').attr("src", img_PeatonVerdeVert);
                break;

            case tiempoGen == cont_peatonesRojo + cont_peatonesVerde:

                console.log("pasar a ambar");
                $(btnIz_peatones_Iz_Ar1).children('img').attr("src", img_PeatonRojoVert);
                cont_iz_Ar1.css({ opacity: 0 });
                break;

            case tiempoGen == cont_peatonesRojo + cont_peatonesVerde + ambos_coches_Ambar:

                clearInterval(internavlId);
                internavlId = null;
                tiempoGen = 0;
                contadorPeaton = cont_peatonesVerde;
                btnPresionado = false;
                cont_iz_Ar1.css({ opacity: 0 });
                cambioSemaforoCoche([carretera5, carretera8], ambar_CoIz);
                break;

        }

        function cambioSemaforoCoche(lista, fotoCambio) {

            for (let i = 0; i < lista.length; i++) {
                lista[i].attr("src", fotoCambio)
            }

        }
    }

    /**--------------Parte que controla peatones abajo izquierda----------------- */
    //boton peatones izquierdo abajo 
    var btnIz_peatones_Iz_Ab1 = $(".btnIz-Peaton-Ab-1");

    //contador peatones abajo izquierda
    var cont_iz_Ab1 = $("#contPeatones-Ab-1");

    //semaforo coches abajo izquierda
    var carretera13 = $("#carretera13");
    var carretera4 = $("#carretera4");

    var internavlId2;
    var tiempoGen2 = 0;

    /**tiempo de espera */
    //Tiempo de peatones arriba izquierda
    const cont_peatonesVerde2 = 5;
    const cont_peatonesRojo2 = 8;

    //Tiempo de coche arriba izquierd
    const ambos_coche_Rojo2 = 2;
    const ambos_coches_Ambar2 = 1;
    //span de contador abajo
    var contadorPeaton2 = cont_peatonesVerde2;
    var btnPresionado2 = false;

    //Fotos peaton arriba izquierda
    const img_PeatonRojoVert2 = "../recursos/img/PeatonesrojoVertical.png";
    const img_PeatonVerdeVert2 = "../recursos/img/PeatonesverdeVertical.png";

    //Foto semaforo
    const ambar_CoIzAb = "../recursos/img/semaforoambar.png";
    const rojo_CoIzAb = "../recursos/img/semafororojo.png";

    btnIz_peatones_Iz_Ab1.on("click", function () {

        console.log("Boton Peatones ARRIBA IZ PRESIONADO");
        if (btnPresionado2) {
            console.log("no puedes presionar lo siento");
            return;
        }
        
        cont_iz_Ab1.text(cont_peatonesVerde2);
        btnPresionado2 = true;
        cont_iz_Ab1.css({ opacity: 1 });
        internavlId2 = setInterval(iniciarContador2, 1000)

    });
    function iniciarContador2() {

        tiempoGen2++;
        console.log(tiempoGen);
        contadorPeaton2--;
        cont_iz_Ab1.text(contadorPeaton2);

        switch (true) {

            case tiempoGen2 == cont_peatonesVerde2 - ambos_coches_Ambar2://5-1=4

                cambioSemaforoCoche2([carretera13, carretera4], rojo_CoIzAb);
                break;

            case tiempoGen2 == cont_peatonesVerde2://5

                cont_iz_Ab1.text(cont_peatonesRojo2);
                contadorPeaton2 = cont_peatonesRojo2; //8
                console.log('pasar a rojo');
                $(btnIz_peatones_Iz_Ab1).children('img').attr("src", img_PeatonVerdeVert2);
                break;

            case tiempoGen2 == cont_peatonesRojo2 + cont_peatonesVerde2:

                console.log("pasar a ambar");
                $(btnIz_peatones_Iz_Ab1).children('img').attr("src", img_PeatonRojoVert2);
                cont_iz_Ab1.css({ opacity: 0 });
                break;

            case tiempoGen2 == cont_peatonesRojo2 + cont_peatonesVerde2 + ambos_coches_Ambar2:

                clearInterval(internavlId2);
                internavlId2 = null;
                tiempoGen2 = 0;
                contadorPeaton2 = cont_peatonesVerde2; //5
                btnPresionado2 = false;
                cambioSemaforoCoche2([carretera13, carretera4], ambar_CoIzAb);
                break;
        }
        function cambioSemaforoCoche2(lista2, fotoCambio2) {

            for (let i = 0; i < lista2.length; i++) {
                lista2[i].attr("src", fotoCambio2)
            }

        }
    }

});