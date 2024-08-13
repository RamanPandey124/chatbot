import React from "react";
import ChartContextProvider from "../context/ChatContextProvider";
import ChatView from "./ChatView";
import InputBox from "./InputBox";
import SocketComponent from "./socketComponent/SocketComponent";

export default function ChatContainer() {
    return (
        <ChartContextProvider>
            <ChatView />
            <InputBox />
            <SocketComponent />
        </ChartContextProvider>
    )
}
