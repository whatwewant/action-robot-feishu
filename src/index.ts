import notify from '@zodash/nobot';

import { IActionInput } from './type';

export async function sendMessage(actionInput: IActionInput): Promise<void> {
  return notify('feishu', actionInput.url, {
    title: actionInput.title,
    content: actionInput.text,
  });
}
