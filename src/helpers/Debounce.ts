export default function debounce(func: (...args: Array<any>) => void, delay: number) {
    let timeout: NodeJS.Timeout | null = null
    return (...args: Array<any>) => {
        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            func(...args)
            timeout = null
        }, delay)
    }
}