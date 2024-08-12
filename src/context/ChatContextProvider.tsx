import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { messageInterface, PromptInterface, PromptResponsePair, ResponseInterface } from "../types/chat";

interface chatContextInterface {
    messages: PromptResponsePair[];
    setMessages: Dispatch<SetStateAction<PromptResponsePair[]>>;
    isGenerate: boolean;
    setGenerate: Dispatch<SetStateAction<boolean>>;
    handlePrompt: (prompt: PromptInterface) => void
    handleStream: (chunk: string) => void
}
const ChatContext = createContext<chatContextInterface>({} as chatContextInterface);

export function useChatContext() {
    return useContext(ChatContext)
}

interface contextProviderProps {
    children: ReactNode
}

export default function ChartContextProvider({ children }: contextProviderProps) {
    const [messages, setMessages] = useState<PromptResponsePair[]>(intialState)
    const [isGenerate, setGenerate] = useState<boolean>(false)

    const handlePrompt = (prompt: PromptInterface) => {
        setMessages(pre => [...pre, { prompt }])
    }

    const handleStream = (chunk: string) => {
        setMessages((prevMessages) => {
            const lastIndex = prevMessages.length - 1;
            if (lastIndex < 0) return prevMessages; // Return early if the array is empty

            return prevMessages.map((message, i) =>
                i === lastIndex
                    ? {
                        ...message,
                        response: {
                            ...message.response,
                            value: (message.response?.value || '') + chunk,
                        },
                    }
                    : message
            );
        });
    }

    return (
        <ChatContext.Provider value={{ messages, setMessages, isGenerate, setGenerate, handlePrompt, handleStream }}>
            {children}
        </ChatContext.Provider>
    )
}

const intialState: PromptResponsePair[] = [
    {
        prompt: {
            value: "hello world"
        },
        response: {
            value: "ChartContextProvider",
            isStream: false
        }
    }
]