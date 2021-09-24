const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '¡Marque uno e ingrese el número para verificación!'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Lísto usuaria agregado✅*\n\n*Número : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expira:* 30Dís\n*Gracias por ser usuario premium!*`)
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems <número>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
