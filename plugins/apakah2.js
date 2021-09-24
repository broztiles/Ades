let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${command} ${text}
*Respuesta:* ${pickRandom(['Sí', 'Probablemente sí', 'Probablemente', 'Probablemente no', 'No', 'De ninguna manera'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['ap <pregunta>']
handler.tags = ['kerang']
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

