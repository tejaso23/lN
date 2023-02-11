/*const a = {
  avg:(a,b)=>{

     console.log(a+b/2)
  },
  sum:(a,b)=>{
   return a+b;

  },
  percent:(a,b)=>{
      console.log((a/b)*100);
  }
    
}
module.exports = a;


const fs = require("fs");
const path= require("path")
console.log(fs.readFileSync("fs.txt","utf-8"))
path.basename("C:\Users\Tejas\Desktop\vscode_webdevelopmet\Mern\nodejs\App.js")
console.log("tejas")

//readfile(other process can run)asyncronous
//readfilesync (other process should wait till this not ends) syncronous

const text = "something i had written first time"
fs.writeFile("./write.txt",text,()=>{
    console.log(text)
})
fs.writeFile("./write2.txt",text,()=>{
    console.log(text + "2nd")
})


console.log(path.extname("./fs.txt"))
*/