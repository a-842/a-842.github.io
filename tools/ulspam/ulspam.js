document.addEventListener("DOMContentLoaded", function() {
  var inputText = document.getElementById("inputText");
  var outputText = document.getElementById("outputText");


  function updateOutputText() {
    var line = inputText.value;
    line = "while (true) {" + line + "}"
    
    
    
          
    outputText.innerHTML = output.replace(RegEx(timeonlesson=[0-9]*\.[0-9]+&percentW=[0-9]*\.[0-9]+"), 'timeonlesson=9999&percentW=1"');
  }
  inputText.addEventListener("input", function() {
    updateCheckboxes(); // Update checkboxes whenever input changes
    updateOutputText();
  });
  
  // Initial update
  updateCheckboxes();
  updateOutputText();
});
