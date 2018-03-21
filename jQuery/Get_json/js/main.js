'use strict';

// definicja funkcji ajax
function ajax(ajaxOptions) {


    // parametry połączenia i jego typu
    var options = {
        type: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function () {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions.dataType || "text"
    };

    // funkcja sprawdzająca czy połączenie się udało?
    function httpSuccess(httpRequest) {
        try {
            return (httpRequest.status >= 200 && httpRequest.status < 300 ||
                httpRequest.status == 304 ||
                navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");
        } catch (e) {
            return false;
        }
    }

    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();

    // otwarcie polaczenia
    httpReq.open(options.type, options.url, true);

    // jesli stan dokumentu zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function () {

        // jeśli 4: dane zwrócone i gotowe do użycia
        if (httpReq.readyState == 4) {

            // sprawdź status płączenia
            if (httpSuccess(httpReq)) {

                // jesli dane w formacie XML to zworc obiekt returnXML, w przeciwnym wypadku responseText (JSON to tekst)
                var returnData = (options.dataType == "xml") ? httpReq.responseXML : httpReq.responseText;

                // jeśli wszystko OK
                options.onSuccess(returnData);
                //                console.log(returnData);

                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;

            } else {

                // w przypadku błędu
                options.onError(httpReq.statusText);
            }

        }

    }

    httpReq.send();
}

//var dodaj = document.getElementById("pomocnicza");
var newP = document.createElement("p");
var textP = document.createTextNode("Click me");

newP.appendChild(textP);
document.body.appendChild(newP);

var body = document.body;



var i = 0;
//document.getElementsByTagName("body")[0].onscroll = function(){}

//window.onscroll = function()
document.getElementsByTagName("body")[0].onscroll = function()
{ 
    console.log(window.pageYOffset +"  ==  " + document.documentElement.scrollHeight +" - "+ window.innerHeight);

        if(Math.round(window.pageYOffset) == document.documentElement.scrollHeight - window.innerHeight){
           
        ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            onError: function (msg) {
                console.log(msg);
            },
            onSuccess: function (response) {

                var jsonObj = JSON.parse(response);
                
                jsonObj.forEach(function(element){
                    var newP = document.createElement("p");
                    var textP = document.createTextNode(
                     element.email + element.id + element.address.street);
                        newP.appendChild(textP);
                    document.body.appendChild(newP);
                    
                })



            }

        });
    }
};



