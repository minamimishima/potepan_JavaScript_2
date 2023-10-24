//let plus = document.getElementById("plus");
//let minus =document.getElementById("minus");
//let asterisk = document.getElementById("asterisk");
//let slash = document.getElementById("slash");
//let equal = document.getElementById("equal");
//let dot = document.getElementById("dot");
//let zero2 = document.getElementById("zero2");

//plus.disabled = true;
//asterisk.disabled = true;
//slash.disabled = true;
//equal.disabled = true;
//zero2.disabled = true;

function clickButton(target){
  let result = document.getElementById("result");
  let target_value = target.innerHTML;
  
  if (target_value == "AC") {
    result.innerHTML = "0";
    
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML);
    
  } else {
    if (result.innerHTML == "0") {
      result.innerHTML = target_value;
      
    } else {
      result.innerHTML += target_value;
    }
  }
}

function operator(target) {
  let result = document.getElementById("result");
  let target_value = target.innerHTML;
  
  if (result.innerHTML.endsWith("+") == true || result.innerHTML.endsWith("-") == true || result.innerHTML.endsWith("*") == true || result.innerHTML.endsWith("/") == true || result.innerHTML.endsWith(".") == true) {
    //result.innerHTML = result.innerHTML.slice(0,-1) + target_value;
    console.log(result.innerHTML.slice(0,-1));
  }
}