import {} from "discord.js"
import { machinaDecoratorInfo, MachinaFunction, MachinaFunctionParameters } from "machina.ts"

export class Bot {

    @machinaDecoratorInfo({description: "simple command to test that the bot is working", monikers: ["test"]})
    static test: MachinaFunction = (params: MachinaFunctionParameters) => {
        params.msg.reply(":OOO its working")
    }
}