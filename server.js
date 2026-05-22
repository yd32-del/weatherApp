

const apiURL = "http://api.weatherapi.com/v1/current.json?key=2ae955e7329c49a79a595050261605&q=sydney&aqi=no";

//LEARN FETCH DATA FIRST FROM API
const http = require("node:http");
const fs = require("fs");
const port = 3000;
let weatherData = {
    city: "CiTy",
    time: "TIMEEE",
    temperature: 67,
    weatherIcon: "Adress",
    weatherCondition: "Condition"
}
// const test = document.getElementsByTagName("div");
// console.log(test)
const appendApiData = async (response, data) => {
    response.write(data);
}
const server = http.createServer((req,res) =>{
    // const url = req.url
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    // res.write("He;loo");
    res.writeHead(200, {'Content-Type' : 'application/json'});
   
    var foo = async () => {
        const fetchedData = await fetchData(weatherData);
        
        // console.log(fetchedData, "is ehreerer");
        appendApiData(res, fetchedData);
        res.end()
        // res.write("helllo????");
        
    }
    foo()
    
   
})


// http.get("http://127.0.0.1:5500/index.html", (res) => {
//     let data = "";

//     res.on('data', (chunk) => {
//         data += chunk;
//     })
//     res.on('end', (finish) => {
//         let newData = data
//         console.log(newData);
//     })
// })

server.listen(port, (err) => {
    if(err){
        console.log("Theres an error!!!", err);
    } else {
        console.log("Server is 3000");
    }
})



async function fetchData (obj) {
    let string = '';
    const response = fetch(apiURL, {
        mode: 'cors',
        method: 'GET',
    }).then((response)=>{
        return response.json();
    }).then((data) =>{
        obj.city = data.location.name;
        obj.time = data.location.localtime;
        const currentData = data.current;
        obj.temperature = currentData.temp_c;
        obj.weatherIcon = currentData.condition.icon;
        obj.weatherCondition = currentData.condition.text;
        // console.log("My json is", obj);
        string += JSON.stringify(obj);
        console.log("My string is", string);
        return string;
    })
    // .then((string)=>{
    //     console.log("my string is", string);
    //     file.writeFile("./data.json", string, (err)=>{
    //         if(err) throw console.log(err, "ussss");
    //         return;
    //     });

    //     return;
    // })
    .catch((err)=>{
        console.log(err);
    })
    
    return response;
}

// const file = require("fs");
// let myJsonObj = {};
// var getData = async () => {
//     await file.readFile("./data.json", "utf8", (err, data) => {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         myJsonObj = JSON.parse(data);

//     })
//     return myJsonObj;
// } 
// getData();


// fetchData(myJsonObj);

// module.exports = {getData, fetchData};
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
