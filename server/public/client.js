$(document).ready(onReady);

let plusButtonValue = 0;
// let subButtonValue = 0;
// let multiplyButtonValue = 0;
// let divideButtonValue = 0;

function onReady() {
    $('#plus-btn').on('click', plusButton);
    // Post numbers
    $('#submit-btn').on('click', getNumbers);
}

function getNumbers() {
    // Check if fields are empty

    // Check if any button is selected
    if (plusButtonValue === 0 ) {
        alert('Please select a math opperation!');
    } else {
        // Store values of input fields
        let inputs = {
            number1: $('#number-1').val(),
            number2: $('#number-2').val(),
            plusBtn: plusButtonValue,
        }
        // Use ajax POST request
        // Sends object data to server to modifify it, and GET request it when needed.
        $.ajax({
            type: 'POST',
            url: '/numbers',
            data: inputs
        }).then(function(response) {
            console.log('POST worked!');
        }).catch(function(error) {
            console.log('error', error);
        });
    }
}

function plusButton() {
    // Check if field is empty

    // plus 1 to button score
    plusButtonValue = 1;
    console.log('button value', plusButtonValue);
    // Set all other button scores to 0
    // !plusButtonValue = 0;
}

