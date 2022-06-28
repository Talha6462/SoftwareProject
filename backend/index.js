const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const Home = fs.readFileSync('./index.html')
const About = fs.readFileSync('./about.html')
const Pricing = fs.readFileSync('./pricing.html')
const Contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url == '/'){
    res.end(Home);
  } 
  else if(url == '/about'){
    res.end(About);
  } 
  else if(url == '/pricing'){
    res.end(Pricing);
  } 
  else if(url == '/contact'){
    res.end(Contact);
  }
  else{
    res.statusCode = 404;
    res.end("<h1>404 NOT FOUND</h1>");
  }
 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});