import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";

interface Comment {
  id: string;
  userId: string;
  cardId: string;
  comment: string;
}

function Comment(props: Comment) {
  return (
    <>
      <Flex w="full" p={2} flexDirection="column" border="0.1em #eeeeee solid">
        <Heading as={"h3"} fontSize={{ base: "md", sm: "md" }} mb={3}>
          ريان
        </Heading>
        <Flex
          alignItems="center"
          justifyContent={"space-between"}
          left={0}>
          <Text>{props.comment}</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Comment;
