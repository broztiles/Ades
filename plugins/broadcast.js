let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|anunciar/i.test(text) ? text : text + '\n' + readMore + '「 Anuncio a todos los grupos 」')
  for (let id of chats) conn.copyNForward(id, content, true)
  conn.reply(m.chat, `_Enviar un mensaje de difusión a ${chats.length} chat_`, m)
}
handler.help = ['anunciar','bc'].map(v => v + ' <texto>')
handler.tags = ['owner']
handler.command = /^(anunciar|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

