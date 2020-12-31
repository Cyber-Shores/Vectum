import {} from "discord.js"
import { machinaDecoratorInfo, MachinaFunction, MachinaFunctionParameters } from "machina.ts"
import { createTree } from "./util/ascii_tree"

export class Bot {

    @machinaDecoratorInfo({description: "simple command to test that the bot is working", monikers: ["test"]})
    static test: MachinaFunction = (params: MachinaFunctionParameters) => {
        params.msg.reply('\n' + createTree("TEST", {
            "Prop 2": "Property 2",
            prop3: "Prop3"
        }))
    }
}