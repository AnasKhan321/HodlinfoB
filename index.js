const express = require('express')
const app = express()
const port = 3000
const ConnectToMongo = require('./db')
const coin = require('./Coin.js')
const cors = require('cors');
ConnectToMongo(); 

app.use(cors())

const savedata = async()=>{
    const data = await fetch('https://api.wazirx.com/api/v2/tickers')
    const data2 = await data.json(); 
    const keys = Object.keys(data2)
    for (let index = 0; index < 10 ; index++) {
        const newcoint =  coin.create({
            name : data2[keys[index]].name , 
            last :  data2[keys[index]].last, 
            buy :  data2[keys[index]].buy , 
            sell :  data2[keys[index]].sell,
            volume :  data2[keys[index]].volume,
            baseu :  data2[keys[index]].base_unit
        })
        
    }
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getdata' , async(req,res)=>{
    const data = await  coin.find(); 
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})