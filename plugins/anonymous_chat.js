const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender))
            if (!room) throw 'No estás en un chat anónimo'
            m.reply('Ok')
            this.sendMessage([room.a, room.b].find(user => user !== m.sender), 'Los socios abandonan el chat😥', MessageType.text)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender))) throw 'Sigues en el chat anónimo'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !([room.a, room.b].includes(m.sender)))
            if (room) {
                this.sendMessage(room.a, 'partner Found!!\n\n/next : next Partner\n/leave : end chat', MessageType.text)
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('socio encontrado!!\n\n/siguiente: siguiente socio\n/dejar: finalizar chat')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING'
                }
                m.reply('Encontrar socios...')
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler
