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

var routeInfo = {
    "source": "0" ,
    "destination": "0" ,
    "path": "0" ,
    "city": "Delhi"
} ;

//let pathArray = [[0],[0],[0],[0],[0],[0],[0],[0]] ; using dictionary now
//API endpoint without Date
app.get("/api/paths/" , (req ,res)=> {
    res.json( routeInfo ) ;
    
}) ;

//API endpoint with path parameter
app.get("/api/:path" , (req , res) => {
    var d = req.params.path ;
    //let a = d.length ;
    var route = d.split('-')[0] ;
    console.log(route) ;
    let cityName = d.split('-')[1] ;
    console.log(cityName) ;

    routeInfo["source"] = route[0] ;
    routeInfo["destination"] = route[route.length -1] ;
    routeInfo["path"] = route ;
    routeInfo["city"] = cityName ;
    
    //pathArray[d[d.length - 1]] =  d ;

    res.send("path saved successfully") ;
})


//listen for requests :)
var listener = app.listen(process.env.PORT, ()=>{
    console.log('Your app is listening on port' + listener.address().port ) ;
    console.log("http://localhost:" + listener.address().port) ;
})