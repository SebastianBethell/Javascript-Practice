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

function calculateSalesTax(salesData, taxRates) {
  let salesObject = {};

  salesData.forEach((sale) => {
    if (!salesObject[sale.name]) {
      salesObject[sale.name] = {
                                totalSales: sale.sales.reduce((a, b) => a + b, 0),
                                totalTaxes: sale.sales.reduce((a, b) => a + b, 0) * salesTaxRates[sale.province]
                               }
    } else {
      salesObject[sale.name].totalSales += sale.sales.reduce((a, b) => a + b, 0);
      salesObject[sale.name].totalTaxes += sale.sales.reduce((a, b) => a + b, 0) * salesTaxRates[sale.province];
    }
  });

  return salesObject;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);


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