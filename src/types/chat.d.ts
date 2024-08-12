
export type messageType = "in" | "out"

export interface messageInterface{
    type:messageType,
    value:string,
    isStream?:boolean
}