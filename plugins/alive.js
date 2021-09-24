let fetch = require('node-fetch')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let handler  = async (m, { conn }) => {
  pplink = await conn.getProfilePicture(conn.user.jid)
  ppstatus = await conn.getStatus(conn.user.jid)
  totaluser = Object.keys(DATABASE.data.users)
  ppbuffer = await fetch(pplink).then(v => v.buffer())
  conn.sendMessage(m.chat, ppbuffer, 'imageMessage', { caption:`
 *Nombre Bot* : ${conn.user.name}
 *Total Grupos* : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length}
 *Total personal* : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length}
 *Total Usuarios* : ${totaluser.length}
 *Tiempo de actividad* : ${clockString(process.uptime() * 1000)}
 *Bio* : ${ppstatus.status}`, quoted: m, sendEphemeral: true})
}
handler.help = ['info', 'alive']
handler.tags = ['main']
handler.command = /^(alive|info)$/i
handler.fail = null

module.exports = handler
