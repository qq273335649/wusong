import fetch from ".."

export const usersFind = (params?: { name: string }) => fetch("/api/users/find",
    { method: "get", params },
)