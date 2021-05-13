let arry = [0, 1];
function fibonacci(number) {
    while(arry[arry.length - 1] < number) {
        arry.push(arry[arry.length - 2] + arry[arry.length - 1]);
    }
    if(arry.includes(number)) {
      return arry.reduce((a, b) => a + b)
    } else {
      return false;
    }
}
fibonacci(8);