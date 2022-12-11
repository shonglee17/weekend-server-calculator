const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}))
let submittedEquations = []
// let finalResult = []

 
    



app.post('/outgoingServerInputs', (req, res) => {
    let values = req.body
    console.log(values.calcOperator);
    if(values.calcOperator === '+'){
       values.finalResult = Number(values.firstVal) + Number(values.secondVal) 
        console.log(values.finalResult);
    }
    else if(values.calcOperator === '-') {
        values.finalResult = Number(values.firstVal) - Number(values.secondVal)
    }
    else if(values.calcOperator === '*'){
        values.finalResult = Number(values.firstVal) * Number(values.secondVal)
    }
    else{
        values.finalResult = Number(values.firstVal) / Number(values.secondVal)
    }

    submittedEquations.push(values);
    console.log(submittedEquations);
    res.sendStatus(201); //tells client the array was created
    
})

app.get('/outgoingResults', (req, res) => {
    console.log('the results being sent back');
    res.send(submittedEquations) //tells client the array was created
  })




app.listen(PORT, () =>{
    console.log('server is on');
})