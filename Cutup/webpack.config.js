/*----------------------------------------------------------
Settings
----------------------------------------------------------*/

// env
const environment = process.env.NODE_ENV === 'production' ?
  'production'
  : 'development'

module.exports = require(`./webpack.${environment}.config.js`)
