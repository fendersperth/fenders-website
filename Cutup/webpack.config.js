/*----------------------------------------------------------
Settings
----------------------------------------------------------*/

// env
const environment = process.env.NODE_ENV === 'PRODUCTION' ?
  'production'
  : 'development'

module.exports = require(`./webpack.${environment}.config.js`)
