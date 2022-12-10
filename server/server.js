const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000
app.use(express.static('server/public'));

let submittedEquations = []

function solvingEquation(){ 
   submittedEquations.finalResult = submittedEquations.Number(firstVal) + submittedEquations.calcOperator + submittedEquations.Number(secondVal)  
    return submittedEquations.finalResult
}

app.post('/outgoingServerInputs', (req, res) => {
    
    submittedEquations.push(req.body);
    res.sendStatus(201); //tells client the array was created
    console.log(submittedEquations);
})

app.get('/outgoingResults', (req, res) => {
    console.log('the results being sent back');
    res.send(solvingEquation(submittedEquations)); //tells client the array was created
  })




app.listen(PORT, () =>{
    console.log('server is on');
})