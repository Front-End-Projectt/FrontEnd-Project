import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import CommunityCard from "./CommunityCard";
import axios from "axios";
import { useState, useEffect } from "react";

interface communityCard {
  id: string;
  userId: string;
  userName: string;
  avatar: string;
  img: string;
  text: string;
}

function CommunityPage() {
  const [data, setData] = useState<any[]>([]);
  const [cardToDelete, setCardToDelete] = useState("string");
  const [text, setText] = useState<string>("");
  const [id, setId] = useState<string>("");
  const api =
    "https://63e21e1c109336b6cbffdff0.mockapi.io/api/lap/CommunityCards";
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const img =
    userName == "محمد طه"
      ? "https://unsplash.com/photos/dBiIcdxMWfE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fHBhcmVudHxlbnwwfHx8fDE2NzY1MDEzNTc&force=true&w=2400"
      : "";
  const avatar = userName === "محمد طه" ? "https://bit.ly/sage-adebayo" : "";
  // get data from api
  const getData = () => {
    axios.get(api).then((res) => {
      setData(res.data);
      console.log(`Get comment: ${res.data}`);
      console.log(data);
    });
  };

  useEffect(() => {
    getData();
    console.log("You got me");
  }, []);

  // post data to api
  const PostCard = () => {
    let loc = localStorage.getItem("isLogIn");
    getData();
    if (loc == "true") {
      axios
        .post(api, {
          id: id,
          userId: userId,
          userName: userName,
          avatar: avatar,
          img: img,
          text: text,
        })
        .then((res) => {
          localStorage.setItem("id", res.data.id);
        });
      getData();
    } else {
      alert("Please login");
    }
  };

  const deletItem = (id: any) => {
    console.log("Delete");
    axios.delete(`${api}/${id}`).then((res) => {
      setData(data.filter((del) => del.id != id));
      setCardToDelete("");
    });
  };
  return (
    <Flex m={5} gap={7} flexDirection="column">
      <Flex flexDir={"column"} gap={7} p={7} bg={"white"} borderRadius={10}>
        <Heading as="h2">المجتمع</Heading>
        <Text>
          معلم التوحد هو مشغل مهنة اجتماعية يراقب الطلاب الذين يعانون من اضطراب
          التوحد. يقوم هذا المتخصص بوضع خطط وتطبيقات لتوفير الاجتماعات والتدريب
          في الذهن والتواصل للطلاب الذين يعانون من اضطراب التوحد. يقوم معلمو
          التوحد أيضًا بتوفير دعم للطلاب الذين يواجهون أي مشاكل في مجال التصرف،
          وبتوفير دعم من خلال التدريب الذكي وإعدادهم لمختلف الحياة.
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        gap={3}
        alignItems="center"
        w={"100%"}
        mb="2em">
        <VStack w={"full"}>
          {data.map((item: communityCard) => (
            <>
              {console.log(`Item: ${item.text}`)}
              <CommunityCard
                key={item.id}
                userId={`${userId}`}
                text={item.text}
                cardId={item.id}
                userName={item.userName}
                callBack={setCardToDelete}
                avatar={item.avatar}
                img={item.img}
              />
              {cardToDelete == item.id ? deletItem(cardToDelete) : null}
            </>
          ))}
        </VStack>
      </Flex>
      <Box
        display="flex"
        p="1.5em"
        color="black"
        alignSelf={"center"}
        backgroundColor={"#ffffff"}
        rounded="md"
        gap={2}
        flexDirection="row">
        {/* Comment to write */}
        <Input
          placeholder="أكتب هنا"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button onClick={PostCard}>ارسال</Button>
      </Box>
    </Flex>
  );
}

export default CommunityPage;
