import { sendMessage } from '../src/index';

describe('@zcorky/action-robot-feishu', () => {
  it('send', async () => {
    await sendMessage({
      url: process.env.FEISHU_ROBOT_WEBHOOK_URL,
      title: 'test title',
      text: 'test text',
    });
  });
});
