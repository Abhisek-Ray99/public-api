const express = require('express')
const app = express()
const cryptoResult = require('./getCryptoData')

app.get('/getcrypto', (req, res) => {
    res.json(cryptoResult)
})

app.get('/', (req,res) => {
    res.send('Api is running')
})

app.listen(process.env.PORT || 3000, () => console.log("server is running...."))