function incr() {
    let v1=document.getElementById('p1').value;
    document.getElementById("p1").value= v1 + 10;
    }
    function dcr() {
    let v1=document.getElementById('p1').value;
    document.getElementById("p1").value= v1 - 10;
    }

/* Deneme 2 
*/
    function charger() {
        let result = ++index;
        if (result == 0) {
          fourthClick.style.backgroundColor = "white";
          document.getElementById("second-click").innerHTML = "   % 0";
        } else if (result == 1) {
          fourthClick.style.backgroundColor = "red";
          document.getElementById("second-click").innerHTML = "   % 25";
        } else if (result == 2) {
          fourthClick.style.backgroundColor = "orange";
          thirdClick.style.backgroundColor = "orange";
          document.getElementById("second-click").innerHTML = "   % 50";
        } else if (result == 3) {
          fourthClick.style.backgroundColor = "yellow";
          thirdClick.style.backgroundColor = "yellow";
          secondClick.style.backgroundColor = "yellow";
          document.getElementById("second-click").innerHTML = " % 75";
        } else if (result == 4) {
          fourthClick.style.backgroundColor = "green";
          thirdClick.style.backgroundColor = "green";
          secondClick.style.backgroundColor = "green";
          firstClick.style.backgroundColor = "green";
          document.getElementById("second-click").innerHTML = "   % 100";
        } else return;
        console.log(result);
      }
      function reduceCharger() {
        let result = --index;
        if (result == 0) {
          fourthClick.style.backgroundColor = "white";
          document.getElementById("second-click").innerHTML = "   % 0";
        } else if (result == 1) {
          fourthClick.style.backgroundColor = "red";
          firstClick.style.backgroundColor = "white";
          secondClick.style.backgroundColor = "white";
          thirdClick.style.backgroundColor = "white";
          document.getElementById("second-click").innerHTML = "   % 25";
        } else if (result == 2) {
          fourthClick.style.backgroundColor = "orange";
          thirdClick.style.backgroundColor = "orange";
          firstClick.style.backgroundColor = "white";
          secondClick.style.backgroundColor = "white";
          document.getElementById("second-click").innerHTML = "   % 50";
        } else if (result == 3) {
          fourthClick.style.backgroundColor = "yellow";
          thirdClick.style.backgroundColor = "yellow";
          secondClick.style.backgroundColor = "yellow";
          firstClick.style.backgroundColor = "white";
          document.getElementById("second-click").innerHTML = " % 75";
        } else if (result == 4) {
          fourthClick.style.backgroundColor = "green";
          thirdClick.style.backgroundColor = "green";
          secondClick.style.backgroundColor = "green";
          firstClick.style.backgroundColor = "green";
          document.getElementById("second-click").innerHTML = "   % 100";
        } else return;
        console.log(result);
      }