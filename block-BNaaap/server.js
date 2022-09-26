var http=require('http');
 
var server=http.createServer(handleRequest);

function handleRequest(req,res){
  // res.writeHead('201',{'content-type':'text/html'});
  console.log(req.method)
  res.statusCode=201;
  res.setHeader('Content-Type','text/html')
  res.end('<h1>welcome to hp <h1>');
}
server.listen(4444,()=>{
  console.log('we are listing on port 4444')
})