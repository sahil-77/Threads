import { useRecoilValue, useSetRecoilState } from 'recoil';

import authScreenAtom from '../atoms/authAtom';

import LoginCard from '../Components/Login';
import SignupCard from '../Components/SignupCard';

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);
  //   useSetRecoilState(authScreenAtom);

  return <>{authScreenState === 'login' ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
