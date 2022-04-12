import USER_IMG from '../icons/user-icon.svg';

const USER ='tunesUser'

const saveUser = (user) => localStorage.setItem(USER, JSON.stringify(user));
export const readUser = () => JSON.parse(localStorage.getItem(USER));

export const createUser = (user) => {
  const emptyUser = {
    name: '',
    email: '',
    img: `${ USER_IMG }`,
  };
  saveUser({ ...emptyUser, ...user });
}

export const updateUser = (updatedUser) => {
  saveUser({ ...updatedUser });
}