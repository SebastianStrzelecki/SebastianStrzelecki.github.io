'use strict';

$(function () {

    $('#last').click(function () {
        var last = $("p:last").html();
        $("p:last").remove();
        $('p:first').before("<p>" + last + "</p>");  
    });
    
    $('#first').click(function () {
        var first = $("p:first").html();
        $("p:first").remove();
        $('p:last').after("<p>" + first + "</p>");  
    });


});
