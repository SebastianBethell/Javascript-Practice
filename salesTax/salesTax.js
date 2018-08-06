//Given the following data, implement a function that calculates the total sales and total tax, grouped by company.

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var taxResults = [
  {
    Telus: {
      totalSales: 1300,
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  for (var company in salesData) {
    console.log(salesData[company].name);
    //console.log('1');
    //console.log(taxResults.hasOwnProperty('Telus'));  THIS IS WHAT I'M working on - trying to see if the key is in the object already

  }




var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/