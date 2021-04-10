let handler = function (m) {
no = 0
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
 for (let jid of global.owner){
 no += 1
  this.sendContact(m.chat, jid, 'Owner '+no, m)
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator|ownerbot)$/i

module.exports = handler
