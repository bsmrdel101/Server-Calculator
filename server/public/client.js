$(document).ready(onReady);

let plusButtonValue = 0;
let subButtonValue = 0;
let multiplyButtonValue = 0;
let divideButtonValue = 0;

function onReady() {
    $('#plus-btn').on('click', handlePlusButton);
    $('#sub-btn').on('click', handleSubButton);
    $('#multiply-btn').on('click', handleMultiplyButton);
    $('#divide-btn').on('click', handleDivideButton);
    $('#submit-btn').on('click', getNumbers);
    $('#clear-btn').on('click', clearNumbers);
    renderNumbers();
}

function getNumbers() {
    // Check if fields are empty
    if ($('#number-1').val() === '' || $('#number-2').val() === '') {
        alert('Fill empty fields!');
    } else {
        // Check if any button is selected
        if (plusButtonValue === 0 && subButtonValue === 0 && multiplyButtonValue === 0 && divideButtonValue === 0) {
            alert('Please select a math opperation!');
        } else {
            // Store values of input fields
            let inputs = {
                number1: $('#number-1').val(),
                number2: $('#number-2').val(),
                plusBtn: plusButtonValue,
                subBtn: subButtonValue,
                multiplyBtn: multiplyButtonValue,
                divideBtn: divideButtonValue
            }
            // Use ajax POST request
            // Sends object data to server to modifify it, and GET request it when needed.
            $.ajax({
                type: 'POST',
                url: '/numbers',
                data: inputs
            }).then(function(response) {
                renderNumbers();
            }).catch(function(error) {
                console.log('error', error);
            });
            // Clear inputs fields
            $('#number-1').val('');
            $('#number-2').val('');
        }
    }
}

function renderNumbers() {
    $.ajax({
        type: 'GET',
        url: '/numbers'
    }).then(function(response) {
        // Append .length - 1
        $('#answer').text(response[response.length - 1]);
        // Clear the history
        $('#history').empty();
        // Loop through answers
        for (let answer of response) {
        $('#history').append(`
        <li>${answer}</li>
        `);
        }
    }).catch(function(error) {
        console.log('error', error);
    });
}

function clearNumbers() {
    $('#number-1').val('');
    $('#number-2').val('');
}

// Button handler functions:

function handlePlusButton() {
    // plus 1 to button score
    plusButtonValue = 1;
    // Set all other button scores to 0
    subButtonValue = 0;
    multiplyButtonValue = 0;
    divideButtonValue = 0;
}

function handleSubButton() {
    plusButtonValue = 0;
    subButtonValue = 1;
    multiplyButtonValue = 0;
    divideButtonValue = 0;
}

function handleMultiplyButton() {
    plusButtonValue = 0;
    subButtonValue = 0;
    multiplyButtonValue = 1;
    divideButtonValue = 0;
}

function handleDivideButton() {
    plusButtonValue = 0;
    subButtonValue = 0;
    multiplyButtonValue = 0;
    divideButtonValue = 1;
}