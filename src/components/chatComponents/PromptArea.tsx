import { PromptInterface } from "../../types/chat"

interface promptAreaProps {
    prompt: PromptInterface
}
export default function PromptArea({ prompt }: promptAreaProps) {
    return (
        <div className="flex justify-end">
            <div className="bg-zinc-600 p-2 rounded-md max-w-[40%]">
                {prompt.value}
            </div>
        </div>
    )
}