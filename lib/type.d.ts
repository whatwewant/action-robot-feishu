export interface IActionInput {
    url: string;
    title: string;
    text: string;
    at?: string;
}
export interface IMessage {
    msg_type: 'text' | 'post';
    content: IContent;
}
export interface IContent {
}
