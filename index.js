var global = (1, eval)('this');
global.global = global;
global.globalThis = global;
global.frames = global;
global.self = global;
global.window = global;
module.exports = global;
