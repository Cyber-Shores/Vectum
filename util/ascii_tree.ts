import { arrify } from "machina.ts";
import { AsciiTree } from "oo-ascii-tree";

// #3 Add recursion for greater flexibility
/**
 * Creates an ascii tree when provided with a title and children
 * @param title THe title of the tree
 * @param children The children of the tree
 * @todo make recurisive
 */
export const createTree = (title: string, children: {[key: string]: string}) => (new AsciiTree(`${title}`, ...Object.keys(children).map(key => new AsciiTree(`${key}: ${children[key]}`)))).toString()