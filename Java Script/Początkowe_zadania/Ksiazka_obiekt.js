'use strict';


class Ksiazki {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        if (this.przeczytana == true)
            return "Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i została przeczytana";
        else
            return "Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i nie została";
    }
}
var ksiazka1 = new Ksiazki("Tytuł1", "Autor1", false);
var ksiazka2 = new Ksiazki("Tytuł2", "Autor2", true);
var ksiazka3 = new Ksiazki("Tytuł3", "Autor3", true);


var TablicaGlobalna = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanch(TablicaGlobalna) {
    let iloscPrzeczytanchKsiazek = 0;
    for (let i = 0; i < TablicaGlobalna.length; i++) {
        console.log(TablicaGlobalna[i].opiszKsiazke());
        if (TablicaGlobalna[i].przeczytana == true) {

            iloscPrzeczytanchKsiazek++;
        }
    }
    return "Przeczytałeś: " + iloscPrzeczytanchKsiazek;
}

console.log(iloscPrzeczytanch(TablicaGlobalna));