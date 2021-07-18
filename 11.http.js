const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
       res.end('Welcome to our Rukhaiya Home Page')
   }    
if(req.url === '/about'){
    res.end('Here is our short history')
}
res.end(`<h1>Oops!</h1><p>we can't seem to find the page</p><a href="/">Back Home</a>`)
})

server.listen(5000)