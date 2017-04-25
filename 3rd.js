fetch("/api/register",
{


  method:"post",
  headers: new Headers({"Content-Type":"application/json"}),
  body: JSON.stringify({cmdLine: txt})
})
.then(function(r) { return r.json(); })
.then(function(result)
{

})
