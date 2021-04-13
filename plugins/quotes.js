let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  ddd = await fetch('https://https://recoders-area.caliph.repl.co/api/randomquote?apikey='+APIKeys["https://recoders-area.caliph.repl.co"])
  f = await ddd.json()
  conn.reply(m.chat,`“${JSON.stringify(f.quote)}”`, m)
}
handler.help = ['fakta']
handler.tags = ['quotes']
handler.command = /^(fakta)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
