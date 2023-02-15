import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import CommunityCard from "./CommunityCard";
import axios from "axios";
import { useState, useEffect } from "react";

interface communityCard {
  id: string;
  userId: string;
  text: string;
}

function CommunityPage() {
  const [data, setData] = useState<any[]>([]);
  const [text, setText] = useState<string>("");
  const [id, setId] = useState<string>("");
  const api =
    "https://63e21e1c109336b6cbffdff0.mockapi.io/api/lap/CommunityCards";
  const userId = localStorage.getItem("userId");

  // get data from api
  const getData = () => {
    axios.get(api).then((res) => {
      setData(res.data);
      console.log(`Get comment: ${res.data}`);
      console.log(data);
    });
  };

  useEffect(() => getData(), []);

  // post data to api
  const PostCard = () => {
    let loc = localStorage.getItem("isLogIn");
    getData();
    if (loc == "true") {
      axios
        .post(api, {
          id: id,
          userId: userId,
          text: text,
        })
        .then((res) => {
          localStorage.setItem("id", res.data.id);
        });
      getData();
    } else {
      alert("please login");
    }
  };

  const deletItem = (id: any) => {
    console.log(id);
    axios.delete(`${api}/${id}`).then((res) => {
      setData(data.filter((del) => del.id != id));
    });
    console.log(data);
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
                userId={`${userId}`}
                text={item.text}
                cardId={item.id}
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
          ))}
        </VStack>
        {/* <CommunityCard id="" name="محمد طه" /> */}
        {/* <CommunityCard id={""} name={""} /> */}
      </Flex>
      <Box
        display="flex"
        p="1.5em"
        alignSelf={"center"}
        color="black"
        border="0.05em #eeeeee solid"
        rounded="md"
        gap={2}
        flexDirection="row">
        {/* Comment to write */}
        <Input
          placeholder="أكتب تعليقك هنا"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button onClick={PostCard}>تعليق</Button>
      </Box>
    </Flex>
  );
}

export default CommunityPage;
