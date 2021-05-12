let fetch = require('node-fetch')
let handler = async (m, { args, conn, command }) => {
  ss = `https://caliph-api.herokuapp.com/api/ssweb?url=${args[0]}&fullpage=${'ssf' == command}&delay=1000&quality=1000`
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

