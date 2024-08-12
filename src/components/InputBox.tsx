import { KeyboardEvent, useRef, useState } from "react"
import { useChatContext } from "../context/ChatContextProvider";
import { messageInterface, PromptInterface } from "../types/chat";
import socket from "../socket/Socket";

export default function InputBox() {
    const [inputValue, setInputValue] = useState<string>("")
    const { handlePrompt, messages, isGenerate, setGenerate } = useChatContext()

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        if (!inputValue || isGenerate) return null
        socket.emit("prompt", { id: messages.length, value: inputValue })
        const newMessage: PromptInterface = {
            value: inputValue
        }
        handlePrompt(newMessage)
        setInputValue("")
        setGenerate(true)
    }

    const handleStop = () => {
        setGenerate(false)
    }

    return (
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
            <div className="bg-zinc-700 w-1/3">
                <input
                    name="search"
                    className="bg-inherit p-2 w-full rounded-lg border-2"
                    autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="search"
                    onKeyDown={handleKeyPress}
                />
            </div>
            <div className="border-2 rounded-lg">
                <button
                    className="h-full w-full hover:bg-gray-700"
                    onClick={isGenerate ? handleStop : handleSubmit}
                >
                    {isGenerate ? "Stop" : "Generate"}
                </button>
            </div>
        </div>
    )
}
