import { useEffect, useState } from 'react';
import UserHeader from '../Components/UserHeader';
import UserPost from '../Components/UserPost';

import { useParams } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';
import { Flex, Spinner } from '@chakra-ui/react';
import Post from '../Components/post';
import postsAtom from '../atoms/postsAtom';
import { useRecoilState } from 'recoil';
import useGetUserProfile from '../hooks/useGetUserProfile';
const UserPage = () => {
  const { user, loading } = useGetUserProfile();
  const { username } = useParams();
  const showToast = useShowToast();
  const [posts, setPosts] = useRecoilState(postsAtom);

  const [fetchingPosts, setFetchingPosts] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      if (!user) return;
      setFetchingPosts(true);
      try {
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        showToast('Error', error.message, 'error');
        setPosts([]);
      } finally {
        setFetchingPosts(false);
      }
    };
    getPosts();
  }, [user, username, showToast, setPosts]);
  console.log('posts is here and it is recoil state', posts);

  if (!user && loading)
    return (
      <Flex justifyContent={'center'}>
        <Spinner size="xl"></Spinner>
      </Flex>
    );
  if (!user && !loading) return <h1>User Not found</h1>;
  console.log(user);
  return (
    <>
      <UserHeader user={user}></UserHeader>
      {!fetchingPosts && posts.length === 0 && <h1>User has no posts</h1>}
      {fetchingPosts && (
        <Flex justifyContent={'center'} my={12}>
          <Spinner size={'xl'}></Spinner>
        </Flex>
      )}
      {posts.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
    </>
  );
};

export default UserPage;
