const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks?'
  stiker = await fetch(`https://recoders-area.herokuapp.com/ttp?q=${text}`)
  conn.sendMessage(m.chat, await stiker.buffer(), MessageType.sticker, {
    quoted: m
  })
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

