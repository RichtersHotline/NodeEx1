const http = require("http");
const port = 8000
const fs = require("fs");
http.createServer(function (req, res) {
fs.readFile("data.txt", function(err, data) {
res.writeHead(200, {"Content-type": "text/plain"});
res.write("Cibola bumpty bumpty bump!");
res.write("Hola Skinks!"); 
res.write("What's the most you've lost on a coin toss?"); 
// The content was added next to the previous one
return res.end();



});



}).listen(port, () => {
    
console.log(`Server runs at port ${port}`)


});