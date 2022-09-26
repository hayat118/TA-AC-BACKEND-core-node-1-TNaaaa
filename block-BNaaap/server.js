var http=require('http');
 
var server=http.createServer(handleRequest);

function handleRequest(req,res){
  res.writeHead('201',{'content-type':'text/html'});
  res.write('Hello');
  res.write('world');
  res.end();
}
server.listen(4444,()=>{
  console.log('we are listing on port 4444')
})