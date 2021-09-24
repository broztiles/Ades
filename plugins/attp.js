const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler  = async (m, { conn, text }) => {
  pp = `https://lolhuman.herokuapp.com/api/attp?apikey=oniichan&text=${encodeURI(text)}`
                     await sticker(false, pp, packname, author).then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  if (!text) throw 'Uhm...¿El texto?'
}
handler.help = ['attp <texto>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
