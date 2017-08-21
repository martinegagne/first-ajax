document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM CONTENT LOADED");

  var button = document.getElementById('get_request_to_root_path')

  button.addEventListener( 'click' , function() {
    var request = $.ajax({
    url: "http://first-ajax-api.herokuapp.com/",
    method: 'GET',
    data: '{}',
    dataType: 'text'
  });
    request.done(function(data) {
      console.log('REQUEST SUCCEEDED');
      console.log( 'CLICKED BUTTON' );
    });
  });

});
