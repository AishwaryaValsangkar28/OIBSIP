const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function temp(event){
    const value = event.target.value;

    switch(event.target.name){
        case "celcius":
            fahrenheit.value = (value * 9 / 5) + 32;
            kelvin.value = parseFloat(value) + 273.15;
            break;

        
         case "fahrenheit":
            celcius.value = (value - 32) * 5 / 9 ;
            kelvin.value = (value - 32) * 5 / 9 + 273.15;
            break;

          
        case "kelvin":
            celcius.value = value - 273.15;
            fahrenheit.value = (value - 273.15) * 9 / 5 + 32;
            break;
            
            
        default:
            break;    
    }
}