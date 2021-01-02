import { arrify } from "machina.ts";
import { AsciiTree } from "oo-ascii-tree";
import { isTypeReferenceNode } from "typescript";

/**
 * Creates an ascii tree when provided with a title and children
 * @param title THe title of the tree
 * @param children The children of the tree
 * @param root Is this the root
 * @todo #3
 */
export const createTree = (title: string, children: Object, root = true) => {
    const tree: AsciiTree = new AsciiTree(title, ...Object.keys(children).map(key => typeof children[key] == "string" ? new AsciiTree(children[key]) : createTree(key, children[key], false) as AsciiTree))
    return root ? tree.toString() : tree
}