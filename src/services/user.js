const USER ='tunesUser'

export const saveUser = (user) => localStorage.setItem(USER, JSON.stringify(user));
export const readUser = () => JSON.parse(localStorage.getItem(USER));