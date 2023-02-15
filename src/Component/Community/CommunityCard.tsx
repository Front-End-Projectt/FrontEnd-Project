import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Stack,
  Input,
  Card,
  Button,
  useDisclosure,
  useColorModeValue,
  CardBody,
  Image,
  CardFooter,
  Box,
  Avatar,
  IconButton,
  CardHeader,
  Heading,
  Text,
  Flex,
  Collapse,
  VStack,
  CloseButton,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
// import { CheckIcon } from "@chakra-ui/icons";
import { BiChat, BiLike, BiShare, BiDotsVerticalRounded } from "react-icons/bi";
import Comment from "./Comment";
import { Link } from "react-router-dom";

interface CommentType {
  id: string;
  comment: string;
  cardId: string;
}

interface communityCard {
  cardId: string;
  userId: string;
  userName: string;
  text: string;
}

let commentsList: CommentType[] = [];

function CommunityCard(props: communityCard) {
  const { isOpen, onToggle } = useDisclosure();
  const [comment, setComment] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState<string>("");
  const api = "https://63e750caac3920ad5bdc24a6.mockapi.io/Comment";
  const userName = localStorage.getItem("userName");
  const userId = props.userId;
  const cardId = props.cardId;

  // get data from api
  const getData = () => {
    axios.get(api).then((res) => {
      commentsList.push(res.data);
      setData(res.data);
      console.log(`Get comment: ${res.data}`);
      console.log(data);
    });
  };

  useEffect(() => getData(), []);

  // post data to api
  const PostData = () => {
    let loc = localStorage.getItem("isLogIn");
    getData();
    if (loc == "true") {
      axios
        .post(api, {
          comment: comment,
          userId: userId,
          cardId: cardId,
        })
        .then((res) => {
          localStorage.setItem("id", res.data.id);
          getData();
        });
    } else {
      // setShowAlert(true)    
       // alert("please login");
    }
  };

  const deletItem = (id: any) => {
    console.log(id);
    axios.delete(`${api}/${id}`).then((res) => {
      setData(
        data.filter(
          (del: Comment) => del.id != id && del.cardId != props.cardId
        )
      );
    });
    console.log(data);
  };

  return (
    <>
    <Card shadow="sm">
      <CardHeader>
        <Flex gap="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={`${userName}`} src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size="sm">{props.userName}</Heading>
              <Text>طبيب, تخصص </Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BiDotsVerticalRounded />}
          />
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>{props.text}</Text>
      </CardBody>

      {/* Card image */}
      <Image
        objectFit="cover"
        height="10em"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />

      {/* Card footer */}
      <CardFooter
        flexDirection="column"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}>
        {/* Buttons section */}
        <Flex justify="space-between">
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            اعجاب
          </Button>
          <Button
            flex="1"
            variant="ghost"
            leftIcon={<BiChat />}
            onClick={onToggle}>
            تعليقات
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            مشاركة
          </Button>
        </Flex>

        {/* Comment section */}
        <Flex flexDirection="column-reverse" justifyContent={"center"}>
          <Collapse in={isOpen} animateOpacity>
            {/* Commetns section generator */}
            <VStack w={"full"}>
              {data.map((item: CommentType) => (
                <>
                  {console.log(`Item: ${item.comment}`)}
                  {cardId == item.cardId ? (
                    <>
                      <Comment
                        comment={item.comment}
                        id={item.id}
                        userId={userId}
                        cardId={cardId}
                      />
                      <Button
                        _hover={{
                          backgroundColor: "rgba(250, 250, 250, 0.8)",
                        }}
                        variant="outline"
                        border={"none"}
                        color={"red"}
                        alignSelf={"end"}
                        onClick={() => {
                          deletItem(item.id);
                        }}>
                        Delete
                      </Button>
                    </>
                  ) : null}
                </>
              ))}
            </VStack>
            <Box
              display="flex"
              p="1.5em"
              color="black"
              border="0.05em #eeeeee solid"
              rounded="md"
              gap={2}
              flexDirection="row">
              {/* Comment to write */}
              <Input
                placeholder="أكتب تعليقك هنا"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              
              <Button onClick={PostData}>تعليق</Button>
              
            </Box>
            
          </Collapse>
        </Flex>
      </CardFooter>
    </Card>
    </>
          //       <Link to={"/signIn"}>
          //       {showAlert && (
          //   <Alert status='info' h={5}>
          //     <AlertIcon />
          //     {/* <AlertTitle>Error!</AlertTitle> */}
          //     <AlertDescription >سجل دخول</AlertDescription>
          //   </Alert>
          // )}
          //       </Link>
  );
}

export default CommunityCard;
