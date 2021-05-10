//Convert roman to numeral
const romanChart = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }

function numeralToRoman(romans) {
    let number = [];
    let roman = romans.toUpperCase();
    for (let i = 0; i < roman.length; i++) {
        if (romanChart[roman[i]] < romanChart[roman[i+1]]) {
            number.push(romanChart[roman[i+1]] - romanChart[roman[i]]);
            i++;
        } else {
            number.push(romanChart[roman[i]]);
        }
    }
    return number.reduce((accum, number) => accum + number);
}
numeralToRoman('xx');