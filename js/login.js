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
    if (id.value == "") {
        errorI.innerHTML = "";
    }
});
/*Evento que se mantiene a la escucha que en caso de darle click al boton salir,
sale de la aplicacion*/
btnSalir.addEventListener("click", function () {
    window.close();
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
    if (/^[A-Z]\d{4}$/.test(id.value)) {
        errorI.innerHTML = " ";
    } else {
        errorI.innerHTML = "!ERROR!,Identificador EJ: T1111";
    }

};