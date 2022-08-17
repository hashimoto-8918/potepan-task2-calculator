
let result = "";

let calc = false;

result = document.getElementById('result');

function allclear(){
  result.value = "0";
  calc = false;
}

function number(value){
  if(calc)  result.value = "0";
  calc = false;  

  if(result.value =="0" && value == "0"){
    result.value = "0";
  }else if(result.value == "0" && value == "."){
    result.value = "0.";
  }else if(result.value == "0"){
    result.value = value;
  }else{
    result.value += value;
  }
}

function operator(value){
  if(calc) calc = false;
  
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + value;
  } else {
    result.value += value;
  }
}

function equal(){
  if(is_ope_last())  result.value = result.value.slice(0, -1);

  let temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    calc = true;
  }
}

function is_ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}