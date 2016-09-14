$.ajax({
   url: 'http://challenge.code2040.org/api/register',
   data: {
      format: 'json'
   },
   dataType: 'jsonp',
   success: function(data) {

      var send = {
        "token" : "http://challenge.code2040.org/api/register"+"hey",
        "github" : "https://github.com/njericooper"

   },
   type: 'POST'
});
