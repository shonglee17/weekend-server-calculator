$(document).ready(onReady)
let results = 0

function onReady(){
    $('#equalButton').on('click', submittedInputs)
    
}

function submittedInputs(){

    let firstInput = $('#firstInput').val()
    let secondInput = $('#secondInput').val()
    let operator = $('.operatorButton').text()
    let resultsOutcome = results

    let values = {
        firstVal: firstInput,
        secondVal: secondInput,
        calcOperator: operator,
        finalResult: resultsOutcome,
    }
    console.log(values);
}

function outgoingServerInputs(){
    $.ajax({
        url: '/outgoingServerInputs',
        method: 'post', // send the data to the server
        data: submittedInputs
      }).then((res) => { //puts the server message in the browers console
        console.log(res);
      })
}

function renderResults() {
    $.ajax({
      url: '/outgoingResults',
      method: 'get',
    }).then((res) => {
     console.log(res);
    })
  }
