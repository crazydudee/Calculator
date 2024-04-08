function appendToDisplay(value){
    document.getElementById("display").value+=value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

document.getElementById('display').addEventListener('mouseover',function(){
    display.style.border = "solid #FF474C 2px";
  })

  document.getElementById('display').addEventListener('mouseout',function(){
    display.style.border = "solid #000000 4px";
  })