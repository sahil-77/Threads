import { Button, Flex, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';
import { useEffect, useState } from 'react';
import Post from '../Components/post';
import { useRecoilState } from 'recoil';
import postsAtom from '../atoms/postsAtom';

const Homepage = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(false);
  const showToast = useShowToast();
  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]);
      try {
        const res = await fetch('/api/posts/feed');
        const data = await res.json();
        if (data.error) {
          showToast('Error', data.error, 'error');
          return;
        }
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast('Error', error.message, 'error');
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast, setPosts]);
  return (
    <>
      {!loading && posts.length === 0 && (
        <h1>Follow some users to see the feed</h1>
      )}
      {loading && (
        <Flex justify="center">
          <Spinner size="xl"></Spinner>
        </Flex>
      )}
      {posts.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
    </>
  );
};

export default Homepage;
