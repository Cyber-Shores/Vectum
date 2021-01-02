import {} from "discord.js"
import { machinaDecoratorInfo, MachinaFunction, MachinaFunctionParameters } from "machina.ts"
import { createTree } from "./util/ascii_tree"

export class Bot {

    @machinaDecoratorInfo({description: "simple command to test that the bot is working", monikers: ["test"]})
    static test: MachinaFunction = (params: MachinaFunctionParameters) => {
        params.msg.reply('\n' + createTree("TEST", {
            "Prop 2": "Property 2",
            prop2: {
                prop1: "23",
                prop2: "21",
                prop: {
                    prop1: "23",
                    prop2: "21",
                    prop: {
                        prop1: "23",
                        prop2: "21" 
                    }, 
                }, 
            },
            prop3: "Prop3",
            prop: {
                prop1: "23",
                prop2: "21" 
            },
            prop4: {
                prop41: "1",
                prop42: "2",
                prop43: "4",
                prop44: {
                    prop441: "cheese"
                }
            }
        }))
    }
}