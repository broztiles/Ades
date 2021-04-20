const os = process


global.owner = [os.env["OWNER_NUMBER"] || '0', 6281215199447, 6283143499910] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  clph: 'https://recoders-area.caliph.repl.co'
}
global.APIKeys = { // APIKey Here
  'https://recoders-area.caliph.repl.co': os.env["API_CALIPH"] || 'FreeApi',
  'https://api.xteam.xyz': os.env["API_KEY"] || 'MIMINETBOT'
}

// Sticker WM
global.packname = ''
global.author = ''

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
