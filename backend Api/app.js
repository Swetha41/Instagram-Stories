const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000

//mongodb connection
const {MONGOURI} = require('./keys')

//middlewares
require('./models/user')
require('./models/post')

var cors = require('cors')

app.use(cors())

app.use(express.json())

//routes path
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

//connection using mongoose
mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})



app.listen(PORT,()=>{
    console.log("server is running on ",PORT)
})
