// JavaScript Document
$(document).ready(function(){
    $('span.favoriet').click(function(){
       $(this).toggleClass("press");
       $(this).parents('article').addClass('fav-article');

       
       if ($(this).hasClass("press")) {
          parseInt($(".fav-counter").text());
          var newVal = parseInt($(".fav-counter").text()) + 1;
          $(".fav-counter").text(newVal);


      }else{
          newVal = parseInt($(".fav-counter").text()) -1;
          $(".fav-counter").text(newVal);
      }
      
   });
   
});