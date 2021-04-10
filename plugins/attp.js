const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const imageToBase64 = require('image-to-base64')

let handler  = async (m, { conn, text }) => {
   pp = `https://api.vhtear.com/textxgif?text=${text}&apikey=Anakanjing123`
    datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
   res = await Buffer.from(datae, 'base64')
                     await sticker(res, false, 'Text Gif', 'Caliph Bot').then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['attp <teks>']
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

