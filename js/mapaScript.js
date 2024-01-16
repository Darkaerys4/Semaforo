/*Zona1*/
let nIntervId;
let nIntervId2;
let nIntervId3;
let nIntervId4;
var totalTimeRojo = 3;
var totalTimeVerde = 3;
var totalTimeRojo2 = 3;
var totalTimeVerde2 = 3;
function startZona1(){    
    zona1_1();
    zonz1_2();
    zona1_3();
    zonz1_4();    
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
  document.getElementById('countdown').innerHTML = totalTimeRojo;
  document.getElementById('countdown2').innerHTML = totalTimeRojo;
  document.getElementById('countdown3').innerHTML = totalTimeRojo;
  document.getElementById('countdown4').innerHTML = totalTimeRojo;
  if(totalTimeRojo==0){
    console.log('Final');
    totalTimeRojo = 3;
  }else{
    totalTimeRojo-=1;
    setTimeout("updateClock()",1000);
  }
}
function updateClock2() { 
    document.getElementById('countdown_2').innerHTML = totalTimeRojo2;
    document.getElementById('countdown2_2').innerHTML = totalTimeRojo2;
    document.getElementById('countdown3_2').innerHTML = totalTimeRojo2;
    document.getElementById('countdown4_2').innerHTML = totalTimeRojo2;
    if(totalTimeRojo2==0){
      console.log('Final');
      totalTimeRojo2 = 3;
    }else{
      totalTimeRojo2-=1;
      setTimeout("updateClock2()",1000);
    }
}

function updateClockVerde() {  
    document.getElementById('countdown_1').innerHTML = totalTimeVerde;
    document.getElementById('countdown2_1').innerHTML = totalTimeVerde;
    document.getElementById('countdown3_1').innerHTML = totalTimeVerde;
    document.getElementById('countdown4_1').innerHTML = totalTimeVerde;
    if(totalTimeVerde==0){
      console.log('Final');
      totalTimeVerde = 3;
    }else{
        totalTimeVerde-=1;
        setTimeout("updateClockVerde()",1000);
    }
}
function updateClockVerde2() {  
  document.getElementById('countdown_2_2').innerHTML = totalTimeVerde2;
  document.getElementById('countdown2_2_2').innerHTML = totalTimeVerde2;
  document.getElementById('countdown3_2_2').innerHTML = totalTimeVerde2;
  document.getElementById('countdown4_2_2').innerHTML = totalTimeVerde2;
    if(totalTimeVerde2==0){
      console.log('Final');
      totalTimeVerde2 = 3;
    }else{
        totalTimeVerde2-=1;
        setTimeout("updateClockVerde2()",1000);
    }
}