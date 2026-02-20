console.log("Machine Added");

// machine id -> input value
function getValueFromInput(id) {
  return document.getElementById(id).value;
}

// machine -> balance
function getBalance() {
  const balance = document.getElementById("balance").innerText;
  return Number(balance);
}

// machine value -> set balance
function setBalance(value) {
  const balanceEl = document.getElementById("balance");
  balanceEl.innerText = value;
}

// machine id -> hide all > show id
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");
  const history = document.getElementById("history");

  // hide all
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  history.classList.add("hidden");

  // show only the id
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
