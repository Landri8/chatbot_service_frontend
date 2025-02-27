import React, { useEffect } from 'react'
import { IoChatboxOutline, IoRemove  } from 'react-icons/io5'
import { IoMdSend } from "react-icons/io";
import { useChatStore } from '../store/chatStore';
import toast from 'react-hot-toast';
import axios from 'axios';

const ChatBot = () => {

    const chatStore = useChatStore(state => state)
    const [isOpen, setIsOpen] = React.useState(false)
    const queryRef = React.useRef<HTMLInputElement>(null)

    const openChat = () => {
        setIsOpen(true)
    }
    const closeChat = () => setIsOpen(false)

    const handleSendMessage = async () => {
        if (queryRef.current && queryRef.current.value) {
            chatStore.updateChatList([...chatStore.chatList, {role: "user", text: queryRef.current.value}])
            console.log(chatStore.chatList)
            // const history = chatStore.chatList.map(({role, text}) => ({role, parts: [{text}]}));

            // const {data} = await axios.post(`${import.meta.env.VITE_CHATBOT_API_URL}`, JSON.stringify({
            //     contents: history,
            // }), {headers: {
            //     "Content-Type": "application/json",
            // }})

            // console.log(data)

        } else {
            toast("Please enter question first!")
        }
    }

    useEffect(() => {
        if(queryRef.current) queryRef.current.focus()
    }, [isOpen])

    return (
        <>
            {isOpen && (
                <div className='fixed bottom-10 right-5 w-[clamp(220px,50vw,400px)] h-[76vh] z-40 bg-[#ffffff7d] rounded-[30px] backdrop-blur-[4px] overflow-hidden flex flex-col'>
                    <div className='px-4 py-4 flex items-center justify-end'>
                        <button title='Close Chat' className='w-[30px] aspect-square flex items-center justify-center text-[18px] hover:bg-[#ffffff59] cursor-pointer rounded-full' onClick={closeChat}><IoRemove /></button>
                    </div>
                    {/* Message Container */}
                    <div className='flex-1 px-4 py-2 overflow-y-auto flex flex-col'>
                        <div className='bg-white p-4 mr-auto w-[60%] rounded-[12px] rounded-tl-none my-1'>
                            <p>Hello! How can we assist you with our products?</p>
                        </div>

                        <div className='bg-sky-200 p-4 ms-auto w-[60%] rounded-[12px] rounded-tr-none my-1'>
                            <p>Hello! How can we assist you with our products?</p>
                        </div>
                        <div className='bg-sky-200 p-4 ms-auto w-[60%] rounded-[12px] rounded-tr-none my-1'>
                            <p>Hello! How can we assist you with our products?</p>
                        </div>
                        <div className='bg-sky-200 p-4 ms-auto w-[60%] rounded-[12px] rounded-tr-none my-1'>
                            <p>Hello! How can we assist you with our products?</p>
                        </div>
                        <div className='bg-sky-200 p-4 ms-auto w-[60%] rounded-[12px] rounded-tr-none my-1'>
                            <p>Hello! How can we assist you with our products?</p>
                        </div>
                        <div className='bg-sky-200 p-4 ms-auto w-[60%] rounded-[12px] rounded-tr-none my-1'>
                            <p>Hello! How can we assist you with our products?</p>
                        </div>
                        <div className='bg-sky-200 p-4 ms-auto w-[60%] rounded-[12px] rounded-tr-none my-1'>
                            <p>Hello! How can we assist you with our products?</p>
                        </div>
                        <div className='bg-sky-200 p-4 ms-auto w-[60%] rounded-[12px] rounded-tr-none my-1'>
                            <p>Hello! How can we assist you with our products?</p>
                        </div>
                    </div>
                    <input ref={queryRef} type="text" className='w-full bg-white h-[60px] rounded-[30px] outline-none border-none text-[14px] pl-8 pr-[70px]' placeholder='Ask anything' />
                </div>
            )}
            {
                !isOpen 
                ?
                <button onClick={openChat} type='button' title='Chat' className='w-[60px] aspect-square bg-white rounded-full flex cursor-pointer items-center justify-center fixed bottom-10 right-5 z-50 text-xl'><IoChatboxOutline /></button>
                :
                <button onClick={handleSendMessage} type='button' title='Send' className='w-[60px] aspect-square bg-white hover:bg-zinc-100 cursor-pointer rounded-full flex items-center justify-center fixed bottom-10 right-5 z-50 text-xl'><IoMdSend /></button>
            }
        </>
    )
}

export default ChatBot