//Importing the module to handle user inputs in node
const prompt = require("prompt-sync")({ sigint: true });

function monthlyCal(daysOfAbsence, month, isLeapYear = false) {
  //Initializing variables
  let newMonth = month.slice(0, 1).toUpperCase() + month.slice(1).toLowerCase();
  let dailySub;
  let amount = 10000;
  let monthlySub = 0;

  const monthObj = {
    January: 31,
    February: [28, 29],
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  //   console.log(newMonth);
  //   console.log(monthObj[newMonth]);
  if (
    [
      "January",
      "March",
      "May",
      "July",
      "August",
      "October",
      "December",
    ].includes(newMonth)
  ) {
    // console.log("Yes");
    dailySub = amount / monthObj[newMonth];
  } else if (["April", "June", "September", "November"].includes(newMonth)) {
    // console.log("Yes");
    dailySub = amount / monthObj[newMonth];
  } else if (newMonth == "February") {
    dailySub = isLeapYear
      ? amount / monthObj[newMonth][1]
      : amount / monthObj[newMonth][0];
  } else {
    console.log(`${newMonth} not found!!!`);
    return;
  }
  //Printing the equivalent subscription per day
  console.log(
    `\nYour Daily Subscription is approximately ₦${Math.round(dailySub)}.\n`
  );

  //Printing the final decision criteria based on probabilities.
  if (daysOfAbsence == 0) {
    monthlySub = amount - daysOfAbsence * dailySub * 1;
    console.log(
      `Hence you will have to pay the Full amount of ₦${Math.round(
        monthlySub
      )},\nin the month of ${newMonth},\nif you would be absent for ${daysOfAbsence} days.\n`
    );
  } else if (daysOfAbsence >= 1 && daysOfAbsence <= 8) {
    monthlySub = amount - daysOfAbsence * dailySub * 0.95; //It is more likely to find someone within this category.
    console.log(
      `But, you are to pay the estimated amount of ₦${
        Math.round(monthlySub) - (Math.round(monthlySub) % 100)
      },\nin the month of ${newMonth},\nif you would be absent for ${daysOfAbsence} days.\n`
    );
  } else if (daysOfAbsence > 8 && daysOfAbsence <= 15) {
    monthlySub = amount - daysOfAbsence * dailySub * 0.93; //It is almost more likely to find someone here.
    console.log(
      `But you are to pay the estimated amount of ₦${
        Math.round(monthlySub) - (Math.round(monthlySub) % 100)
      },\nin the month of ${newMonth},\nif you would be absent for ${daysOfAbsence} days.\n`
    );
  } else if (daysOfAbsence > 15 && daysOfAbsence <= 22) {
    monthlySub = amount - daysOfAbsence * dailySub * 0.97; //It is rare, still most common.
    console.log(
      `But you are to pay the estimated amount of ₦${
        Math.round(monthlySub) - (Math.round(monthlySub) % 100)
      },\nin the month of ${newMonth},\nif you would be absent for ${daysOfAbsence} days.\n`
    );
  } else if (
    daysOfAbsence > 22 &&
    daysOfAbsence <
      (newMonth == "February"
        ? isLeapYear
          ? monthObj[newMonth][1]
          : monthObj[newMonth][0]
        : monthObj[newMonth])
  ) {
    monthlySub = amount - daysOfAbsence * dailySub * 0.95; //It is very rare, yet very possible.
    console.log(
      `But you are to pay the estimated amount of ₦${
        Math.round(monthlySub) - (Math.round(monthlySub) % 100)
      },\nin the month of ${newMonth},\nif you would be absent for ${daysOfAbsence} days.\n`
    );
  } else if (
    daysOfAbsence ==
    (newMonth == "February"
      ? isLeapYear
        ? monthObj[newMonth][1]
        : monthObj[newMonth][0]
      : monthObj[newMonth])
  ) {
    monthlySub = amount - daysOfAbsence * dailySub * 1; //It is very rare.
    // console.log(
    //   `yes, You are to pay the estimated amount of ₦${Math.round(
    //     monthlySub
    //   )}. \n`
    // );
    console.log("But you are free of payments for this month!");
  }
}

//Designing a function to automatically run the process!
let flippy = false;

while (!flippy) {
  let days = Number(
    prompt(
      "How many days would you be absent? (Enter a number between (0 and 31) ... "
    )
  );
  let mth = prompt("Which month specifically? (Type January - December): ");
  let leap = prompt("Is this year a leap year? (Y or N): ");

  let lp = leap.toLowerCase() == "true" ? true : false;

  monthlyCal(days, mth, lp);
  let control = prompt("Do you want to Run another simulation? (Y or N): ");
  if (control.toLowerCase() == "y") {
    flippy = false;
  } else {
    flippy = true;
    console.log("See You next time!");
  }
}

console.log("\nSimulation completed successfully.");
console.log("© Blessed_Yobe-Corper!");

//to use the function else where
module.exports = monthlyCal;
