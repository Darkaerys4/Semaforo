/*Zona1*/
let nIntervId;
let nIntervId2;
let nIntervId3;
let nIntervId4;
var totalTimeRojo = 3;
var totalTimeVerde = 3;
var totalTimeRojo2 = 3;
var totalTimeVerde2 = 3;
var bool = false; 
function startZona1(){ 
    var bool = true;   
    zona1_1();
    zonz1_2();
    zona1_3();
    zonz1_4();
    start(bool);    
}     

function zona1_1() {         
    if (!nIntervId) {                
        nIntervId = setInterval(peatonverde, 3000,updateClock());
    }
}
function zonz1_2() {
    if (!nIntervId2) {                
        nIntervId2 = setInterval(peaton2, 3000);
    }
}
function zona1_3() {
    if (!nIntervId3) {                
        nIntervId3 = setInterval(peaton1_3, 3000);
    }
}
function zonz1_4() {
    if (!nIntervId4) {                
        nIntervId4 = setInterval(peaton1_4, 3000);
    }
}
function peatonverde(){
    var img = document.getElementById("peat");
    img.src="../recursos/img/Peatonesverde.png";
    clearInterval(nIntervId);   
    nIntervId = null;    
    if (!nIntervId) {                
        nIntervId = setInterval(peatonrojo,3000,updateClockVerde());
    }            
}
function peaton2(){
    var img = document.getElementById("peat2");
    img.src="../recursos/img/Peatonesverde.png";
    clearInterval(nIntervId2);        
    nIntervId2 = null;
    if (!nIntervId2) {                
        nIntervId2 = setInterval(peatonrojo2,3000);
    }  
    return false;
}
function peaton1_3(){
    var img = document.getElementById("peat1_3");
    img.src="../recursos/img/Peatonesverde.png";
    clearInterval(nIntervId3);         
    nIntervId3 = null;
    if (!nIntervId3) {                
        nIntervId3 = setInterval(peatonrojo3,3000);
    }  
    return false;
}
function peaton1_4(){
    var img = document.getElementById("peat1_4");
    img.src="../recursos/img/Peatonesverde.png";
    clearInterval(nIntervId4);        
    nIntervId4 = null;    
    if (!nIntervId4) {                
        nIntervId4 = setInterval(peatonrojo4,3000);
    }  
    return false;
}
function peatonrojo(){
    var img = document.getElementById("peat");
    img.src="../recursos/img/Peatonesrojo.png";
    clearInterval(nIntervId);         
    nIntervId = null;
    return false;
}
function peatonrojo2(){
    var img = document.getElementById("peat2");
    img.src="../recursos/img/Peatonesrojo.png";
    clearInterval(nIntervId2);         
    nIntervId2 = null;
    return false;
}
function peatonrojo3(){
    var img = document.getElementById("peat1_3");
    img.src="../recursos/img/Peatonesrojo.png";
    clearInterval(nIntervId3);         
    nIntervId3 = null;
    return false;
}
function peatonrojo4(){
    var img = document.getElementById("peat1_4");
    img.src="../recursos/img/Peatonesrojo.png";
    clearInterval(nIntervId4);         
    nIntervId4 = null;
    return false;
}

/*Zona2*/
let nIntervId2_1;
let nIntervId2_2;
let nIntervId2_3;
let nIntervId2_4;
function startZona2(){
    zona2_1();
    zonz2_2();
    zona2_3();
    zonz2_4();   
}
function zona2_1() {
    if (!nIntervId2_1) {                
        nIntervId2_1 = setInterval(peaton2_1, 3000, updateClock2());
    }
}
function zonz2_2() {
    if (!nIntervId2_2) {                
        nIntervId2_2 = setInterval(peaton2_2, 3000);
    }
}
function zona2_3() {
    if (!nIntervId2_3) {                
        nIntervId2_3 = setInterval(peaton2_3, 3000);
    }
}
function zonz2_4() {
    if (!nIntervId2_4) {                
        nIntervId2_4 = setInterval(peaton2_4, 3000);
    }
}
function peaton2_1(){
    var img = document.getElementById("peat2_1");
    img.src="../recursos/img/Peatonesverde.png";
    clearInterval(nIntervId2_1);         
    nIntervId2_1 = null;
    if (!nIntervId2_1) {                
        nIntervId2_1 = setInterval(peatonrojo2_1,3000,updateClockVerde2());
    }   
    return false;    
}
function peaton2_2(){
    var img = document.getElementById("peat2_2");
    img.src="../recursos/img/Peatonesverde.png";
    clearInterval(nIntervId2_2);        
    nIntervId2_2 = null;
    if (!nIntervId2_2) {                
        nIntervId2_2 = setInterval(peatonrojo2_2,3000,);
    } 
    return false;
}
function peaton2_3(){
    var img = document.getElementById("peat2_3");
    img.src="../recursos/img/Peatonesverde.png";
    clearInterval(nIntervId2_3);         
    nIntervId2_3 = null;
    if (!nIntervId2_3) {                
        nIntervId2_3 = setInterval(peatonrojo2_3,3000,);
    } 
    return false;
}
function peaton2_4(){
    var img = document.getElementById("peat2_4");
    img.src="../recursos/img/Peatonesverde.png";
    clearInterval(nIntervId2_4);        
    nIntervId2_4 = null;
    if (!nIntervId2_4) {                
        nIntervId2_4 = setInterval(peatonrojo2_4,3000,);
    } 
    return false;
}
function peatonrojo2_1(){
    var img = document.getElementById("peat2_1");
    img.src="../recursos/img/Peatonesrojo.png";
    clearInterval(nIntervId2_1);         
    nIntervId2_1 = null;
    return false;
}
function peatonrojo2_2(){
    var img = document.getElementById("peat2_2");
    img.src="../recursos/img/Peatonesrojo.png";
    clearInterval(nIntervId2_2);         
    nIntervId2_2 = null;
    return false;
}
function peatonrojo2_3(){
    var img = document.getElementById("peat2_3");
    img.src="../recursos/img/Peatonesrojo.png";
    clearInterval(nIntervId2_3);         
    nIntervId2_3 = null;
    return false;
}
function peatonrojo2_4(){
    var img = document.getElementById("peat2_4");
    img.src="../recursos/img/Peatonesrojo.png";
    clearInterval(nIntervId2_4);         
    nIntervId2_4 = null;
    return false;
}

