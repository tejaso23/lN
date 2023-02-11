const http =require("http")

const fs = require("fs")

const home = fs.readFileSync("./server.html","utf-8")


const server = http.createServer((request,response,next)=>{
    //request.params :- give site searched
  // next : -used mainly when their is database work or lagre number of rounting are required
  if(request.url === "/"){
   return response.end(home)
  }
  if(request.url === "/about"){
    return response.end("<h1>About</h1>")
  }
  if(request.url === "/contact"){
   return  response.end("<>")
  }
  if(request.url === "/service"){
  return  response.end("<>")
  }
  else{
   return  response.end("<>")
  }

})
const Port = process.env.Port
//const hostname = "localhost"

server.listen(Port,()=>{
   console.log(`server is working`)
})

/*1.import http
2.create a server(request,response,next)
3.then listen (portnumber,hostname,call backfunction)
4.*/