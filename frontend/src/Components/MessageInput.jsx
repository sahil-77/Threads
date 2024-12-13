import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { IoSendSharp } from 'react-icons/io5';

const MessageInput = () => {
  return (
    <form>
      <InputGroup>
        <Input w={'full'} placeholder="Type your message..."></Input>
        <InputRightElement>
          <IoSendSharp color="green.500"></IoSendSharp>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default MessageInput;
