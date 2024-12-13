import { Button, Flex, Image, useColorMode } from '@chakra-ui/react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';

import { Link as RouterLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import useLogout from '../hooks/useLogout';
import authScreenAtom from '../atoms/authAtom';
import { BsFillChatQuoteFill } from 'react-icons/bs';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logOut = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  return (
    <Flex justifyContent={'space-between'} mt={6} mb="12">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24}></AiFillHome>
        </Link>
      )}
      {!user && (
        <Link
          as={RouterLink}
          to={'/auth'}
          onClick={() => {
            setAuthScreen('login');
          }}
        >
          Login
        </Link>
      )}

      <Image
        cursor={'pointer'}
        alt="logo"
        w={6}
        src={colorMode === 'dark' ? '/light-logo.svg' : '/dark-logo.svg'}
        onClick={toggleColorMode}
      />
      {user && (
        <>
          <Flex alignItems={'center'} gap={4}>
            <Link as={RouterLink} to={`/${user.username}`}>
              <RxAvatar size={24}></RxAvatar>
            </Link>
            <Link as={RouterLink} to={`/chat`}>
              <BsFillChatQuoteFill size={20} />
            </Link>
            <Button size={'xs'} onClick={logOut}>
              <FiLogOut size={20} />
            </Button>
          </Flex>
        </>
      )}
      {!user && (
        <Link
          as={RouterLink}
          to={'/auth'}
          onClick={() => {
            setAuthScreen('signup');
          }}
        >
          Signup
        </Link>
      )}
    </Flex>
  );
};

export default Header;
