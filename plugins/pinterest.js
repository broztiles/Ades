let fetch = require('node-fetch')
     let handler  = async (m, { conn, args, text }) => {
     if (!text) throw 'Cari Apa ?'
 if (text) m.reply('Searching.....')
    heum = await fetch(`https://api.vhtear.com/pinterest?apikey=ameysbot&query=${encodeURI(text)}`)
    json = await heum.json()
    random = json.result[Math.floor(Math.random() * json.result.length)]
   conn.sendFile(m.chat, random, 'pinterest.png', '', m, false)
}
handler.help = ['pinterest <query>']
handler.tags = ['tools']
handler.command = /^pinterest$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
