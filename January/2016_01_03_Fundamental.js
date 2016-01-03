/*
Create a simple vat calculator class for retrieving the net value and the vat amount from a gross price. Within the class create the two methods getNet(grossPrice){} and getVat(grossPrice){}.

What is passed to you: vat - the class gets the vat rate as a number 0 - 100 (%) grossPrice - the methods will be called with the price Gross value

Result - what is expected: 2 decimal places precision NUMBER.

Background: vat = net * vatRate; net + vat = gross;

For ex

var calc = new Calculator(20); // vat rate at 20%
calc.getNet(100) === 83.33  //gross price of 100 => net will be 83.33
calc.getVat(100) === 16.67  //gross price of 100 => var === 16.67
*/

function Calculator(vatRate){

  this.getNet = function(grossPrice){

  }

  this.getVat = function(grossPrice){

  }

}

/*
  Comments: I suck at math
*/

var calc = new Calculator(20);
console.log(calc.getVat(100));
