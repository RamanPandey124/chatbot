import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { messageInterface } from "../types/chat";

interface chatContextInterface {
    messages: messageInterface[];
    setMessages: Dispatch<SetStateAction<messageInterface[]>>;
    updateChats: (message: messageInterface) => void;
    updateStream: (message: string) => void;
}
const ChatContext = createContext<chatContextInterface>({} as chatContextInterface);

export function useChatContext() {
    return useContext(ChatContext)
}

interface contextProviderProps {
    children: ReactNode
}

export default function ChartContextProvider({ children }: contextProviderProps) {
    const [stream, setStream] = useState<string>("")
    const [messages, setMessages] = useState<messageInterface[]>(intialState)
    const updateChats = (message: messageInterface) => {
        setMessages((pre) => [...pre, message])
    }

    const updateStream = (message: string) => {
        setMessages(prevMessages => {
            const lastMessage = prevMessages.at(-1);

            if (lastMessage?.isStream) {
                const updatedLastMessage = { ...lastMessage, value: lastMessage.value + message };
                return [...prevMessages.slice(0, -1), updatedLastMessage];
            } else {
                const newMessage: messageInterface = { value: message, type: "in", isStream: true };
                return [...prevMessages, newMessage];
            }
        });
    }

    return (
        <ChatContext.Provider value={{ messages, setMessages, updateChats, updateStream }}>
            {children}
        </ChatContext.Provider>
    )
}


const intialState: messageInterface[] = [
    {
        type: "in",
        value: "hello world"
    },
    {
        type: "out",
        value: "ChartContextProvider"
    }
]