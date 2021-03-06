let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])]
    let content = await conn.cMod(m.chat, m, /bc|anunciar/i.test(text) ? text : text + '\n' + readMore + '「 Anunciar a todos los Jadibot 」')
    for (let id of users) conn.copyNForward(id, content, true)
    conn.reply(m.chat, `_Enviar un mensaje de difusión a ${users.length} número a ser bot_
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g,'') + '?text=.menu').join('\n')}`.trim(), m)
  } else conn.reply(m.chat, 'Esta función es solo para hosts de bots',  m)
}
handler.help = ['anunciarjadibot','bcbot'].map(v => v + ' <texto>')
handler.tags = ['host']
handler.command = /^(anunciar|bc)(jadi)?bot$/i
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

