
const USER_DATA = 'dataUser';

const getDataUser = () => localStorage.getItem(USER_DATA);
const removeDataUser = () => localStorage.removeItem(USER_DATA);
const setDataUser = data => localStorage.setItem(USER_DATA, data);

export { getDataUser, removeDataUser, setDataUser };