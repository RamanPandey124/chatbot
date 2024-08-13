import toast from "react-hot-toast";

type toastType = "success" | "error";

export default function ReactToast(type: toastType, title: string, message: string) {
    return toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } ${type === "success" ? 'bg-green-100' : "bg-red-100"} max-w-md w-full shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 ml-2">
                <p className={`text-sm font-medium text-gray-900 `}>
                    {title}
                </p>
                <p className={`mt-1 text-sm ${type === "success" ? 'text-green-500' : 'text-red-500'}`}>
                    {message}
                </p>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-2 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div>
        </div>
    ))
}
