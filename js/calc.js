//some global variables
var Num1 = true;
var Num2 = false;
var oper = false;

//set up th event listeners for button on page
function setupListeners(){

  //get elements so we can set the eventListeners
  var Num = document.getElementsByClassName("buttonNum");
  var Op = document.getElementsByClassName("operator");
  var equal = document.getElementsByClassName("equals");
  var clear = document.getElementsByClassName("buttonClear");

  setNumListeners(Num);
  setOpListeners(Op);
  clear[0].addEventListener("click", clearcalc);
  equal[0].addEventListener("click", getAnswer);

}

function getAnswer(){
  var screen = document.getElementById("screen");
  var answer = doCalc();
  screen.innerHTML = answer;
}

function doCalc(){
  switch (oper) {
    case "+":
      return (Num1 + Num2).toFixed(2);
      break;
    case "-":
      return (Num1 - Num2).toFixed(2);
      break;
    case "/":
      return (Num1 / Num2).toFixed(2);
      break;
    case "*":
      return (Num1 * Num2).toFixed(2);
      break;
    default:
      return ("Err");
  }
}

function clearcalc(){
  var screen = document.getElementById("screen");

  screen.innerHTML = "Sparta Calculator"
  Num1 = true;
  Num2 = false;
  oper = false;
}

//setting the listeners to the buttons
function setNumListeners(num){
  var screen = document.getElementById("screen");

  //create loop to set listener for each button
  for (var i = 0; i < num.length; i++) {
      num[i].addEventListener("click", function(event){
      screen.innerHTML = this.innerHTML;
      if(Num1 === true){
        Num1 = parseInt(this.innerHTML);
        oper = true;
      }else if(Num2 === true){
        Num2 = parseInt(this.innerHTML);
      }
    })
  }
}

function setOpListeners(op){
  var screen = document.getElementById("screen");

  //create loop to set listener for each button
  for (var i = 0; i < op.length; i++) {
      op[i].addEventListener("click", function(event){
        if(oper === true){
          screen.innerHTML = this.innerHTML;
          oper = this.innerHTML;
          Num2 = true;
        }
    })
  }
}

setupListeners();
