"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAction = exports.getActionInput = void 0;
const core = require("@actions/core");
const index_1 = require("./index");
function getActionInput() {
    const url = core.getInput('url');
    const title = core.getInput('title');
    const text = core.getInput('text');
    const at = core.getInput('at');
    return {
        url,
        title,
        text,
        at,
    };
}
exports.getActionInput = getActionInput;
async function sendAction() {
    try {
        const actionInput = getActionInput();
        const response = await index_1.sendMessage(actionInput);
        core.debug(response);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
exports.sendAction = sendAction;
sendAction();
//# sourceMappingURL=action.js.map