const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req,res) =>{
    
    console.log(req.url);
    if(req.url === '/' || req.url === '/index.html' ){
        fs.readFile(path.join(__dirname,'public','index.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html'});
            res.end(content);
        });

    }else if(req.url === '/gallory'|| req.url === '/css_p2.html'){
        fs.readFile(path.join(__dirname,'public','css_p2.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html'});
            res.end(content);
        });

    }else if(req.url === '/contact'|| req.url === '/css_p3.html'){
        fs.readFile(path.join(__dirname,'public','css_p3.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'text/html'});
            res.end(content);
        });

    }
    
    else if(req.url === '/picture/pic.jpg'){
        fs.readFile(path.join(__dirname,'public','picture','pic.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg'});
            res.end(content);
        });
    }

    else if(req.url === '/picture/pic2.jpg'){
        fs.readFile(path.join(__dirname,'public','picture','pic2.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg'});
            res.end(content);
        });
    }

    else if(req.url === '/picture/bg1.jpg'){
        fs.readFile(path.join(__dirname,'public','picture','bg1.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg'});
            res.end(content);
        });
    }

    else if(req.url === '/picture/bg4.jpg'){
        fs.readFile(path.join(__dirname,'public','picture','bg4.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg'});
            res.end(content);
        });
    }

    else if(req.url === '/picture/img1.jpg'){
        fs.readFile(path.join(__dirname,'public','picture','img1.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg'});
            res.end(content);
        });
    }

    else if(req.url === '/picture/img2.jpg'){
        fs.readFile(path.join(__dirname,'public','picture','img2.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg'});
            res.end(content);
        });
    }

    else if(req.url === '/picture/img3.jpg'){
        fs.readFile(path.join(__dirname,'public','picture','img3.jpg'),(err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg'});
            res.end(content);
        });
    }
    else{
        fs.readFile(path.join(__dirname,'public','404.html'),(err,content) => {
            if(err) throw err;
            res.writeHead(404, { 'content-type': 'text/html'});
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port: '+PORT);
});