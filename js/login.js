document.getElementById("div2").style.display = "none";
document.getElementById("h1").style.display = "none";

//Array de usuarios
var usuarios = [
    {
        id: "B2356",
        nombre: "Alex"
    },
    {
        id: "M1365",
        nombre: "Markel"
    },
    {
        id: "J4852",
        nombre: "Junior"
    },
];

$(document).ready(function () {
    $("#btn-Salir").click(function (e) {
        e.preventDefault();
        $("#div2").show(1000);
        $("#div1").hide(400);
    });

    $("#btnCancelar").click(function (e) {
        e.preventDefault();
        $("#div1").show(1000);
        $("#div2").hide(400);
    });

    $("#btnExit").click(function (e) {
        e.preventDefault();
        window.close();
    });

    // $("#btn-Pruebas").click(function(e){
    // $('#mapa.html').fadeIn(slow);
    // $('#h1').fadeIn(1000);
    // });

    var usuCorrecto = false;
    $("#btnIngresar").click(function (e) {
        if ($("#identificador").val().length < 1 || $("#nombre").val().length < 1) {
            $("#identificador").css("borderColor", "#ff0000");
            $("#nombre").css("borderColor", "#ff0000");
            $('#errorIdentificacion').html("Por favor, ingrese algun dato ");
        }
        for (let i = 0; i < usuarios.length; i++) {
            if ($("#identificador").val() == usuarios[i].id && $("#nombre").val() == usuarios[i].nombre) {
                usuCorrecto = true;
                break;
            }
        }
        if (usuCorrecto) {
            console.log("Usuario loggeado");
            $("#div1").fadeOut(1500, function () {
                location.href = "mapaANTIGUO.html";
            });
            
        } else {
            $("#identificador").css("borderColor", "#ff0000");
            $("#nombre").css("borderColor", "#ff0000");
            $('#errorIdentificacion').html("Error usuario o contraseña erroneo");
        }
    });
});
