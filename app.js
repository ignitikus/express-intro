//* express is a framework
const express = require('express')
const app = express()
//* Path is built-in to NODE
const path = require('path')

const userRoutes = require('./routes/userRoutes')
// const logMe = require('./middleware/logger')
// const time = require('./middleware/moment')
const port = process.env.PORT || '3000'


const users = require('./models/Users')

//* `use` is for middleware
// app.use(logMe)
// app.use(time)
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', userRoutes)


app.listen(port, ()=>{
   console.log(`listening on ${port}`)
})
