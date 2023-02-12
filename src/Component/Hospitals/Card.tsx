import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import data from './hospitals.json'
export default function blogPostWithImage() {
  // const [hospArr, setHospArr] = useState([])

  // const json = 'hospitals.json'

  // useEffect(()=> {
  //   axios.get(json).then(res => {
  //     console.log(res.data.title);
  //     setHospArr(res.data)
  //   })
  // },[])
  
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Heading mb={5}>مستشفى اليمامة</Heading>
        <Stack>
          <Text color={"gray.500"}>
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
            يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار
          </Text>
        </Stack>
        <Button mt={5}>أعرف المزيد</Button>
      </Box>
    </Center>
  );
}
