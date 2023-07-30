
const celsiusEL = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");



function computeTemp(event){
    console.log(event.target.value);
    const currentValue = +event.target.value;//the value of the input that triggers the function called current value
    switch (event.target.name) {
        case "celsius":
            kelvinEl.value =(currentValue + 274.15).toFixed(2);
            fahrenheitEl.value = (currentValue * 1.8 +32).toFixed(2);//we add 1.8 because we want to round it to decimal
            case"fahrenheit":
            celsiusEL.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) /1.8 + 273.32).toFixed(2);
            break;
            case "kelvin":
                celsiusEL.value = (currentValue - 273.32).toFixed(2);
                fahrenheitEl.value = ((currentValue - 273.32)* 1.8 + 32).toFixed(2);
                break;
        default:
            break;
    }
} 