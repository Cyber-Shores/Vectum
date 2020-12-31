import {} from "discord.js"
import { arrify, extractClasses, Machina, MachinaMessage } from "machina.ts"
import { existsSync } from "fs"

require('dotenv').config()

const Bot = new Machina(process.env?.TESTING === "true" ? process.env?.TEST_TOKEN : process.env?.TOKEN, process.env?.TESTING === "true" ? process.env?.TEST_PREFIX : "/")

// for heroku
if(existsSync("commands.js"))
    Bot.loadClasses(extractClasses("file", "../../commands.js"))
else
    Bot.loadClasses(extractClasses("file", "commands.ts"))

Bot.initizalize(() => {
    // mongo initialize 
})

Bot.client.on("message", msg => {
    let command = Bot.evaluateMsg(msg, true) /// false, () => msg.mentions.has(Bot.client.user), () => msg.cleanContent)
    if(command.reason == "no commands available" || command.reason == "msg does not include the set prefix")
        return "" // Machina.noCommands(msg, command.extra)
    else if(command.reason == "permission check passed multiple") 
        return Machina.multipleCommands(msg, arrify(command.value))
    else if(command.reason == "permission check failed") 
        return new MachinaMessage({title: "Command Unavailable", description: "You do not have the correct permissions to use this command."}, msg).send()
    
    try {
        if(command.value)
            arrify(command.value).forEach(f => f(Bot, msg))
    } catch (e) {
        console.log(e, msg?.author, msg?.guild.name, msg?.content)
    }
})