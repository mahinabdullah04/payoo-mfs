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

    // saving transaction in history-container
    // 1 getting history container
    const history = document.getElementById("history-container");

    // 2 create new div
    const newHistory = document.createElement("div");

    // 3 new div > inner html
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add Money Successful! from ${bankAccount} , Account No: ${accNo} at ${new Date()}
        </div>

    `;
    // 4 history container . append (new div)
    history.append(newHistory);
  } else {
    alert("Invalid PIN");
    return;
  }
});
