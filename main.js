let marks = ["+","-","*","/","."];
let result = document.getElementById("result");
let zero2 = document.getElementById("zero2");
zero2.disabled = true;

  
function clickButton(target){
  let target_value = target.innerHTML;

  if (target_value == "AC") {
    result.innerHTML = "0";
    
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML);
    
  } else if (marks.includes(target_value)) { 
    if (marks.includes(result.innerHTML.slice(-1))) {
      result.innerHTML = result.innerHTML.slice(0,-1) + target_value;
    } else {
      result.innerHTML += target_value;
    }
    
  } else {
    if (result.innerHTML == "0") {
      result.innerHTML = target_value;
      
    } else {
      result.innerHTML += target_value;
    }
  }
  
  if (result.innerHTML == "0") {
    zero2.disabled = true;
  } else {
    zero2.disabled = false;
  }
}
