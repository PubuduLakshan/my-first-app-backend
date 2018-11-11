const Express = require('express');
const BodyParser = require('body-parser');
const Cors = require('cors');

var Client = require('node-rest-client').Client;
 
var client = new Client();
 


const app=Express();
app.use(Cors())
// parse application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(BodyParser.json());

app.post('/getLocations',(req,res)=>{
    const typeWord = req.body.city;
    // direct way
    client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+typeWord+"top+sights&key=AIzaSyDqgo1iyO_tdhkElSNpyrP2mxV8Qpyr_Iw", function (data, response) {
    // parsed response body as js object
    //console.log(data);
    // raw response
   // console.log(response);
   res.json({msg:true,data:data})
});
 
})

app.listen(3001,()=>{
    console.log("Server Starts @ 3001");
    
})