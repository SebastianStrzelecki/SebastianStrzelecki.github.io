$(function () {
    'use strict';

    $("button").click(function () {
            $('body').append('<div id="dane"></div>');

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('#dane').html(
           "<p>Firma: "+data.firma+"</p>"+
           "<p>Imie: "+data.imie+"</p>"+
           "<p>Nazwisko: "+data.nazwisko+"</p>"+
           "<p>Zawod: "+data.zawod+"</p>");
        })
    });


});
