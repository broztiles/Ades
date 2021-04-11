let fetch = require('node-fetch')
let handler = async (m, { args, conn, command }) => {
  ss = `https://api.apiflash.com/v1/urltoimage?access_key=b3aa607e199e44d0892770166249f872&url=${args[0]}&quality=100&full_page=${'ssf' == command}`
  conn.sendFile(m.chat, ss, 'screenshot', 'screenshot web nya kak..', m)
}
handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