/*Temporizadores*/ 
function updateClock() {  
  document.getElementById('countRojo1').innerHTML = totalTimeRojo;
  document.getElementById('countRojo2').innerHTML = totalTimeRojo;
  document.getElementById('countRojo3').innerHTML = totalTimeRojo;
  document.getElementById('countRojo4').innerHTML = totalTimeRojo;
  if(totalTimeRojo==0){
    console.log('Final');
    totalTimeRojo = 3;
  }else{
    totalTimeRojo-=1;
    setTimeout("updateClock()",1000);
  }
}
function updateClock2() { 
    document.getElementById('countRojo2_1').innerHTML = totalTimeRojo2;
    document.getElementById('countRojo2_2').innerHTML = totalTimeRojo2;
    document.getElementById('countRojo2_3').innerHTML = totalTimeRojo2;
    document.getElementById('countRojo2_4').innerHTML = totalTimeRojo2;
    if(totalTimeRojo2==0){
      console.log('Final');
      totalTimeRojo2 = 3;
    }else{
      totalTimeRojo2-=1;
      setTimeout("updateClock2()",1000);
    }
}

function updateClockVerde() {  
    document.getElementById('countVerde1').innerHTML = totalTimeVerde;
    document.getElementById('countVerde2').innerHTML = totalTimeVerde;
    document.getElementById('countVerde3').innerHTML = totalTimeVerde;
    document.getElementById('countVerde4').innerHTML = totalTimeVerde;
    if(totalTimeVerde==0){
      console.log('Final');
      totalTimeVerde = 3;
    }else{
        totalTimeVerde-=1;
        setTimeout("updateClockVerde()",1000);
    }
}
function updateClockVerde2() {  
  document.getElementById('countVerde2_1').innerHTML = totalTimeVerde2;
  document.getElementById('countVerde2_2').innerHTML = totalTimeVerde2;
  document.getElementById('countVerde2_3').innerHTML = totalTimeVerde2;
  document.getElementById('countVerde2_4').innerHTML = totalTimeVerde2;
    if(totalTimeVerde2==0){
      console.log('Final');
      totalTimeVerde2 = 3;
    }else{
        totalTimeVerde2-=1;
        setTimeout("updateClockVerde2()",1000);
    }
}

//Semaforos no principales
const ROJO_RUTA = '../recursos/img/semafororojo.png';
const AMBAR_RUTA = '../recursos/img/semaforoambar.png'; 
const VERDE_RUTA = '../recursos/img/semaforoverde.png';

let velocidad = 3000;
let ambar = false;

//Semáforos izquierdos
let sema2_1 = $('#semimg2_1');
let sema2_2 = $('#semimg2_2');
let sema2_3 = $('#semimg2_3');
let sema2_4 = $('#semimg2_4');
//Semáforos derechos
let sema3_1 = $('#semimg3_1');
let sema3_2 = $('#semimg3_2');
let sema3_3 = $('#semimg3_3');
let sema3_4 = $('#semimg3_4');

let interval;

function start(bool){
    
    //si bool  es TRUE --> [VERDE - AMBAR - ROJO]
    if(bool){
        //La imagen empieza en verde
        sema2_1.attr('src', VERDE_RUTA);

        //espera 3 segundos en verde
        let activarSemaforo = function() {
            console.log('loop')
            let imagen = AMBAR_RUTA;
            
            if(!ambar){
                //pasa a ambar (1.5s)
                ambar = true;
                velocidad = 1500;
            }else{
                //al ser rojo se BORRA el timeout
                imagen = ROJO_RUTA;
                activarSemaforo = null;
            }

            sema2_1.attr('src', imagen);

            setTimeout(activarSemaforo, velocidad);
        }

        setTimeout(activarSemaforo, velocidad);

    }else{
        //si bool  es FALSE --> [ROJO - AMBAR - VERDE]
        sema2_1.attr('src', ROJO_RUTA);

        let activarSemaforo = function() {
            console.log('loopROJO')
            let imagen = AMBAR_RUTA;
            
            if(!ambar){
                //pasa a ambar (1.5s)
                ambar = true;
                velocidad = 1500;
            }else{
                //al ser verde se BORRA el timeout
                imagen = VERDE_RUTA;
                activarSemaforo = null;
            }

            sema2_1.attr('src', imagen);

            setTimeout(activarSemaforo, velocidad);
        }
        setTimeout(activarSemaforo, velocidad);
    }
}


function stop() {
    console.log('STOP')
}
//Semaforos no principales