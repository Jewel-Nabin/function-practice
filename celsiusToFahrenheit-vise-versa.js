function celsiusToFahrenheit(celsius)
{
    const fahrenheit = celsius * 9 / 5 + 32 ; 
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit)
{
    const celsius = fahrenheit - 32 * 5 / 9;
    return celsius;
}

const convertCelsius = celsiusToFahrenheit(30);
console.log("Result = " + convertCelsius);

const convertFahrenheit = fahrenheitToCelsius(20);
console.log("Result = " + convertFahrenheit);




