import { KeyboardEvent, useRef, useState } from "react"
import { useChatContext } from "../context/ChatContextProvider";
import { messageInterface } from "../types/chat";

export default function InputBox() {
    const [inputValue, setInputValue] = useState<string>("")
    const { updateChats } = useChatContext()

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        if (!inputValue) return null
        const newMessage: messageInterface = {
            type: "out",
            value: inputValue
        }
        updateChats(newMessage)
        setInputValue("")
    }
    return (
        <div className="absolute bottom-4 w-full">
            <div className="bg-zinc-700 w-1/3 mx-auto ">
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
        </div>
    )
}