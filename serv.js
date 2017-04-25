var http = require('http');

var optionsget = {
    token : 'http://challenge.code2040.org',
    github : 'http://github.com/njericooper/code2040'
    port : 80,
    path : '/api/register',
    method : 'GET'
};


console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');

var reqGet = http.get(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    buffer='';

    res.on('data', function(d) {
        //console.info('GET result:\n');
        //process.stdout.write(d);
        buffer += d.toString();
        //console.info('\n\nCall completed');
    });

    res.on('end', function() {
        console.info('GET result:\n');
        console.log(buffer);
        console.info('\n\nCall completed');
    });

});
reqGet.on('error', function(e) {
    console.error(e);
});
