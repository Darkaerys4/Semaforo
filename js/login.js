document.getElementById("div2").style.display = "none";

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

var id = document.getElementById("identificador");
var nombre = document.getElementById("nombre");
var btnSalir = document.getElementById("btn-Salir");
var errorI = document.getElementById("errorIdentificacion");




//Parte que comprueba al usuario y el nombre
function comprobarUsu() {
    var usuCorrecto = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (id.value == usuarios[i].id && nombre.value == usuarios[i].nombre) {
            usuCorrecto = true;
            break
        }
    }
    if (usuCorrecto) {
        console.log("Usuario loggeado");
        location.href = "mapa.html"
    } else {
        console.log("usuario o indentificador incorrecto");
        pattern();
    }
}


function pattern() {
    for (let i = 0; i < usuarios.length; i++) {
        if (id.value == "" || nombre.value == "") {
            errorI.innerHTML = "Por favor, ingrese algun dato";
            id.style.borderColor = "red";
            nombre.style.borderColor = "red";
        }
        else if (id.value != id.usuarios || nombre.value != nombre.usuarios) {
            errorI.innerHTML = "!ERROR!,Identificador o nombre incorrecto";
            id.style.borderColor = "red";
            nombre.style.borderColor = "red";
        }
    }
}
id.addEventListener("input", function () {
    if (id != " ") {
        errorI.innerHTML = "";
        id.style.borderColor = "none";
        nombre.style.borderColor = "none";
    }

})
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
});
