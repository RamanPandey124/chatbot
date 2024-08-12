import { useContext, useEffect, useRef } from "react"
import { useChatContext } from "../context/ChatContextProvider"

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
            {messages.map(item => {
                const type = item.type
                return (
                    <div className={`flex ${type === "out" ? "justify-end" : "justify-start"}`}>
                        <div key={item.value} className={`${type === "out" ? "bg-zinc-600" : "bg-blue-700"} p-2 rounded-md max-w-[40%]`}>
                            {item.value}
                        </div>
                    </div>
                )
            })}
            <div ref={messagesEndRef} />
        </div>
    )
}