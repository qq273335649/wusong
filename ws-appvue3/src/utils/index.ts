
const setToken = (token: string) => {
    sessionStorage.setItem('token', token);
}
const getToken = () => {
    return sessionStorage.getItem('token') || '';
}
export {
    setToken,
    getToken,
}