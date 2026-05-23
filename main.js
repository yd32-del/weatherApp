const temp = document.getElementById("temp");
const name = document.getElementById("name");
const searchBtn = document.getElementById("search");
const time = document.getElementById("time");
const weatherCondition = document.getElementById("weatherCondition");
const weatherIcon = document.getElementById("weatherIcon");
const button = document.getElementById("search");
const inputField = document.querySelector("input");
button.addEventListener("click", async (e) => {
    // console.log(inputField.value, "Myvallll")
    if(inputField.value === ""){
        alert("Enter a city!");
        return;
    }
    const startRequest = await fetch("http://localhost:3000/", {
        mode: 'cors',
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body : inputField.value
    })
    .then((res) => {
        // console.log("Fiurst rest", res)
        return res.text();
    }).then((res) => {
        // console.log(res);
        return res;
    }).catch((err) => {
        console.log("My errro!!", err);
    })
    let weatherObj;
    try {
        weatherObj = JSON.parse(startRequest);
        appendWeather(weatherObj);
    } catch {
        alert("The city does not exist or you haven't spelt it correctly")
    }


    
    // return newObj;
})

function appendWeather(weatherObj) {
    console.log(weatherObj);
    name.innerText =  weatherObj.city;
    temp.innerText = weatherObj.temperature;
    time.innerText = weatherObj.time;
    weatherIcon.src = "https:" + weatherObj.weatherIcon;

    

}
