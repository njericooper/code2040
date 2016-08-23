var xhr = new XMLHttpRequest();
xhr.open("GET", "http://challenge.code2040.org/api/register", false);

xhr.send();



console.log(xhr.status);
console.log(xhr.statusText);
