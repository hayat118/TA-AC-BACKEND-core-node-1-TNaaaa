
var http=require('http');
var fs=require('fs');

var server=http.createServer(handleRequest);

// function handleRequest(req,res){
// if(req.method==='GET',req.url==='/'){
//   res.end('Welcome to index page')
// }else if(req.method==='GET',req.url==='/file'){
//   res.setHeader('Content-type','text/html')
//   fs.readFile('./node.html')
// }else if (req.method==='GET',req.url==='/file'){
//   res.setHeader('Content-type','text/stream')
//   fs.createReadStrean('./node.html').pipe(res)
// }
// }
function handleRequest(req,res){
  if(req.method==='GET' && req.url==='/file'){
    fs.readFile('./node.html',(err,content)=>{
      if(err) console.log(err);
      res.setHeader('content-type','text/html');
      res.end(content);
    })
  }if(req.method==='GET',req.url==='/stream'){
      res.setHeader('content-type','text/html');
      fs.createReadStream('./node.html').pipe(res)
  }
}

server.listen(5555,()=>{
  console.log('We are listening on 5555')
})