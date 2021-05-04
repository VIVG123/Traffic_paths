//init project
var express = require('express') ;
var app = express() ;

app.use(express.static('public')) ;

app.get("/" , function(req,res){
    res.send("Namaste Major Project") ;
}) ;

//first API endpoint...
app.get("/api/hello" , function (req ,res){
    res.json({greeting: 'hello API'}) ;
}) ;

let pathArray = [[0],[0],[0],[0],[0],[0],[0],[0]] ; 
//API endpoint without Date
app.get("/api/paths/" , (req ,res)=> {
    res.json( {pathlengths : pathArray}) ;
    
}) ;

//API endpoint with date parameter
app.get("/api/:path" , (req , res) => {
    const d = req.params.path ;
    //let a = d.length ;
    
    pathArray[d[d.length - 1]] =  d ;

    res.send("path saved successfully") ;
})


//listen for requests :)
var listener = app.listen(process.env.PORT, ()=>{
    console.log('Your app is listening on port' + listener.address().port ) ;
    console.log("http://localhost:" + listener.address().port) ;
})