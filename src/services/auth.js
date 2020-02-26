export const isAutenticated = () => {
    const userId = window.localStorage.getItem('userId');

    return userId ? true : false
};