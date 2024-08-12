import { ResponseInterface } from "../../types/chat"
import MarkdownEditor from "./MarkDownEditor"

interface markdownResponseProps {
    response: ResponseInterface
}
export default function MarkdownResponsePanel({ response }: markdownResponseProps) {
    return (
        <div className="flex justify-start">
            <div className="bg-blue-700 p-2 rounded-md max-w-[40%]">
                <MarkdownEditor markdownContent={response.value} />
            </div>
        </div>
    )
}