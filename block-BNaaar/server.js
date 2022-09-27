var http=require('http');

var server=http.createServer(handleRequest);

function handleRequest(req,res){
console.log(req.method,req.url)
if(req.method==='GET' && req.url==='/'){
   res.setHeader('Content-type','text/plain')
   res.end('Welcome to homepage')
}else if(req.method==='GET' && req.url==='/about'){
  res.setHeader('content-Type','text/html')
  res.end('<h2>this is all about NodeJS<h2>')
}else if(req.method==='POST' && req.url==='/about'){
  res.setHeader('content-Type','application/json')
  res.end('{message: this is a post request}')
}
// }else{
//   res.writeHead(404,{'content-Type':"text/html"})
//   res.end('<h2>page not found<h2>')
// }
}
server.listen(5000,()=>{
 console.log('we are listening on port 5k')
})