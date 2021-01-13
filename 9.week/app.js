let chargeButton = document.getElementById("charge");
let reduceChargeButton = document.getElementById("reduceCharge");
let firstClick = document.getElementById("first-click");
let secondClick = document.getElementById("second-click");
let thirdClick = document.getElementById("third-click");
let fourthClick = document.getElementById("fourth-click");
let bateryHigh = document.getElementById("batery");
let batery_top = document.getElementById("bateryTop");

chargeButton.addEventListener("click", charger);
reduceChargeButton.addEventListener("click", reduceCharger);
let index = 0;