// import * as core from '@actions/core';

import { IActionInput } from './type';
import { sendMessage } from './index';

export function getActionInput(): IActionInput {
  // const url: string = core.getInput('url');
  // const title: string = core.getInput('title');
  // const text: string = core.getInput('text');
  // const at: string = core.getInput('at');

  const url: string = process.env.ACTION_URL;
  const title: string = process.env.ACTION_TITLE;
  const text: string = process.env.ACTION_TEXT;
  const at: string = process.env.ACTION_AT;

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

    console.log('info:', response);
    // core.debug(response);
  } catch (error) {
    // core.setFailed(error.message);
    console.error('error:', error);
  }
}

sendAction();
