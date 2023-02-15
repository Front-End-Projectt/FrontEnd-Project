import React from "react";
import axios from "axios";
import { useState } from "react";
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

function CommunityCard() {
// // Alert
const [showAlert, setShowAlert] = useState(false)
  // end
  // get data from api
  React.useEffect(() => {
    axios.get(api).then((res) => {
      setData(res.data);
    });
  });
  const { isOpen, onToggle } = useDisclosure();
  const [comment, setComment] = React.useState<string>("");
  const [data, setData] = React.useState<any[]>([]);
  const [id, setId] = React.useState<string>("");
  const api = "https://63e750caac3920ad5bdc24a6.mockapi.io/Comment";
  // post data to api
  const PostData = () => {
    let loc = localStorage.getItem("isLogIn");
    if (loc == "true") {
      axios
        .post(api, {
          comment,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("id", res.data.id);
        });
    //   axios.get(api);
    } else {
      setShowAlert(true)    
       // alert("please login");
    }
  };

  const alerts = () => {
    <Alert status='info'>
    <AlertIcon />
    Chakra is going live on August 30th. Get ready!
  </Alert>

  }

  //   const deletItem = (id: any) => {
  //     console.log(id);
  //     axios
  //       .delete(`https://63e750caac3920ad5bdc24a6.mockapi.io/Comment/${id}`)
  //       .then((res) => {
  //         setData(data.filter((del) => del.id != id));
  //       });
  //   };

  return (
    <>
          
    <Card maxW="60%" shadow="sm">
      <CardHeader>
        <Flex gap="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="محمد طه" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size="sm">محمد طه</Heading>
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
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
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
            {data.map((item: any) => (
              <VStack w={"full"}>
                <Comment comment={item.comment} id={item.id} />
              </VStack>
            ))}
            <Link to={"/signIn"}>
            {showAlert && (
        <Alert status='info' h={5}>
          <AlertIcon />
          {/* <AlertTitle>Error!</AlertTitle> */}
          <AlertDescription >سجل دخول</AlertDescription>
        </Alert>
      )}
            </Link>
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
  );
}

export default CommunityCard;
