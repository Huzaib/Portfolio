function calculate() {
    var am = document.getElementById("amount");
    var pp = document.getElementById("people");
    var result = am.value/pp.value;
    if(am.value.length === 0 && pp.value.length!==0) {
        alert("Please enter value");
    }
    else if(am.value.length !== 0 && pp.value.length===0) {
        alert("Please enter number of participants");
    }
    else if(am.value.length === 0 && pp.value.length===0) {
        alert("Please enter both total amount and number of participants");
    }
    else {
        document.getElementById("Res").innerHTML="Contribution Per Person = $"+result;
    }
}