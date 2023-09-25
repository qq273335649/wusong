import fetch from '@/api'
export const upload = (data: FormData) => {
    return fetch("/upload1/upload", {
        method: "post",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data,
    })
}
export const getString = () => {
    return fetch("/api/string", {
        method: "get",
    })
}