let handler = function (m) {
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  this.sendContact(m.chat, i.split('@')[0], this.getName(i), m)
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
