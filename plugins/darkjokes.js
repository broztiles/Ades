let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/darkjokes?apikey=${APIKeys["https://recoders-area.caliph.repl.co"]}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result, 'darkjokes.png', `......`, m, false)
}
handler.help = ['darkjokes']
handler.tags = ['nulis']

handler.command = /^(darkjokes)$/i

module.exports = handler
