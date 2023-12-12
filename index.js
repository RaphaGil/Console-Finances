var finances = [
  ["Jan-2010", 867884],
  ["Feb-2010", 984655],
  ["Mar-2010", 322013],
  ["Apr-2010", -69417],
  ["May-2010", 310503],
  ["Jun-2010", 522857],
  ["Jul-2010", 1033096],
  ["Aug-2010", 604885],
  ["Sep-2010", -216386],
  ["Oct-2010", 477532],
  ["Nov-2010", 893810],
  ["Dec-2010", -80353],
  ["Jan-2011", 779806],
  ["Feb-2011", -335203],
  ["Mar-2011", 697845],
  ["Apr-2011", 793163],
  ["May-2011", 485070],
  ["Jun-2011", 584122],
  ["Jul-2011", 62729],
  ["Aug-2011", 668179],
  ["Sep-2011", 899906],
  ["Oct-2011", 834719],
  ["Nov-2011", 132003],
  ["Dec-2011", 309978],
  ["Jan-2012", -755566],
  ["Feb-2012", 1170593],
  ["Mar-2012", 252788],
  ["Apr-2012", 1151518],
  ["May-2012", 817256],
  ["Jun-2012", 570757],
  ["Jul-2012", 506702],
  ["Aug-2012", -1022534],
  ["Sep-2012", 475062],
  ["Oct-2012", 779976],
  ["Nov-2012", 144175],
  ["Dec-2012", 542494],
  ["Jan-2013", 359333],
  ["Feb-2013", 321469],
  ["Mar-2013", 67780],
  ["Apr-2013", 471435],
  ["May-2013", 565603],
  ["Jun-2013", 872480],
  ["Jul-2013", 789480],
  ["Aug-2013", 999942],
  ["Sep-2013", -1196225],
  ["Oct-2013", 268997],
  ["Nov-2013", -687986],
  ["Dec-2013", 1150461],
  ["Jan-2014", 682458],
  ["Feb-2014", 617856],
  ["Mar-2014", 824098],
  ["Apr-2014", 581943],
  ["May-2014", 132864],
  ["Jun-2014", 448062],
  ["Jul-2014", 689161],
  ["Aug-2014", 800701],
  ["Sep-2014", 1166643],
  ["Oct-2014", 947333],
  ["Nov-2014", 578668],
  ["Dec-2014", 988505],
  ["Jan-2015", 1139715],
  ["Feb-2015", 1029471],
  ["Mar-2015", 687533],
  ["Apr-2015", -524626],
  ["May-2015", 158620],
  ["Jun-2015", 87795],
  ["Jul-2015", 423389],
  ["Aug-2015", 840723],
  ["Sep-2015", 568529],
  ["Oct-2015", 332067],
  ["Nov-2015", 989499],
  ["Dec-2015", 778237],
  ["Jan-2016", 650000],
  ["Feb-2016", -1100387],
  ["Mar-2016", -174946],
  ["Apr-2016", 757143],
  ["May-2016", 445709],
  ["Jun-2016", 712961],
  ["Jul-2016", -1163797],
  ["Aug-2016", 569899],
  ["Sep-2016", 768450],
  ["Oct-2016", 102685],
  ["Nov-2016", 795914],
  ["Dec-2016", 60988],
  ["Jan-2017", 138230],
  ["Feb-2017", 671099],
];

// ? Total months:
let totalMonths = finances.length; // Calculates the total number of months by retrieving the length of the 'finances' array.
// console.log(`Total Months: ${totalMonths}`);// Display the total months in the console.

// ? The net total amount:
let nettotalAmount = 0; // Initializes a variable to store the total amount and sets it to zero.
for (let i = 0; i < finances.length; i++) {
  // Iterate through each financial record in the 'finances' array starting from 0.
nettotalAmount +=  finances[i][1];

  // }); // Access the second element of each financial record (finances[i][1]) and add it to the totalAmount.
}
// console.log(`Total: $${totalAmount}`);// Display the totalAmount in the console.

// ? The average of the changes:
// Calculate the changes in Profit/Losses month-to-month:
let totalChanges = 0; // Initializes a variable to store the total changes between consecutive months.

for (let i = 1; i < finances.length; i++) {// i starts from 1 as I want to start to calculate from the second index - first index {
  let change = finances[i][1] - finances[i - 1][1]; // Calculates the change between the current month's value and the previous month's value.
  totalChanges += change; // Accumulates the computed change in the totalChanges variable.
}
// Calculates the average change in Profit/Losses over the entire period.
let totalNetAverage = (totalChanges / (totalMonths - 1)).toFixed(2)
 // I am doing totalMonths - 1 as there will be 85 changes between 86 months;
// console.log(`Average Change: ${totalNetAverage}`);// Displays the calculated total net average in the console.

// ? The greatest increase in Profit/Losses:
let greatestIncrease = 0; // Initializes a variable to store the greatest increase in Profit/Losses.
let greatestMonth; // Initializes a variable to store the month associated with the greatest increase.

for (let i = 1; i < finances.length; i++) {
  let change = finances[i][1] - finances[i - 1][1]; // Calculates the change between the current month's value and the previous month's value.
  if (change > greatestIncrease) {
    // Checks if the current change is greater than the greatestIncrease.
    greatestIncrease = change; // Updates greatestIncrease with the current change value untill the greatestIncrease is bigger than the change.
    greatestMonth = finances[i][0]; // Stores the month associated with the greatest increase.
  }
}
// console.log(`Greatest Increase in Profits/Losses: ${greatestMonth} ($${greatestIncrease})`);// Displays the greatest increase in Profit/Losses and the associated month in the console.

// ? The greatest decrease in Profit/Losses:
let greatestDecrease = 0; // Initializes a variable to store the greatest decrease in Profit/Losses.
let decreaseMonth; // Initializes a variable to store the month associated with the greatest decrease.

for (let i = 1; i < finances.length; i++) {
  let change = finances[i][1] - finances[i - 1][1]; // Calculates the decrease between the current month's value and the previous month's value.
  if (change < greatestDecrease) {
    greatestDecrease = change; // Updates greatestDecrease with the current decrease value.
    decreaseMonth = finances[i][0]; // Stores the month associated with the greatest decrease.
  }
}
// console.log(`Greatest Decrease in Profits/Losses: ${decreaseMonth} ($${greatestDecrease})`);

//  Final asnser:
console.log(`Financial Analysis
------------------------------
Total Months: ${totalMonths}
Total: $${nettotalAmount}
Average Change: ${totalNetAverage}
Greatest Increase in Profits/Losses: ${greatestMonth} ($${greatestIncrease})
Greatest Decrease in Profits/Losses: ${decreaseMonth} ($${greatestDecrease})
`);
