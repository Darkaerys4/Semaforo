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


var id = document.getElementById(identificador);
var nombre = document.getElementById(nombre);

function salir(){
    if (id == 0) {
        window.close();
        return;
    }
}


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
    }
}