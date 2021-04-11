let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = new Date
  await m.reply('_Testing speed..._')
  let neww = new Date
  m.reply(neww - old + 'ms')
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
