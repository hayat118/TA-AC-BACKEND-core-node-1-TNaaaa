var http=require('http');
var fs=require('fs');

var server=http.createServer(handleRequest);

function handleRequest(req,res){
  if(req.method==='GET' && req.url==='/about'){
    fs.readFile('./about.html',(err,content)=>{
      if(err) console.log(err);
      res.setHeader('content-type','text/html');
      res.end(content);
    })
}if(req.method==='GET',req.url==='/index'){
      res.setHeader('content-type','text/html');
      fs.createReadStream('./index.html').pipe(res)
  }
}

server.listen(3000,()=>{
  console.log('We are listening on port 3k')
})