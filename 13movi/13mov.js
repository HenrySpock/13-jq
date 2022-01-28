$('.submit').on('click', function () { 
    
    let title = $('.movie-form').eq(0).val(); 
    let rate = $('.movie-form').eq(1).val();   
    $('body').append($('<p>', {text: "Movie: " + title}));  
    $('body').append($('<p>', {text: "Rating: " + rate}));  
    
    let $remove = $('<input type="button" class="remove" value="Remove?" />');
    $remove.appendTo($("body"));
    $('.remove').on("click", function(){
      $(this).prev().remove();
      $(this).prev().remove();
      $(this).remove(); 
    });
  }); 

 