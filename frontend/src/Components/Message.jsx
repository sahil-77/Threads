import { Avatar, Flex, Text } from '@chakra-ui/react';

const Message = ({ ownMessage }) => {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={'flex-end'}>
          <Text maxW={'350px'} bg={'blue.400'} p={1} borderRadius={'md'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quam suscipit rerum harum voluptatem est sit, dignissimos ipsam?
            Doloribus, deserunt.
          </Text>
          <Avatar src="" w={'7'} h={'7'}></Avatar>
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src="" w={'7'} h={'7'}></Avatar>

          <Text
            maxW={'350px'}
            bg={'gray.300'}
            p={1}
            borderRadius={'md'}
            color={'black'}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            laborum eum et nobis!
          </Text>
        </Flex>
      )}
    </>
  );
};

export default Message;
