'use strickt';

var tablica = [1, 2, 3, 4, 5, 6];

function suma(parametr1) {
    for (var i = 0; i < parametr1.length; i++) {
        var suma;
        
        suma += Math.pow(parametr1[i], 2);
        console.log(suma);
    }

}

suma(tablica);