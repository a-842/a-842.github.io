document.addEventListener("DOMContentLoaded", function() {
    var optionsColumn = document.getElementById("optionsColumn");
    var inputText = document.getElementById("inputText");
    var outputText = document.getElementById("outputText");
    var removeBlankLinesButton = document.getElementById("blanklineremove");
    var copyOutputButton = document.getElementById("copyOutput"); 

    // Function to update checkboxes based on the number of lines
    function updateCheckboxes() {
        var lines = inputText.value.split("\n");
        var numLines = lines.length;

        // Remove existing checkboxes
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

    // Function to update output text based on checkbox status
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
        outputText.innerHTML = output.trim();
    }

    // Function to remove blank lines
    function removeBlankLines() {
        var lines = inputText.value.split("\n");
        lines = lines.filter(line => line.trim() !== ""); 
        inputText.value = lines.join("\n"); 
        updateCheckboxes(); // Update checkboxes after removing blank lines
        updateOutputText(); 
    }

    // Add event listener to remove blank lines button
    removeBlankLinesButton.addEventListener("click", function() {
        removeBlankLines();
    });

    // Function to copy output text
    function copyOutputText() {
        var copyText = document.getElementById("outputText");
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
        console.log("Text Copied")
    }

    // Add event listener to copy output button
    copyOutputButton.addEventListener("click", function() {
        copyOutputText();
    });

    // Add event listener to input text area for any input changes
    inputText.addEventListener("input", function() {
        updateCheckboxes(); // Update checkboxes whenever input changes
        updateOutputText();
    });

    // Initial update
    updateCheckboxes();
    updateOutputText();
});
