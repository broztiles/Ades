let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.herokuapp.com/api/darkjokes?apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result, 'darkjokes.png', `......`, m, false)
}
handler.help = ['darkjokes']
handler.tags = ['nulis']

handler.command = /^(darkjokes)$/i

module.exports = handler
