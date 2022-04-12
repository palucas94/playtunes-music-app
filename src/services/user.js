const USER ='tunesUser'

const saveUser = (user) => localStorage.setItem(USER, JSON.stringify(user));
export const readUser = () => JSON.parse(localStorage.getItem(USER));

export const createUser = (user) => {
  const emptyUser = {
    name: '',
    email: '',
    img: '',
  };
  saveUser({ ...emptyUser, ...user });
}

export const updateUser = (updatedUser) => {
  saveUser({ ...updatedUser });
}