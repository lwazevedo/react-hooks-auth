
const USER_DATA = 'dataUser';

const getDataUser = () => JSON.parse(localStorage.getItem(USER_DATA));
const removeDataUser = () => localStorage.removeItem(USER_DATA);
const setDataUser = data => localStorage.setItem(USER_DATA, JSON.stringify(data));
const getRoles = () => {
  const data = getDataUser(); 
  return data ? data.user.roles : []
}
export { getDataUser, removeDataUser, setDataUser, getRoles };