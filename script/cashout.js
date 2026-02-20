document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1 get agent num and validate
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;

  // 2 get the amount, validate, convert to num
  const cashoutAmountInput = document.getElementById("cashout-amount");

  const cashoutAmount = cashoutAmountInput.value;

  // 3 get curr balance, validate, convert to num
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;

  // 4 calc new balance
  const newBalance = Number(balance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount!");
    return;
  }

  // 5 get pin and verify
  const pin = document.getElementById("cashout-pin").value;

  if (pin === "1234") {
    // 5.1 true, show alert > set balance
    alert("Cashout Successful!");
    console.log("New Balance:", newBalance);
    // change the balance view 
    balanceElement.innerText = newBalance;
  } else {
    // 5.2 false, throw error alert, return
    alert("Invalid PIN!");
    return;
  }
});
