// Start / Controller function
//
// Get the fizz and buzz values from the Page
function getValues() {

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        displayData(fbArray);
    } else {
        alert("Please enter integers");
    }
}

// Logic functions
//
// Generate fizzBuzz array from 1 to 100
function fizzBuzz(fizzValue, buzzValue) {

    let fbArray = [];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i);
        fbArray.push(value);
    }
    
    return fbArray;
}

// Display / View function
//
// Display numbers and mark even numbers bold
function displayData(fbArray) {

    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    let templateRows = "";
    let numCols = 5;

    for (let index = 0; index < fbArray.length; index += numCols) {

        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");
        for (let j = 0; j < numCols; j++) {
            rowCols[j].classList.add(fbArray[index + j]);
            rowCols[j].textContent = fbArray[index + j];
        }

        tableBody.appendChild(tableRow);
    }
}