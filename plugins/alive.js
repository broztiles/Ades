let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  pplink = await conn.getProfilePicture(conn.user.jid)
  totaluser = Object.keys(DATABASE.data.users)
  ppbuffer = await fetch(pplink).then(v => v.buffer())
  conn.sendMessage(m.chat, ppbuffer, 'imageMessage', { caption:`
 *Name Bot* : ${conn.user.name}
 *Total Groups* : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length}
 *Total personal* : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length}
 *Total User* : ${totaluser.length}`, quoted: m, sendEphemeral: true})
}
handler.help = ['info', 'alive']
handler.tags = ['main']
handler.command = /^(alive|info)$/i
handler.fail = null

module.exports = handler
