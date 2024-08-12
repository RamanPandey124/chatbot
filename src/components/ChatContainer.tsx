import ChartContextProvider from "../context/ChatContextProvider";

import ChatView from "./ChatView";
import InMessage from "./InMessage";
import InputBox from "./InputBox";
import StreamMessage from "./StreamMessage";

export default function ChatContainer() {
    return (
        <ChartContextProvider>
            <InMessage />
            <StreamMessage/>
            <ChatView />
            <InputBox />
        </ChartContextProvider>
    )
}


