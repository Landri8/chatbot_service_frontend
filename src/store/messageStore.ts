import {create} from 'zustand';
import MessageInfoModel from '../models/messageInfo.model';

export const useMessageStore = create((set: any) => ({
    messageList: [],
    updateMessageList: (messageList: MessageInfoModel[]) => set({messageList: messageList})
}))