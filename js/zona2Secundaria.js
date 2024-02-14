/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/**++++++++++++++++++++++++Parte de la derecha+++++++++++++++++++++++ */
/**Parte de arriba */
$(document).ready(function () {
    /** Parte de arriba  */
    //boton peatones derecha arriba 
    var btnDr_peatones_Ar1 = $(".btnDr-Peaton-Ar-1");

    //contador peatones derecha arriba 
    var cont_dr_Ar1 = $("#contPeatones-Dr-1");

    //semaforo coches derecha arriba 
    var carretera6 = $("#carretera6");
    var carretera7 = $("#carretera7");

    var internavlIdDrAr;
    var tiempoGenDrAr = 0;

    /**tiempo de espera */
    //Tiempo de peatones derecha arriba 
    const cont_peatonesVerde_Dr_Ar = 5;
    const cont_peatonesRojo_Dr_Ar = 8;

    //Tiempo de coche derecha arriba 
    const ambos_coche_Rojo_Dr_Ar = 2;
    const ambos_coches_Ambar_Dr_Ar = 1;
    //span de contador  arriba 
    var contadorPeaton_Dr_Ar = cont_peatonesVerde_Dr_Ar;
    var btnPresionado_Dr_Ar = false;
    //Fotos peaton derecha arriba 
    const img_PeatonRojoVert_Dr_Ar = "../recursos/img/PeatonesrojoVertical.png";
    const img_PeatonVerdeVert_Dr_Ar = "../recursos/img/PeatonesverdeVertical.png";

    //Foto semaforo
    const ambar_CoDr_Ar = "../recursos/img/semaforoambar.png";
    const rojo_CoDr_Ar = "../recursos/img/semafororojo.png";

    btnDr_peatones_Ar1.on("click", function () {

        console.log("Boton Peatones ARRIBA IZ PRESIONADO");
        if (btnPresionado_Dr_Ar) {
            console.log("no puedes presionar lo siento");
            return;
        }

        cont_dr_Ar1.text(cont_peatonesVerde_Dr_Ar);
        btnPresionado_Dr_Ar = true;
        cont_dr_Ar1.css({ opacity: 1 });
        internavlIdDrAr = setInterval(iniciarContadorDrAr, 1000)

    });

    function iniciarContadorDrAr() {

        tiempoGenDrAr++;
        console.log(tiempoGenDrAr);
        contadorPeaton_Dr_Ar--;
        cont_dr_Ar1.text(contadorPeaton_Dr_Ar);

        switch (true) {

            case tiempoGenDrAr == cont_peatonesVerde_Dr_Ar - ambos_coches_Ambar_Dr_Ar://5-1=4

                cambioSemaforoCocheDr([carretera6, carretera7], rojo_CoDr_Ar);
                break;

            case tiempoGenDrAr == cont_peatonesVerde_Dr_Ar://5

                cont_dr_Ar1.text(cont_peatonesRojo_Dr_Ar);
                contadorPeaton_Dr_Ar = cont_peatonesRojo_Dr_Ar; //8
                console.log('pasar a rojo');
                $(btnDr_peatones_Ar1).children('img').attr("src", img_PeatonVerdeVert_Dr_Ar);
                break;

            case tiempoGenDrAr == cont_peatonesRojo_Dr_Ar + cont_peatonesVerde_Dr_Ar:

                console.log("pasar a ambar");
                $(btnDr_peatones_Ar1).children('img').attr("src", img_PeatonRojoVert_Dr_Ar);
                cont_dr_Ar1.css({ opacity: 0 });
                break;

            case tiempoGenDrAr == cont_peatonesRojo_Dr_Ar + cont_peatonesVerde_Dr_Ar + ambos_coches_Ambar_Dr_Ar:

                clearInterval(internavlIdDrAr);
                internavlIdDrAr = null;
                tiempoGenDrAr = 0;
                contadorPeaton_Dr_Ar = cont_peatonesVerde_Dr_Ar; //5
                btnPresionado_Dr_Ar = false;
                cambioSemaforoCocheDr([carretera6, carretera7], ambar_CoDr_Ar);
                break;
        }
        function cambioSemaforoCocheDr(lista3, fotoCambio3) {

            for (let i = 0; i < lista3.length; i++) {
                lista3[i].attr("src", fotoCambio3)
            }

        }
    }

    /**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /**++++++++++++++++++++++++Parte de la derecha+++++++++++++++++++++++ */
    /**Parte de abajo */

    //boton peatones derecha abajo 
    var btnIz_peatones_Dr_Ab = $(".btnDr-Peaton-Ab");

    //contador peatones derecha abajo 
    var cont_dr_Ab1 = $("#contPeatones-Dr-2");

    //semaforo coches derecha abajo 
    var carretera14 = $("#carretera14");
    var carretera3 = $("#carretera3");

    var internavlIdDrAb;
    var tiempoGenDrAb = 0;

    /**tiempo de espera */
    //Tiempo de peatones derecha abajo 
    const cont_peatonesVerde_Dr_Ab = 5;
    const cont_peatonesRojo_Dr_Ab = 8;

    //Tiempo de coche derecha abajo 
    const ambos_coche_Rojo_Dr_Ab = 2;
    const ambos_coches_Ambar_Dr_Ab = 1;
    //span de contador  arriba 
    var contadorPeaton_Dr_Ab = cont_peatonesVerde_Dr_Ab;
    var btnPresionado_Dr_Ab = false;
    //Fotos peaton derecha abajo 
    const img_PeatonRojoVert_Dr_Ab = "../recursos/img/PeatonesrojoVertical.png";
    const img_PeatonVerdeVert_Dr_Ab = "../recursos/img/PeatonesverdeVertical.png";

    //Foto semaforo
    const ambar_CoDr_Ab = "../recursos/img/semaforoambar.png";
    const rojo_CoDr_Ab = "../recursos/img/semafororojo.png";

    btnIz_peatones_Dr_Ab.on("click", function () {

        console.log("Boton Peatones ARRIBA dr abajo PRESIONADO");
        if (btnPresionado_Dr_Ab) {
            console.log("no puedes presionar lo siento");
            return;
        }

        cont_dr_Ab1.text(cont_peatonesVerde_Dr_Ab);
        btnPresionado_Dr_Ab = true;
        cont_dr_Ab1.css({ opacity: 1 });
        internavlIdDrAb = setInterval(iniciarContadorDrAb, 1000)

    });

    function iniciarContadorDrAb() {

        tiempoGenDrAb++;
        console.log(tiempoGenDrAb);
        contadorPeaton_Dr_Ab--;
        cont_dr_Ab1.text(contadorPeaton_Dr_Ab);

        switch (true) {

            case tiempoGenDrAb == cont_peatonesVerde_Dr_Ab - ambos_coches_Ambar_Dr_Ab://5-1=4

                cambioSemaforoCocheDrAb([carretera14, carretera3], rojo_CoDr_Ab);
                break;

            case tiempoGenDrAb == cont_peatonesVerde_Dr_Ab://5

                cont_dr_Ab1.text(cont_peatonesRojo_Dr_Ab);
                contadorPeaton_Dr_Ab = cont_peatonesRojo_Dr_Ab; //8
                console.log('pasar a rojo');
                $(btnIz_peatones_Dr_Ab).children('img').attr("src", img_PeatonVerdeVert_Dr_Ab);
                break;

            case tiempoGenDrAb == cont_peatonesRojo_Dr_Ab + cont_peatonesVerde_Dr_Ab:

                console.log("pasar a ambar");
                $(btnIz_peatones_Dr_Ab).children('img').attr("src", img_PeatonRojoVert_Dr_Ab);
                cont_dr_Ab1.css({ opacity: 0 });
                break;

            case tiempoGenDrAb == cont_peatonesRojo_Dr_Ab + cont_peatonesVerde_Dr_Ab + ambos_coches_Ambar_Dr_Ab:

                clearInterval(internavlIdDrAb);
                internavlIdDrAb = null;
                tiempoGenDrAb = 0;
                contadorPeaton_Dr_Ab = cont_peatonesVerde_Dr_Ab; //5
                btnPresionado_Dr_Ab = false;
                cambioSemaforoCocheDrAb([carretera14, carretera3], ambar_CoDr_Ab);
                break;
        }
        function cambioSemaforoCocheDrAb(lista4, fotoCambio4) {

            for (let i = 0; i < lista4.length; i++) {
                lista4[i].attr("src", fotoCambio4)
            }

        }
    }
});
