/**
 * changes the NODE_PATH env var programmatically.
 * @param value the new value for NODE_PATH var.
 */
export function changeNodePath(value: string) {
    process.env.NODE_PATH = value;
    require("module").Module._initPaths();
}