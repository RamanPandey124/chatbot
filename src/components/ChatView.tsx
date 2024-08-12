import { useContext, useEffect, useRef } from "react"
import { useChatContext } from "../context/ChatContextProvider"
import PromptArea from "./chatComponents/PromptArea";
import MarkdownResponsePanel from "./chatComponents/MarkdownResponsePanel";

export default function ChatView() {
    const { messages } = useChatContext()
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="border-2 h-[90%] px-8 py-2 space-y-2 overflow-y-scroll">
            {messages.map((item, index) => (
                <div key={index}>
                    <PromptArea prompt={item.prompt} />
                    {item.response && <MarkdownResponsePanel response={item.response} />}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}