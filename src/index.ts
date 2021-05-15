import doreamon from '@zodash/doreamon';

import { IActionInput, IMessage } from './type';

export function createMessage(actionInput: IActionInput): IMessage {
  const data: any[] = [
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

export async function post(url: string, body: IMessage): Promise<string> {
  const response = await doreamon.request
    .post(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    .json();

  return response;
}

export async function sendMessage(actionInput: IActionInput): Promise<string> {
  const message = createMessage(actionInput);
  return post(actionInput.url, message);
}
