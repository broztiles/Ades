let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  try {
  conn.sendFile(m.chat, `https://recoders-area.caliph.repl.co/api/tiktod/?url=${args[0]}&apikey=FreeApi`, 'tiktok', '', m, false)
  } catch {
  throw 'Maaf, Server Sedang Error'
}
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok(dl)?)$/i

module.exports = handler
