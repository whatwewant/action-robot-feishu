"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.post = exports.createMessage = void 0;
const doreamon_1 = require("@zodash/doreamon");
function createMessage(actionInput) {
    const data = [
        {
            tag: 'text',
            text: actionInput.text,
        },
    ];
    if (actionInput.at) {
        data.push({
            tag: 'at',
            user_id: actionInput.at,
        });
    }
    return {
        msg_type: 'post',
        content: {
            post: {
                zh_cn: {
                    title: actionInput.title,
                    content: [data],
                },
            },
        },
    };
}
exports.createMessage = createMessage;
async function post(url, body) {
    const response = await doreamon_1.default.request
        .post(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    })
        .json();
    return response;
}
exports.post = post;
async function sendMessage(actionInput) {
    const message = createMessage(actionInput);
    return post(actionInput.url, message);
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=index.js.map