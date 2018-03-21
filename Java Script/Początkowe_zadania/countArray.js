'use strickt';

var tablica = [1, 2, 3, 4, 5, 6];

function policzTablice(tablica) {
    var suma = 0;
    var iloczyn = 1;
    tablica.forEach(function (element, index) {
            suma = suma + element;



            iloczyn = iloczyn * element;

            ;
        }

    )
    console.log("suma " + suma);
    console.log("iloczyn " + iloczyn);
};


policzTablice(tablica);
