import { Box, Button, Container, Flex } from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserPage from './Pages/UserPage';
import PostPage from './Pages/PostPage';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import AuthPage from './Pages/AuthPage';
import CreatePost from './Components/CreatePost';
import userAtom from './atoms/userAtom';
import { useRecoilValue } from 'recoil';
import UpdateProfilePage from './Pages/updateProfilePage';
import ChatPage from './Pages/ChatPage';

function App() {
  const user = useRecoilValue(userAtom);
  console.log(user);
  return (
    <>
      <Box position={'relative'} w="full">
        <Container maxWidth="620px">
          <Header></Header>
          <Routes>
            <Route
              path="/"
              element={user ? <Homepage /> : <Navigate to="/auth" />}
            />
            <Route
              path="/auth"
              element={!user ? <AuthPage /> : <Navigate to="/" />}
            />
            <Route
              path="/update"
              element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />}
            />

            <Route
              path="/:username"
              element={
                user ? (
                  <>
                    <UserPage /> <CreatePost></CreatePost>
                  </>
                ) : (
                  <UserPage></UserPage>
                )
              }
            />
            <Route path="/:username/post/:pid" element={<PostPage />} />
            <Route
              path="/chat"
              element={user ? <ChatPage /> : <Navigate to={'/auth'}></Navigate>}
            />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default App;
