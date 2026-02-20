document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1 get bank
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount === "Select a Bank") {
    alert("Please select a Bank");
    return;
  }

  // 2 get bank acc num
  const accNo = getValueFromInput("add-money-number");

  // 3 get amount
  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);

  const pin = getValueFromInput("add-money-pin");

  if (pin === "1234") {
    alert(`Add Money Successful! from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid PIN");
    return;
  }
});
