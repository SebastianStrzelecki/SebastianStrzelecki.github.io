<script async defer src="https://maps.googleapis.com/maps/api/js?key=
AIzaSyA9e_VB6BxEYirFoIf74DnX2HZfsHYDKDc&callback=initMap"
  type="text/javascript"></script> 

<style type="text/css">
.google-maps {
	position: relative;
	height: 500px;
	overflow: hidden;
}

#mapka {
	position: absolute;
	top: 0;
	left: 0;
	width: 100% !important;
	height: 500px !important;
	border: 1px solid #CCCCCC;
}
</style>

   
<body onload="mapaStart()">      

<script type="text/javascript">   
    var mapa; // obiekt globalny
    var text = '<div class="dymek"><h4 class="center">Galeria Wisła</h4><p>ul. Wyszogrodzka 144<br />09-410 Płock</div>';  



	function mapaStart(){  
        var wspolrzedne = new google.maps.LatLng(52.5348030, 19.7572348);
		var opcjeMapy = {
			zoom: 15,
			center: wspolrzedne,
			styles: [{ featureType:'all', stylers: [{saturation:-100},{gamma:0.0}] }],
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
				
				
		mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy); 
		
		var infowindow = new google.maps.InfoWindow({
            content: text
          });
		var opcje = {
			position: new google.maps.LatLng(52.5348030, 19.7572348),
			icon: new google.maps.MarkerImage('/sites/all/themes/novelty/images/gwiazda.png'),
			map: mapa
		};
				
        var marker = new google.maps.Marker({
			position: new google.maps.LatLng(52.5348030, 19.7572348),
			icon: new google.maps.MarkerImage('/sites/all/themes/novelty/images/gwiazda.png'),
			map: mapa
        });
     
        infowindow.open(mapa, marker);
    }
       
	
	google.maps.event.addDomListener(window, 'resize', mapaStart);
    google.maps.event.addDomListener(window, 'load', mapaStart);

</script>

<div class="google-maps">
    <div id="mapka"></div>
</div>
