import http from 'http';
const server = http.createServer((req,res)=>{
    console.log(req.url);

    if(req.url==='/'){
        res.end("Welcome to the homepage");
    }else{
        res.end("Error 404! Page not found");
    }
})
const port = 1000;
server.listen(port,()=>console.log(`server runinig`));
