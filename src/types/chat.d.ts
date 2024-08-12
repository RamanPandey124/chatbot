
export type messageType = "in" | "out"

export interface messageInterface {
    type: messageType,
    value: string,
    isStream?: boolean
}

export interface PromptInterface {
    value: string
}

export interface ResponseInterface {
    value: string,
    isStream?: boolean
}
export interface PromptResponsePair {
    prompt: PromptInterface;
    response?: ResponseInterface
}