

const apiURL = "http://api.weatherapi.com/v1/current.json?key=2ae955e7329c49a79a595050261605&q=Sydney&aqi=no";

//LEARN FETCH DATA FIRST FROM API

const http = require("node:http");
const fs = require("fs");
const port = 3000;

// const test = document.getElementsByTagName("div");
// console.log(test)
const server = http.createServer((req,res) =>{
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile("./index.html", (err, data) => {
        try{
            res.write(data);
            res.end()
        } catch {
            res.write(err);
        }
    })
})

server.listen(port, (err) => {
    if(err){
        console.log("Theres an error!!!", err);
    } else {
        console.log("Server is 3000");
    }
})

const file = require("fs");
let myJsonObj = {};
var getData = async () => {
    await file.readFile("./data.json", "utf8", (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        myJsonObj = JSON.parse(data);

    })
} 
getData();


var fetchData = () => {
    let string;
    const response = fetch(apiURL, {
        mode: 'cors',
        method: 'GET',
    }).then((response)=>{
        return response.json();
    }).then((data) =>{
        myJsonObj.city = data.location.name;
        myJsonObj.time = data.location.localtime;
        const currentData = data.current;
        myJsonObj.temperature = currentData.temp_c;
        myJsonObj.weatherIcon = currentData.condition.icon;
        myJsonObj.weatherCondition = currentData.condition.text;
        console.log("My json is", myJsonObj);
        string = JSON.stringify(myJsonObj);
        return string;
    }).then((string)=>{
        console.log("my string is", string);
        file.writeFile("./data.json", string, (err)=>{
            if(err) throw console.log(err, "ussss");
            return;
        });

        return;
    }).catch((err)=>{
        console.log(err);
    })
}

fetchData();

module.exports = {getData, fetchData};
// file.writeFileSync("./data.json", JSON.stringify(myJsonObj));

// 

// console.log()
// 
// console.log("2\n",response);


// const server = http.createServer((req, res) =>{
//     if(req.url === '/'){
//         // console.log(response.location);
//         res.write("Helo world");
//         // res.write(response.body);
//         res.end();

//     }
// })

// server.on("connection", (socket) => {
//     console.log("I am her")
// })

// server.listen(3000);



















// const server = http.createServer((req, res)=>{

//     // console.log(response, "\nnow  here");
//     if(req.url === '/'){
//         console.log(response);
//         res.write("Hello world");
//         res.end();
//     }
// })
// server.listen(3000);
// // server.use(cors());


// // server.on("connection", (socket) => {
// //     console.log(response);
// // })

// // server.listen(3000);
