import React, { useEffect } from "react"
import { useChatContext } from "../../context/ChatContextProvider"
import socket from "../../socket/Socket"
import ReactToast from "../react-hot-toast/ReactToast"

export default function SocketComponent() {
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

        socket.on("connect", () => {
            ReactToast("success", "Socket notification", "Connection stabilized to socket");
        });

        socket.io.on("error", (error) => {
            ReactToast("error", "Socket notification", "SOCKET_CONNECTION_REFUSED");
            setGenerate(false);
        });

        return () => {
            socket.disconnect()
            socket.off("connect")
            socket.io.off("error")
        }
    }, [])

    return null
}
