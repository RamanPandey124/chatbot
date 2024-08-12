import { useEffect } from "react";
import ChartContextProvider, { useChatContext } from "../context/ChatContextProvider";
import ChatView from "./ChatView";
import InputBox from "./InputBox";
import socket from "../socket/Socket";

export default function ChatContainer() {
    return (
        <ChartContextProvider>
            <ChatView />
            <InputBox />
            <SocketComponent />
        </ChartContextProvider>
    )
}

function SocketComponent() {
    const { handleStream, isGenerate, setGenerate } = useChatContext()

    useEffect(() => {
        socket.on("chunk", (response: { value: string, isStream: boolean }) => {
            const { value, isStream } = response
            if (isGenerate) {
                handleStream(value)
            }
            if (!isStream) { setGenerate(false) }
        })

        return () => {
            socket.off('chunk');
        };
    }, [isGenerate])

    useEffect(() => {
        socket.connect();
    }, [])

    return null
}
