var inputWprowadz = document.getElementById("wynik");
var del = document.getElementById('del');
var minus = document.getElementById('button_minus');
var modulo = document.getElementById('button_modulo');
var dodawanie = document.getElementById('button_dodawanie');
var bt7 = document.getElementById('button_7');
var bt8 = document.getElementById('button_8');
var bt9 = document.getElementById('button_9');
var bt4 = document.getElementById('button_4');
var bt5 = document.getElementById('button_5');
var bt6 = document.getElementById('button_6');
var mnozenie = document.getElementById('button_mnozenie');
var bt1 = document.getElementById('button_1');
var bt2 = document.getElementById('button_2');
var bt3 = document.getElementById('button_3');
var bt0 = document.getElementById('button_0');
var dzielenie = document.getElementById('button_/');
var kropka = document.getElementById('button_kropka');
var rowna = document.getElementById('button_rowna');
//var wynik = document.getElementById("wynik").value;




function check()
{
    var wynik = document.getElementById("wynik").value.split("");
    var cos = wynik[wynik.length-1];
    if(cos=='+'|| cos=='-' || cos=='*' || cos=='/' || cos=="%" || cos=='.'|| cos=="") 
        return false;
    else
        return true;
}


del.addEventListener('click', function () {
    inputWprowadz.value = "";
});
modulo.addEventListener('click', function () {
    if(check())
    inputWprowadz.value += modulo.value
});
dodawanie.addEventListener('click', function () {
    if(check())
    inputWprowadz.value += dodawanie.value
});
bt7.addEventListener('click', function () {
    inputWprowadz.value += bt7.value
});
bt8.addEventListener('click', function () {
    inputWprowadz.value += bt8.value
});
bt9.addEventListener('click', function () {
    inputWprowadz.value += bt9.value
});
minus.addEventListener('click', function () {   
       if(check())
    inputWprowadz.value += minus.value;
});
bt4.addEventListener('click', function () {
    inputWprowadz.value += bt4.value
});
bt5.addEventListener('click', function () {
    inputWprowadz.value += bt5.value
});
bt6.addEventListener('click', function () {
    inputWprowadz.value += bt6.value
});
mnozenie.addEventListener('click', function () {
    if(check())
    inputWprowadz.value += mnozenie.value
});
bt1.addEventListener('click', function () {
    inputWprowadz.value += bt1.value
});
bt2.addEventListener('click', function () {
    inputWprowadz.value += bt2.value
});
bt3.addEventListener('click', function () {
    inputWprowadz.value += bt3.value
});
dzielenie.addEventListener('click', function () {
    if(check())
    inputWprowadz.value += dzielenie.value
});
bt0.addEventListener('click', function () {
    inputWprowadz.value += bt0.value
});
kropka.addEventListener('click', function () {
    if(check())
    inputWprowadz.value += kropka.value
});
rowna.addEventListener('click', function () {
//    inputWprowadz.value += document.getElementById('button_rowna').value;
    var wynik = eval(inputWprowadz.value);
    inputWprowadz.value = wynik;

});
