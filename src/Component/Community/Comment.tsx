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
  comment: string;
}

function Comment(props: Comment) {
  // const [comment, setComment] = React.useState("");
  const [data, setData] = React.useState<any[]>([]);
  const [id, setId] = React.useState<string>("");
  const api = "https://63e750caac3920ad5bdc24a6.mockapi.io/Comment";
  // post data to api
  // const PostData = () => {
  //   let loc = localStorage.getItem("isLogIn");
  //   if (loc == "true") {
  //     axios
  //       .post(api, {
  //         comment,
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         localStorage.setItem("id", res.data.id);
  //       });
  //     axios.get(api);
  //   } else {
  //     alert("please login");
  //   }
  // };
  // get data from api
  const deletItem = (id: any) => {
    console.log(id);
    axios
      .delete(`https://63e750caac3920ad5bdc24a6.mockapi.io/Comment/${id}`)
      .then((res) => {
        setData(data.filter((del) => del.id != id));
      });
  };

  return (
    <>
      <Flex w="full" p={2} flexDirection="column" border="0.1em #eeeeee solid">
        <Heading as={"h3"} fontSize={{ base: "sm", sm: "sm" }} mb={3}>
          الاسم الأول
        </Heading>
        <Flex
          alignItems="center"
          justifyContent={"space-between"}
          border="0.1em #eeeeee solid"
          left={0}>
          <Text>{props.comment}</Text>
          <Button
            onClick={() => {
              deletItem(props.id);
            }}>
            Delete
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Comment;
