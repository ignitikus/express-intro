const moment = require('moment')

module.exports = (req, res, next) =>{
   console.log(moment().format('MMMM D, YYYY, h:mm a'))
   next()
}
