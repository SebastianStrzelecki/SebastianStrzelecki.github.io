'use strict';

var tablica = [5,8,3,8,0,2,3,6,8,3,7,9,1,3,6,3,3,5,9,0];
console.log(tablica);
function babelkowe(tabela) {
    var pomocnicza=0;
    for(var i = 0; i < tabela.length; i++) 
     { for(var a = 0; a < tabela.length; a++){
           if(tabela[a]<tabela[a-1])
           {
             pomocnicza=tabela[a-1];
             tabela[a-1]=tabela[a];
             tabela[a]=pomocnicza;
           }
          
     }
     }
   
   
}

babelkowe(tablica);
console.log(tablica);
