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
function setBalance(value){
    const balanceEl = document.getElementById('balance');
    balanceEl.innerText = value;
}

