$(document).ready(onReady);

let plusButtonValue = 0;
let subButtonValue = 0;
let multiplyButtonValue = 0;
let divideButtonValue = 0;
let buttonValue = 0;
let numberHistory;
// First half of equation
let number1;
// Save the amount of spaces that number1 and symbol take up
let deleteAmount;

function onReady() {
    $('#plus-btn').on('click', handlePlusButton);
    $('#sub-btn').on('click', handleSubButton);
    $('#multiply-btn').on('click', handleMultiplyButton);
    $('#divide-btn').on('click', handleDivideButton);
    $('#submit-btn').on('click', getNumbers);
    $('#clear-btn').on('click', clearNumbers);
    renderNumbers();
    // Event handlers for numbers
    $('#1-btn').on('click', handleBtn1);
    $('#2-btn').on('click', handleBtn2);
    $('#3-btn').on('click', handleBtn3);
    $('#4-btn').on('click', handleBtn4);
    $('#5-btn').on('click', handleBtn5);
    $('#6-btn').on('click', handleBtn6);
    $('#7-btn').on('click', handleBtn7);
    $('#8-btn').on('click', handleBtn8);
    $('#9-btn').on('click', handleBtn9);
    $('#dot-btn').on('click', handleBtnDot);
}

function getNumbers() {
    // Check if fields are empty
    if ($('#number-input').val() === '') {
        alert('Fill empty fields!');
    } else {
        // Check if any button is selected
        if (plusButtonValue === 0 && subButtonValue === 0 && multiplyButtonValue === 0 && divideButtonValue === 0) {
            alert('Please select a math opperation!');
        } else {
            let number2 = $('#number-input').val().slice(deleteAmount);
            // Store values of input fields
            let inputs = {
                number1: number1,
                number2: number2,
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
            clearNumbers();
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
        <li>${numberHistory} = ${answer}</li>
        `);
        }
    }).catch(function(error) {
        console.log('error', error);
    });
}

function clearNumbers() {
    // Get previous equation for history
    numberHistory = $('#number-input').val();
    // Clear inputs
    $('#number-input').val('');
    // Set buttonValue to 0
    buttonValue = 0;
}


// Button handler functions:

function handlePlusButton() {
    // plus 1 to button score
    plusButtonValue = 1;
    // Set all other button scores to 0
    subButtonValue = 0;
    multiplyButtonValue = 0;
    divideButtonValue = 0;
    // Add symbol into text input
    if (buttonValue === 0) {
        number1 = $('#number-input').val();
        $('#number-input').val(`${$('#number-input').val()} + `);
        deleteAmount = $('#number-input').val().length
    }
    buttonValue = 1;
}
function handleSubButton() {
    plusButtonValue = 0;
    subButtonValue = 1;
    multiplyButtonValue = 0;
    divideButtonValue = 0;
    if (buttonValue === 0) {
        number1 = $('#number-input').val();
        $('#number-input').val(`${$('#number-input').val()} - `);   
        deleteAmount = $('#number-input').val().length
    }
    buttonValue = 1;
}
function handleMultiplyButton() {
    plusButtonValue = 0;
    subButtonValue = 0;
    multiplyButtonValue = 1;
    divideButtonValue = 0;
    if (buttonValue === 0) {
        number1 = $('#number-input').val();
        $('#number-input').val(`${$('#number-input').val()} * `);
        deleteAmount = $('#number-input').val().length   
    }
    buttonValue = 1;
}
function handleDivideButton() {
    plusButtonValue = 0;
    subButtonValue = 0;
    multiplyButtonValue = 0;
    divideButtonValue = 1;
    if (buttonValue === 0) {
        number1 = $('#number-input').val();
        $('#number-input').val(`${$('#number-input').val()} / `);
        deleteAmount = $('#number-input').val().length
    }
    buttonValue = 1;
}
function handleBtn1() {
    $('#number-input').val(`${$('#number-input').val()}1`);
}
function handleBtn2() {
    $('#number-input').val(`${$('#number-input').val()}2`);
}
function handleBtn3() {
    $('#number-input').val(`${$('#number-input').val()}3`);
}
function handleBtn4() {
    $('#number-input').val(`${$('#number-input').val()}4`);
}
function handleBtn5() {
    $('#number-input').val(`${$('#number-input').val()}5`);
}
function handleBtn6() {
    $('#number-input').val(`${$('#number-input').val()}6`);
}
function handleBtn7() {
    $('#number-input').val(`${$('#number-input').val()}7`);
}
function handleBtn8() {
    $('#number-input').val(`${$('#number-input').val()}8`);
}
function handleBtn9() {
    $('#number-input').val(`${$('#number-input').val()}9`);
}
function handleBtnDot() {
    $('#number-input').val(`${$('#number-input').val()}.`);
}