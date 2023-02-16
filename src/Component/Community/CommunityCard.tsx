import axios from "axios";
import { useState, useEffect, ReactNode } from "react";
import {
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
  CardHeader,
  Heading,
  Text,
  Flex,
  Collapse,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  Fade,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
// import { CheckIcon } from "@chakra-ui/icons";
import { BiChat, BiLike, BiShare, BiDotsVerticalRounded } from "react-icons/bi";
import Comment from "./Comment";
import CommunityPage from "./CommunityPage";
import { render } from "react-dom";
import { Link } from "react-router-dom";

interface CommentType {
  id: string;
  comment: string;
  cardId: string;
}

interface communityCard {
  cardId: string;
  userId: string;
  avatar: string;
  userName: string;
  text: string;
  img: string;
  callBack: any;
}

let commentsList: CommentType[] = [];

function CommunityCard(props: communityCard) {
  const { isOpen, onToggle } = useDisclosure();
  const [comment, setComment] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [showAlert , setShowAlert] = useState(false)
  const api = "https://63e750caac3920ad5bdc24a6.mockapi.io/Comment";
  const userName = localStorage.getItem("userName");
  const userId = props.userId;
  const cardId = props.cardId;
  const avatar = props.avatar;
  const img = props.img;

  // get data from api
  const getData = () => {
    axios.get(api).then((res) => {
      commentsList.push(res.data);
      setData(res.data);
      console.log(`Get comment: ${res.data}`);
      console.log(data);
    });
  };

  const customAlert = (des:string) => {    
    return (
      showAlert ? (
        <Alert   status="info" w={'100%'} borderRadius={10}>
        <AlertIcon />
        <AlertDescription fontSize={'md'}>{des}</AlertDescription>
      </Alert>
      ): (
        <span></span>
      )
    ) 
  }

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
      setShowAlert(true)
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
    <Card shadow="sm" w={{ base: "90%", md: "80%" }}>
      <CardHeader padding={5} pb={2}>
        <Flex>
          <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
            {avatar != "" ? (
              <>
                <Avatar name={`${userName}`} src={avatar} size={"md"} />
              </>
            ) : null}
            <Box>
              <Heading size="sm">{props.userName}</Heading>
              <Text>{userName == "محمد طه" ? "معلم تخاطب" : null} </Text>
            </Box>
          </Flex>
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack>
                <Box display={{ base: "flex", md: "flex" }}>
                  <BiDotsVerticalRounded />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}>
              <MenuItem>الحساب الشخصي</MenuItem>
              <MenuItem>بلاغ</MenuItem>
              <MenuDivider />
              <MenuItem
                color={"red"}
                onClick={() => {
                  onToggle;
                  props.callBack(cardId);
                }}>
                حذف
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>

      <CardBody padding={5} py={1} display={"flex"} flexDir="column" gap={3}>
        <Text>{props.text}</Text>

        {/* Card image */}
        {img != "" ? (
          <>
            <Image
              rounded={5}
              objectFit="cover"
              width="full"
              height="20em"
              src={img}
            />
          </>
        ) : null}
      </CardBody>

      {/* Card footer */}
      <CardFooter
        padding={5}
        py={3}
        flexDirection="column"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}>
        {/* Buttons section */}
        <Flex justify="space-between">
          <IconButton
            aria-label={""}
            backgroundColor="#fff"
            icon={<BiLike />}
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
          />
          <Button
            display={{ base: "none", md: "flex" }}
            flex="1"
            variant="ghost"
            leftIcon={<BiLike />}>
            اعجاب
          </Button>
          <IconButton
            aria-label={""}
            backgroundColor="#fff"
            icon={<BiChat />}
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
          />
          <Button
            display={{ base: "none", md: "flex" }}
            flex="1"
            variant="ghost"
            leftIcon={<BiChat />}
            onClick={onToggle}>
            تعليقات
          </Button>
          <IconButton
            aria-label={""}
            backgroundColor="#fff"
            _hover={{
              backgroundColor: "#fff",
            }}
            icon={<BiShare />}
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
          />
          <Button
            display={{ base: "none", md: "flex" }}
            flex="1"
            variant="ghost"
            leftIcon={<BiShare />}>
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
                          onToggle;
                          deletItem(item.id);
                        }}>
                        Delete
                      </Button>
                    </>
                  ) : null}
                </>
              ))}
            </VStack>
            {showAlert ? customAlert('يجب عليك تسجيل الدخول'):null}
            
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
                position={"sticky"}
                bottom={5}
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
  );
}

export default CommunityCard;
