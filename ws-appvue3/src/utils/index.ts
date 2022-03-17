import router from "@/router";

//token相关
const setToken = (token: string) => {
    localStorage.setItem('token', token);
}
const getToken = () => {
    return localStorage.getItem('token');
}
const removeToken = () => {
    localStorage.removeItem('token');
}
//路由跳转
//打开新窗口
const toPageOpen = (path: string) => {
    const routeUrl = router.resolve({
        path,
    });
    window.open(routeUrl.href, "_blank");
}
export {
    setToken,
    getToken,
    removeToken,
    toPageOpen,
}