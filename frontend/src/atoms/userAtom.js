import { atom } from 'recoil';

const userAtom = atom({
  key: 'userAtom',
  default: localStorage.getItem('user-threads')
    ? JSON.parse(localStorage.getItem('user-threads'))
    : null, // Default to null if no user is stored
});

export default userAtom;
