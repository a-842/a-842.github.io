document.addEventListener("DOMContentLoaded", function() {
    var optionsColumn = document.getElementById("optionsColumn");
    var inputText = document.getElementById("inputText");
    var outputText = document.getElementById("outputText");
    var removeBlankLinesButton = document.getElementById("blanklineremove");
    var copyOutputButton = document.getElementById("copyOutput"); 
    var removePretextButton = document.getElementById("removePretext")
    var clearOutputButtom = document.getElementByID("clearOutput");


    function updateCheckboxes() {
        var lines = inputText.value.split("\n");
        var numLines = lines.length;


        optionsColumn.innerHTML = "";

        // Create new checkboxes dynamically
        for (var i = 1; i <= numLines; i++) {
            var optionDiv = document.createElement("div");
            optionDiv.classList.add("option");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "line" + i;
            optionDiv.appendChild(checkbox);
            optionsColumn.appendChild(optionDiv);

            // Add event listener to checkbox
            checkbox.addEventListener("change", function() {
                updateOutputText();
            });
        }
    }


    function updateOutputText() {
        var lines = inputText.value.split("\n");
        var output = "";
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var checkbox = document.getElementById("line" + (i + 1));
            if (checkbox && checkbox.checked) {
                output += "\n<br /><br /><b>" + line + "<b>";
            } else {
                output += "\n<br />&amp;bull;" + line;
            }
        }
        
        outputText.innerHTML = output.replace("<br /><br />", "").trim();
    }


    function removePretext() {
        var lines = inputText.value.split("\n");
        for (line in lines) {
            if (line[0] == "&bull;";) {
                line = line.slice(1).trim()
                
            }
            
        }
        inputText.value = lines.join("\n");
        updateCheckboxes();
        updateOutputText();
    }

    removePretextButton.addEventListener("click", function {removePretext();});

    function clearInput() {
        inputText.value = ""
        updateCheckboxes();
        updateOutputText(); 
        
    }


    clearOutputButton.addEventListener("click", function {clearInput();});

    
    function removeBlankLines() {
        var lines = inputText.value.split("\n");
        lines = lines.filter(line => line.trim() !== ""); 
        inputText.value = lines.join("\n"); 
        updateCheckboxes();
        updateOutputText(); 
    }


    removeBlankLinesButton.addEventListener("click", function() {removeBlankLines();});


    function copyOutputText() {
        var copyText = document.getElementById("outputText");
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
        console.log("Text Copied")
    }


    copyOutputButton.addEventListener("click", function() {copyOutputText();});


    inputText.addEventListener("input", function() {
        updateCheckboxes(); // Update checkboxes whenever input changes
        updateOutputText();
    });

    // Initial update
    updateCheckboxes();
    updateOutputText();
});
