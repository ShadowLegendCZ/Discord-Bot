const version = "0.1 ALPHA"

module.exports = {
    name: 'version',
    description: "Just shows version",
    execute(message, args){
        message.channel.send(`**The bot's current version is *${version}***`)
    }
}