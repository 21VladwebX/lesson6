$(document).ready(function(){
  $('#form').on('submit',function(e){
    e.preventDefault();
    var $that = $(this);
    var name = $('#name').val();
    var email = $('#email').val();
    var error = '';
    if(name.length < 3 ){
      error = 'Name length must be more than 3 symbol';
    }
    if(error.length > 1 ){
      $('.er').replaceWith('<div class="err">' + error + '</div>');
    }
    else{
      $.ajax({
        url: $that.attr('action'),
        type: $that.attr('method'),
        contentType: false,
        processData: false,
        data: {
          "name": name,
          "email": email
        },
        dataType: 'json',
        succes: function(json){
          $('.suc').replaceWith('<div class="succ">' + json + '<div/>')
        }
      });
    }
    $(document).on('click',function(){
        $('.err').replaceWith('<div class="er"></div>');
        $('.succ').replaceWith('<div class="suc"><div/>')
    })

  })




})
