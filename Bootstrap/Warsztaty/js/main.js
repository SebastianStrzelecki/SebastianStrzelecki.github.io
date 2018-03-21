//document.getElementById("nav-menu");
//
//
//document.getElementsByTagName("body")[0].onscroll = function()
//{
//if(Math.round(window.pageYOffset) > 84){
//    document.getElementById("nav-menu").style.backgroundColor = 'rgba(14, 216,15, 0.5)';}
//else
//       {document.getElementById("nav-menu").style.backgroundColor = 'rgba(0,0,0,0.0)'; 
//    
//}};

$(function(){
    
    
    $('#nav-menu a').click(function(event){
        
        console.log(event.target.hash);
        $('html').animate({
            scrollTop: $(event.target.hash).offset().top},800);
        })
    
//console.log(a);   

    
$(window).scroll(function(){
   

    
    if($(window).scrollTop()>50)
        {
            $('#nav-menu').addClass('scroll');
            $('#nav-menu').css({'transition':'all .4s'});
        }
    else{
          $('#nav-menu').removeClass('scroll');
}});
    if($(window).scrollTop()>50)
        {
            $('#nav-menu').addClass('scroll');
        }
});


//var a = document.getElementById('nav-menu');
//
//a.addEventListener('click', function(e){
//    
//    var b = document.getElementsByTagName('a');
//    
//    console.log(b[a].getAttribute('href'));
//    
//} );
//    

//console.log(a[1].getAttribute('href'));



