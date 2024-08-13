import React, { useEffect } from "react"
import { useChatContext } from "../../context/ChatContextProvider"
import socket from "../../socket/Socket"
import ReactToast from "../react-hot-toast/ReactToast"
import debounce from "../../helpers/Debounce"

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

        const toastError = debounce(ReactToast, 3000)
        socket.io.on("error", (error) => {
            setGenerate(false);
            toastError("error", "Socket notification", "SOCKET_CONNECTION_REFUSED")
        });

        return () => {
            socket.disconnect()
            socket.off("connect")
            socket.io.off("error")
        }
    }, [])

    return null
}
