$(document).ready(onReady)

let values = {
  firstVal: '',
  secondVal: '',
  calcOperator: '',
  finalResult: ''
}
function onReady(){
    $('#equalButton').on('click', submittedInputs)
    $(`#clearButton`).on('click', clearHistory)
    $('#addButton').on('click', addOperator)
    $('#subtractButton').on('click', subtractOperator)
    $('#multiplyButton').on('click', multiplyOperator)
    $('#divideButton').on('click', divideOperator)
}

function submittedInputs(){
    let firstInput = $('#firstInput').val()
    let secondInput = $('#secondInput').val()
    // let operator = $('#addButton').text()
    // let results = 0

    // let values = {
    //     firstVal: firstInput,
    //     secondVal: secondInput,
    //     calcOperator: operator,
    //     finalResult: results,
    // }
    values.firstVal = firstInput
    values.secondVal = secondInput
    console.log(values);
    outgoingServerInputs(values)
    renderResults()
}

function outgoingServerInputs(values){
    $.ajax({
        url: '/outgoingServerInputs',
        method: 'post', // send the data to the server
        data: values
      }).then((res) => { //puts the server message in the browers console
        console.log(res);
      })
}

function renderResults() {
    $.ajax({
      url: '/outgoingResults',
      method: 'get',
    }).then((res) => {
      $('#lineResults').empty()
      for (let results of res)
     $('#lineResults').append(`
      <li>
        ${results.firstVal} ${results.calcOperator} ${results.secondVal} = ${results.finalResult}
      </li>
     `)
    })
  }

function addOperator(){
  values.calcOperator = '+'
}

function subtractOperator(){
  values.calcOperator = '-'
}

function multiplyOperator(){
  values.calcOperator = '*'
}

function divideOperator(){
  values.calcOperator = '/'
}
