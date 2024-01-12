//MEDIUM    

//defines vars
var goodDrivingRecord = false;
var age = 19;
//set carInsurance function
function carInsurance() {
  //if goodDrivingRecord is true and age is greater than 21 return message
  if ((goodDrivingRecord = true && age > 25)) {
    return "Congrats, you get a discount on your car rental.";
  }
  //if goodDrivingRecord is true and age is less than 21 return message
  if (goodDrivingRecord != true && age < 25) {
    return "Sorry, you need someone to cosign.";
  }
  //if goodDrivingRecord is false and age is greater than 21 return message
  if ((goodDrivingRecord = true || age < 25)) {
    return "You pay full price for you car rental.";
  }
}
console.log(carInsurance());
