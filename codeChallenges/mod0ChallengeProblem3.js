//sets initial var
var stringNumber = 5;
//checks if stringNumber is divisible by 3 or 5, if yes get FizzBuzz
function fBNumbers() {
  if (stringNumber % 3 == 0 && stringNumber % 5 == 0) {
    return "Fizzbuzz";
  }
  //returns Fizz is conditon met
  if (stringNumber % 3 == 0) {
    return "Fizz";
  }
  //returns Buzz if conditon met
  if (stringNumber % 5 == 0) {
    return "Buzz";
    //anything returns original stringNumber value
  } else if (stringNumber % 3 !== 0 && stringNumber % 5 !== 0) {
    return stringNumber;
  }
}
console.log(fBNumbers());
