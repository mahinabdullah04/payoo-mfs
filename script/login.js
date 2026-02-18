console.log("hmmmmmmmmm");

document.getElementById("login-btn").addEventListener("click", function () {
  //1. get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;

  //2. get the pin input
  const pinInput = document.getElementById("input-pin");
  const pin = pinInput.value;

  //3. match pin & mobile number
  if (contactNumber === "01234567890" && pin === "1234") {
    //3.1 true --> alert > homepage
    alert("Login Success!");
    window.location.assign("/home.html");
  } else {
    //3.2 false --> alert > return
    alert("Login Failed!");
    return;
  }
});
