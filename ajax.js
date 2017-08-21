document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM CONTENT LOADED");

  var button = document.getElementById('request_to_root_button')
  var buttonPingPong = document.getElementById('request_to_ping_pong_button')

  button.addEventListener( 'click', function() {
    var request = $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: 'GET',
      dataType: 'text'
    });

    request.done(function(data) {
      console.log('REQUEST SUCCEEDED');
    });
  });

  buttonPingPong.addEventListener( 'click', function() {
    var pingPongRequest = $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: 'GET',
      dataType: 'text'
    });
  pingPongRequest.done(function(responseData) {
    var section = document.querySelectorAll('section')
    var sendResponse = document.createElement('div');
    sendResponse.innerHTML = responseData;
    section[1].append(responseData);
      console.log('responseData');
      console.log('REQUEST SUCCEEDED');

    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.log("REQUEST FAIL")

      var msg = document.createElement( 'p' );
      var section = document.querySelectorAll('section')
      msg.innerText = "Woops something went wrong, we'll try harder next time!";
      section[1].append(msg);
    });
  });

});
