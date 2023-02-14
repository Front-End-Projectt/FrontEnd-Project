import React from "react";
import { Flex, Select, SimpleGrid } from "@chakra-ui/react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import techArr from "./ArrayTeacher";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import StarRating from "./StarRating";
import App from '../../App.css';
function Teacher({ setInfo }: any) {
  const navigate = useNavigate();

  const [arr, setArr] = React.useState(techArr);
  const filter = (region: string) => {
    if (region === "الرياض") {
      setArr(techArr.filter((e) => e.region === "الرياض"));
    } else if (region === "المجمعة") {
      setArr(techArr.filter((e) => e.region === "المجمعة"));
    } else if (region === "القصيم") {
      setArr(techArr.filter((e) => e.region === "القصيم"));
    } else if (region === "الجبيل") {
      setArr(techArr.filter((e) => e.region === "الجبيل"));
    } else if (region === "الدمام") {
      setArr(techArr.filter((e) => e.region === "الدمام"));
    } else {
      setArr(techArr);
    }
  };

  return (
    <>
    <Box m={5}>
      <Flex flexDir={"column"} gap={7} p={7} bg={"white"} borderRadius={10}>
      <Heading as="h2">
        معلمي الظل
      </Heading>
      <Text>
        معلم التوحد هو مشغل مهنة اجتماعية يراقب الطلاب الذين يعانون من اضطراب
        التوحد. يقوم هذا المتخصص بوضع خطط وتطبيقات لتوفير الاجتماعات والتدريب في
        الذهن والتواصل للطلاب الذين يعانون من اضطراب التوحد. يقوم معلمو التوحد
        أيضًا بتوفير دعم للطلاب الذين يواجهون أي مشاكل في مجال التصرف، وبتوفير
        دعم من خلال التدريب الذكي وإعدادهم لمختلف الحياة.
      </Text>
      </Flex>
      <Select
        bg={"white"}
        pr={3}
        _hover={{ cursor: "pointer" }}
        placeholder="المدينة"
        w={200}
        size={"md"}
        m={5}
        onChange={(e) => filter(e.target.value)}>
        <option value="الرياض">الرياض</option>
        <option value="المجمعة">المجمعة</option>
        <option value="القصيم">القصيم</option>
        <option value="الدمام">الدمام</option>
        <option value="الجبيل">الجبيل</option>
      </Select>
      <SimpleGrid columns={{ base: 1, md: 3, sm: 2 }} spacing={10}>
        {arr.map((tech, i) => (
          <Center py={6} key={i}>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              m={3}
              p={6}
              textAlign={"center"}>
              <Avatar size={"xl"} src={tech.img} mb={4} pos={"relative"} />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {tech.name}
              </Heading>
              <Text fontWeight={600} color={"gray.500"} mb={4}></Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}>
                {tech.des}
              </Text>

              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}>
                  #{tech.region}
                </Badge>
              </Stack>
              <StarRating />
              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  onClick={() => navigate(`/detailsTeacher/${tech.id}`)}
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"rgba(0, 135, 85, 0.7)"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgba(0, 135, 85, 0.48), 0 10px 10px -5px rgba(0, 135, 85, 0.43)"
                  }
                  _hover={{
                    bg: "#008755",
                  }}
                  _focus={{
                    bg: "#008755",
                  }}>
                  المزيد
                </Button>
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
      </Box>
    </>
  );
}
export default Teacher;
