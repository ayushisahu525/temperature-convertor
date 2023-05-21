const calculator = () => {

    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temperature');
    const valueTemp = temperature.options[tempSelected.selectedIndex].value;

    const celToFeh = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }


    const fehToCel = (fehran) => {
        let celsius = Math.round((fehran - 32) * 5 / 9);
        return celsius;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celToFeh(numberTemp);
        document.getElementById('tempconvertor').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fehToCel(numberTemp);
        document.getElementById('tempconvertor').innerHTML = `= ${result}°Celsius`;
    }

}