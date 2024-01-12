//MILD

////test if odd or even number
var testNumber = 21;
//defines function and sets remainder operator at 2. Even reminaders are even and vice versa.
function oddOrEven() {
  if (testNumber % 2 == 0) {
    //return message if either odd or even
    return "This number is even";
  } else return "This number is odd.";
}
//displays result in console.log
console.log(oddOrEven());
