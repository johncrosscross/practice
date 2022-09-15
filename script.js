function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    //To show an alert message in case the amount entered is negative or zero:
    if (principal <= 0) {
        alert("Enter a posotive number");
        principal.focus();
    }
    
    //To display the text detailing the result, after clicking Compute Interest:
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>";

}
  
  //To update the displayed rate dynamically: 
  function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
  }
  
  