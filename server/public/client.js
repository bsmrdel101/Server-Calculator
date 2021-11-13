$(document).ready(onReady);

function onReady() {
    // Post numbers
    $('#submit-btn').on('click', getNumbers);
}

function getNumbers() {
    // Store values of input fields
    let inputs = {
        number1: $('#number-1').val(),
        number2: $('#number-2').val()
    }
    // use ajax POST request
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