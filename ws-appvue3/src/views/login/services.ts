import fetch from '@/api'
export const register = (data: {
    name: string,
    password: string,
    repassword: string,
}) => {
    return fetch("/api/auth/register", {
        method: "post",
        data,
    })
}