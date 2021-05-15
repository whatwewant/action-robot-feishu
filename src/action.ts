import * as core from '@actions/core';

import { IActionInput } from './type';
import { sendMessage } from './index';

export function getActionInput(): IActionInput {
  const url: string = core.getInput('url');
  const title: string = core.getInput('title');
  const text: string = core.getInput('text');
  const at: string = core.getInput('at');

  return {
    url,
    title,
    text,
    at,
  };
}

export async function sendAction(): Promise<void> {
  try {
    const actionInput = getActionInput();
    const response = await sendMessage(actionInput);

    core.debug(response);
  } catch (error) {
    core.setFailed(error.message);
  }
}

sendAction();
