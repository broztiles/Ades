let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'No'
  if (isAdmin) throw 'Aunque ya soy administrador'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin dong$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
