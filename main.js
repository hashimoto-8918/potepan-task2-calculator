let result = "";
let last_key_was_equal = false;

result = document.getElementById('result');

function allClear(){
  result.value = "0";
  last_key_was_equal = false;
}

function number(value){
  if(last_key_was_equal)  result.value = "0";
    last_key_was_equal = false;

  if(result.value =="0" && value == "0"){
    result.value = "0";
  }else if(result.value == "0" && value == "."){
    result.value = "0.";
  }else if(result.value == "0"){
    result.value = value;
  }else{
    result.value = result.value + value;
  }
}

function operator(value){
  if(last_key_was_equal)  last_key_was_equal = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0,-1) + value;
  } else {
    result.value += value;
  }
}

function equal(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);
  let temp = eval(result.value.replaceAll("×", "*").replaceAll("÷", "/"));
    temp = Math.round(temp*100)/100
    result.value = temp;
    last_key_was_equal = true;
}

function is_ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}