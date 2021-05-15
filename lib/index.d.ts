import { IActionInput, IMessage } from './type';
export declare function createMessage(actionInput: IActionInput): IMessage;
export declare function post(url: string, body: IMessage): Promise<string>;
export declare function sendMessage(actionInput: IActionInput): Promise<string>;
