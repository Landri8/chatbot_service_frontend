import {create} from 'zustand'

const ORGANIZATIONDATA = import.meta.env.VITE_ORG_DATA;

export const useChatStore = create((set: any) => ({
    companyInfo: ORGANIZATIONDATA,
    chatList: [],
    updateChatList: (chats : any) => set({ chatList: chats }),
}))