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

var id = document.getElementById(identificador);
var nombre = document.getElementById(nombre);

function comprobarUsu() {
    var id = id.value;
    var nombre = nombre.value;
    var usuCorrecto = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (id == usuarios[i].id && nombre == usuarios[i].nombre) {
            usuCorrecto = true;
            break
        }
    }
    if (usuCorrecto) {
        console.log("Usuario loggeado");
    }else{
        console.log("usuario o indentificador incorrecto");
    }
}