let locationVal = document.getElementById("location");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");

let button = document.getElementById("button");

button.onclick = async () => {
    let url = `https://api.weatherapi.com/v1/current.json?key=3e3ac8bd98df4eef92b85845252609&q=${locationVal.value}&aqi=yes`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        let emoji = "🥵";
        if (data["current"].temp_c < 10) { emoji = "🥶" }

        temp.innerText = emoji + " " + data["current"].temp_c + "C";
        humidity.innerText = "💧 " + data["current"].humidity + "%";
    } catch (error) {
        alert("Failed to get weather data. Please check the location name and try again...");
    }
}

