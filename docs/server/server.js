/**
 * @Date: 2019/9/16
 * @Author: wangwenliang
 * @Email: wenliang.wang.o@nio.com
 **/
var PORT = 8671;

var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");


var server = http.createServer(function(request, response) {
  var pathObj = url.parse(request.url, true);
  var staticPath = path.resolve(__dirname, "../public");
  console.log("-- dirname")
  console.log(__dirname);
  console.log("-- pathname")
  console.log(pathObj.pathname)
  console.log("-- staticPath")
  console.log(staticPath)
  var filePath = path.join(staticPath, pathObj.pathname);
  fs.readFile(filePath, "binary", function(err, fileContent) {
    if (err) {
      console.log("404");
      response.writeHead(404, "not found");
      response.end("<h1> 404 Not Found </h1>");
    } else {
      console.log("ok");
      response.write(fileContent, "binary");
      response.end();
    }
  });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
