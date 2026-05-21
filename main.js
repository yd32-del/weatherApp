
// const newFunct = require("./server");
console.log("hellow rold");


// console.log("What exports,", newFunct);


const button = document.getElementById("search");
button.addEventListener("click", async (e) => {
    const startRequest = await fetch("http://localhost:3000/", {
        mode: 'cors',
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body : "hello world"
    })
    try {
        console.log(startRequest);
    } catch(err) {
        console.log("Whats the error");
    }
    console.log("e.target", e.currentTarget);
})

