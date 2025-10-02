// On page load
const studentName = prompt("Welcome to USIU! What's your first name?");
const studentId = prompt("What's your student ID number?");
alert("Karibu, " + studentName + "!");
console.log("Student entered name:", studentName);
console.log("Student ID:", studentId);
document.getElementById("greeting").textContent = "Hello, " + studentName + "! 👋";
// Triggered on button click or load
function runEstimator() {
 const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
 const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
 const snacksPerDay = Number(prompt("Snacks per day? (e.g.,2)"));
 const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));
 const transportWeekly = days * costPerTrip * 2; // to & from
 const snacksWeekly = days * snacksPerDay * snackPrice;
 const totalWeekly = transportWeekly + snacksWeekly;
 const save10 = totalWeekly * 0.10;
 const totalWithSavings = totalWeekly - save10;
console.log({ days, costPerTrip, snacksPerDay, snackPrice,
transportWeekly, snacksWeekly, totalWeekly, totalWithSavings
});
 const summary = `
 Generated for: ${studentName} (ID: ${studentId})
 Weekly Transport: KSh ${transportWeekly}
 Weekly Snacks: KSh ${snacksWeekly}
 -------------------------------
 Weekly Total: KSh ${totalWeekly}
 If you cut 10%: KSh ${Math.round(totalWithSavings)}
 `;
 document.getElementById("summary").innerText = summary;
 alert("Check your summary on the page. All details logged to console for debugging.");
}
// replace the existing function toggleTheme() with this:
function toggleTheme() {
  // toggle a class so CSS can handle most changes
  document.body.classList.toggle('dark');

  // fallback inline colors for anything that needs immediate override
  if (document.body.classList.contains('dark')) {
    document.body.style.backgroundColor = '#0b1220'; // dark background
    document.body.style.color = '#ffffff';           // default text color
  } else {
    document.body.style.backgroundColor = ''; // revert to CSS/default
    document.body.style.color = '';
  }

  console.log("Theme toggled. Dark mode:", document.body.classList.contains('dark'));
}
