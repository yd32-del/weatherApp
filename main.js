
// const newFunct = require("./server");
console.log("hellow rold");


// console.log("What exports,", newFunct);

//use POST method to send the required city. 

const button = document.getElementById("search");
button.addEventListener("click", async (e) => {
    const startRequest = await fetch("http://localhost:3000/", {
        mode: 'cors',
        method: 'GET',
        headers: {'Content-Type': 'text/plain',},
        // body : "hello world"
    })
    .then((res) => {
        console.log("Fiurst rest", res)
        return res.text();
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log("My errro!!", err);
    })
    
})

