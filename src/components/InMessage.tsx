import { useChatContext } from "../context/ChatContextProvider";
import { messageInterface } from "../types/chat";
export default function InMessage() {
    const { updateChats } = useChatContext()
    const message:messageInterface = { type: "in", value: "sdfjjs" }
    return (
        <button className="border-2 px-4 m-2" onClick={() => updateChats(message)}>in</button>
    )
}