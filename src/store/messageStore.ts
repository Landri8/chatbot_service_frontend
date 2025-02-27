import {create} from 'zustand';
import { MessageModel } from '../models/messageInfo.model';

export const useMessageStore = create((set: any) => ({
    messageList: [],
    updateMessageList: (messageList: MessageModel[]) => set({messageList: messageList})
}))