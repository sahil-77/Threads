import {
  Avatar,
  Divider,
  Flex,
  Image,
  Skeleton,
  SkeletonCircle,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Message from './Message';
import MessageInput from './MessageInput';

const MessageContainer = () => {
  return (
    <Flex
      flex="70"
      bg={useColorModeValue('gray.200', 'gray.dark')}
      borderRadius={'md'}
      p={2}
      flexDirection={'column'}
    >
      {/* Message header */}
      <Flex w={'full'} h={12} alignItems={'center'} gap={2}>
        <Avatar src="" size={'sm'} />
        <Text display={'flex'} alignItems={'center'}>
          johndoe
          <Image src="/verified.png" w={4} h={4} ml={1} />
        </Text>
      </Flex>
      <Divider></Divider>
      <Flex
        flexDirection={'column'}
        gap={4}
        my={4}
        p={2}
        height={'400px'}
        overflowY={'auto'}
      >
        {false &&
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
            <Flex
              key={i}
              gap={2}
              alignItems={'center'}
              p={1}
              borderRadius={'md'}
              alignSelf={i % 2 === 0 ? 'flex-start' : 'flex-end'}
            >
              {i % 2 === 0 && <SkeletonCircle size={'7'}></SkeletonCircle>}
              <Flex flexDirection={'column'} gap={3}>
                <Skeleton h={'8px'} w={'250px'}></Skeleton>
                <Skeleton h={'8px'} w={'250px'}></Skeleton>
                <Skeleton h={'8px'} w={'250px'}></Skeleton>
              </Flex>
              {i % 2 !== 0 && <SkeletonCircle size={'7'}></SkeletonCircle>}
            </Flex>
          ))}
        <Message ownMessage={true}></Message>
        <Message ownMessage={false}></Message>
        <Message ownMessage={true}></Message>
        <Message ownMessage={false}></Message>
      </Flex>
      <MessageInput></MessageInput>
    </Flex>
  );
};

export default MessageContainer;
