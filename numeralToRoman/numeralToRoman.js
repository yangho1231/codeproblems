//Convert Numeral to Roman 
//With adding 4, 9, 40, 90, 400, 900
function RomanNumeralConverter (value) {
    // Roman rules 1,4,5,9,10,40,50,90,100,400,500,900,1000 the symbol changes during 1,4,5,9
    const romanChart = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
    let roman = ''
    // Loop object from highest.
    for (let key in romanChart) {
      // See if number is great or equal to roman
      while (value >= romanChart[key]) {
        // If it is you had that roman symbol in to variable roman
        roman += key
        // Then deduct the actual romanChart number from the number you inserted so we can move on with next number.
        value -= romanChart[key]
      }
    }
    return roman
  }
  //Without adding 4 and 9
  
  function RomanNumeralConverter (value) {
    const romanChart = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
    let roman = [];
    let romanKey = Object.keys(romanChart);
    let count = 1;
    // Loop object from highest.
    for (let key in romanChart) {
      // See if number is great or equal to roman
      let currentIndex = romanKey.indexOf(key);
      while (value >= romanChart[key]) {
          //We can't have same number more than 3 times.
          if (count < 4) {
            roman.push(key);
          //Need to find 9s.  For example without filter it will show like viiii so we cand find 9s by searching to see if our current roman array has letter v(5).
          } else if (roman.indexOf(romanKey[currentIndex - 1]) > -1) {
            roman.splice(roman.indexOf(romanKey[currentIndex - 1]));
            roman.push(romanKey[currentIndex], romanKey[currentIndex - 2]);
          } else {
              //Here we find 4s like iiii
              roman.splice(roman.indexOf(romanKey[currentIndex]));
              roman.push(romanKey[currentIndex], romanKey[currentIndex - 1]);
          }
  
      count++;
      value -= romanChart[key];
      }
    count = 1;
    }
    return roman.join('')
  }
  