var http=require('http');
var server=http.createServer(handleRequest);

function handleRequest(req,res){
 console.log(req.method)
 res.end('Welcome')
 
}
server.listen(5000,()=>{
  console.log('We are listening on port 5k')
})

var http=require('http');
var server=http.createServer(handleRequest);

function handleRequest(req,res){
 console.log(req.method)
 res.end('My first server in NodeJS')
 
 
}
server.listen(5100,()=>{
  console.log('We are listening on port 5.1k')
})