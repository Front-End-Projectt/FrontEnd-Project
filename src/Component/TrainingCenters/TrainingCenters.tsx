import {
  Badge,
  Box,
  Button,
  filter,
  Flex,
  Text,
  Heading,
  Select,
  Switch,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Center,
  Avatar,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../Teachers/StarRating";
import trainArr from "./TrainingCentersArray";
function TrainingCenters() {
  const navigate = useNavigate();

  const [arr, setArr] = useState(trainArr);

  const filter = (city: string) => {
    if (city === "") {
      setArr(trainArr);
    } else {
      setArr(trainArr.filter((e) => e.city === city));
    }
  };

  return (
    <Box p={5}>
      <Flex flexDir={"column"} bg={"white"} p={7} borderRadius={10} gap={7}>
        <Heading>مراكز التدريب</Heading>
        <Text>
          مراكز التدريب هي وحدات تعليمية وتربوية تحتوي على مجموعة من الخدمات
          التي تخدم الأطفال ذوي الاحتياجات الخاصة، فضلاً عن الأطفال الذين لا
          يعانون من وجود حالات معينة. المراكز تطور الجوانب الدفاعية والاجتماعية
          للأطفال، وتوفر الحماية اللازمة للأطفال في جميع المراحل السنية،
          وبالإضافة إلى ذلك، يوفر هذا النوع من مراكز التدريب برامج الحضور الشهري المشترك،
          وبرامج خدمة الأسرة، وخدمات المساعدة التعليمية، وخدمات التغذية،
          والرعاية الصحية، والتكيف، والخدمات التنظيمية والشؤون القانونية، و
          غيرها من الخدمات.
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
        onChange={(e) => filter(e.target.value)}
      >
        <option value="الرياض">الرياض</option>
        <option value="مكة">مكة</option>
        <option value="الدمام">الدمام</option>
        <option value="الخرج">الخرج</option>
        <option value="جدة">جدة</option>

      </Select>

      <Box>
        <SimpleGrid
          columns={{ base: 1, lg: 2, xl: 3 }}
          justifyContent={"center"}
          spacing={10}
          pr={30}
          pl={30}
        >
          {arr.map((value) => (
            <Box
              key={value.title}
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              maxW={"445px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"lg"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Heading fontSize={{ base: "3xl", md: "xl" }} mb={5}>
                {value.title}
              </Heading>
              <Stack>
                <Text
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  textOverflow={"ellipsis"}
                  color={"gray.500"}
                >
                  {value.description}
                </Text>
              </Stack>
              <Flex
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"flex-end"}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #{value.city}
                </Badge>
                <Button
                  _hover={{
                    backgroundColor: "rgba(0, 135, 85, 0.7)",
                    color: "#ffffff",
                    transition: "150ms",
                  }}
                  variant="outline"
                  mt={5}
                  fontSize="sm"
                  onClick={() => navigate(`/Training/${value.id}`)}
                >
                  عرض المزيد
                </Button>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default TrainingCenters;
