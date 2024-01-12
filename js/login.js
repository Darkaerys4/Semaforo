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

id.addEventListener("input", function () {
    if (id.value == "" && nombre.value == "") {
        errorI.innerHTML = "";
        id.style.borderColor = "";
        nombre.style.borderColor = "";
    } else if (id.value != "" && nombre.value != "") {
        errorI.innerHTML = "";
        id.style.borderColor = "";
        nombre.style.borderColor = "";
    }
});
/*Evento que se mantiene a la escucha que en caso de darle click al boton salir,
sale de la aplicacion*/
btnSalir.addEventListener("click", function () {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
})

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


function salir() {
    window.close();
}

function cancelar() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
}