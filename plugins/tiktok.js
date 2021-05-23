let fetch = require('node-fetch')
let { ssstik } = require('../lib/tiktok')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  json = await ssstik(args[0])
  try {
    await conn.sendFile(m.chat, json.server_1, 'tiktok.mp4', '', m)
  } catch (e) {
    m.reply('Server 1 Failed, Retrying with Server 2')
    await conn.sendFile(m.chat, json.server_2, 'tiktok.mp4', '', m)
  }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok(dl)?)$/i

module.exports = handler
