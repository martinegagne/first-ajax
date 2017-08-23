document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM CONTENT LOADED");

  var button = document.getElementById('request_to_root_button')
  var buttonPingPong = document.getElementById('request_to_ping_pong_button')
  var buttonCount = document.getElementById('request_to_count')
  var buttonTime = document.getElementById('request_to_time')

 // SECTION 1, 2
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

// SECTION 3, 4, 5, 6
  buttonPingPong.addEventListener( 'click', function() {
    var pingPongRequest = $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: 'GET',
      dataType: 'text'

    }).done(function(responseData) {
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

    }).always(function() {
        console.log("Hey the request finished!");
    });
  });

// SECTION 7
buttonCount.addEventListener( 'click', function() {
  var pingPongRequest = $.ajax({
    url: "http://first-ajax-api.herokuapp.com/count",
    method: 'GET',
    dataType: 'text'
  }).done(function(responseData) {
      var section = document.querySelectorAll('section')
      var sendResponse = document.createElement('div');
      sendResponse.innerHTML = responseData;
      section[2].append(responseData);
        console.log('responseData');
        console.log('REQUEST SUCCEEDED');
    });
  });

// SECTION 8
buttonTime.addEventListener( 'click', function() {
  var request = $.ajax({
    url: "http://first-ajax-api.herokuapp.com/time",
    method: 'GET',
    data: {timezone: 'Europe/Sofia'},
    dataType: 'text'
  }).done(function(responseData) {
  var section = document.querySelectorAll('section')
  var sendResponse = document.createElement('div');
  sendResponse.innerHTML = responseData;
  section[3].append(responseData);
    console.log('responseData');
    console.log('REQUEST SUCCEEDED');
    });
  });
});

// SECTION 9
