document.getElementById("cashout-btn").addEventListener("click", function () {
  // getting agent number and validation
  const cashoutNumber = getValueFromInput("cashout-number");

  // getting amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();

  //  calc new balance
  const newBalance = currentBalance - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount!");
    return;
  }

  //  get pin and verify
  const pin = document.getElementById("cashout-pin").value;

  if (pin === "1234") {
    // 5.1 true, show alert > set balance
    alert("Cashout Successful!");
    console.log("New Balance:", newBalance);
    // change the balance view
    setBalance(newBalance);
    // saving transaction in history-container
    // 1 getting history container
    const history = document.getElementById("history-container");

    // 2 create new div
    const newHistory = document.createElement("div");

    // 3 new div > inner html
    newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Cashout ${cashoutAmount} Successful to ${cashoutNumber} at ${new Date()}
        </div>

    `;
    // 4 history container . append (new div)
    history.append(newHistory);
  } else {
    // 5.2 false, throw error alert, return
    alert("Invalid PIN!");
    return;
  }
});
