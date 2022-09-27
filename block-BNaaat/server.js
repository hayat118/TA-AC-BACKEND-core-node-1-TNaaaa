
var http=require('http');
var fs=require('fs');

var server=http.createServer(handleRequest);

function handleRequest(req,res){
if(req.method==='GET',req.url==='/'){
  res.end('Welcome to index page')
}else if(req.method==='GET',req.url==='/file'){
  res.setHeader('Content-type','text/html')
  fs.readFile('./node.html')
}else if (req.method==='GET',req.url==='/file'){
  res.setHeader('Content-type','text/stream')
  fs.createReadStrean('./node.html').pipe(res)
}
}

server.listen(5555,()=>{
  console.log('We are listening on 5555')
})