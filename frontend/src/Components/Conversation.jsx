import {
  Avatar,
  AvatarBadge,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  WrapItem,
} from '@chakra-ui/react';

const Conversation = () => {
  return (
    <Flex
      gap={4}
      alignItems={'center'}
      p={'1'}
      _hover={{
        cursor: 'pointer',
        bg: useColorModeValue('gray.600', 'gray.dark'),
        color: 'white',
      }}
      borderRadius={'md'}
    >
      <WrapItem>
        <Avatar
          size={{
            base: 'xs',
            sm: 'sm',
            md: 'md',
          }}
          // src={user.profilePic}
          src="https://bit.ly/broken-link"
        >
          <AvatarBadge boxSize={'1em'} bg={'green.500'}></AvatarBadge>
          {/* {isOnline ? <AvatarBadge boxSize='1em' bg='green.500' /> : ""} */}
        </Avatar>
      </WrapItem>
      <Stack direction={'column'} fontSize={'sm'}>
        <Text fontWeight="700" display={'flex'} alignItems={'center'}>
          johndoe <Image src="/verified.png" w={4} h={4} ml={1} />
        </Text>
        <Text fontSize={'xs'} display={'flex'} alignItems={'center'} gap={1}>
          Hello some message
          {/* {currentUser._id === lastMessage.sender ? (
            <Box color={lastMessage.seen ? 'blue.400' : ''}>
              <BsCheck2All size={16} />
            </Box>
          ) : (
            ''
          )}
          {lastMessage.text.length > 18
            ? lastMessage.text.substring(0, 18) + '...'
            : lastMessage.text || <BsFillImageFill size={16} />} */}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Conversation;
