const uploadImage = require('../lib/uploadImage') 
let fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
//  let [teks, teks2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Sin imagen'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  heum = await fetch(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=oniichan&img=${url}`)
    json = await heum.buffer()
   conn.sendMessage(m.chat, heum, MessageType.image, {
    quoted: m
  })
 } catch (e) {
   m.reply('Imagen de respuesta, si no funciona, ¡es un error!')
  }
}
handler.help = ['effect_senyum']
handler.tags = ['tools']
handler.command = /^(effect_senyum|senyum)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
