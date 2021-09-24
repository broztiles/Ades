let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|anunciar/i.test(text) ? text : text + '\n' + readMore + '「 Anuncio a todos los grupos 」')
  for (let id of groups) conn.copyNForward(id, content, true)
  conn.reply(m.chat, `_Enviar un mensaje de difusión a ${groups.length} grup_`, m)
}
handler.help = ['anunciar','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(anunciar|bc)(grupos|grup|gc)$/i
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

