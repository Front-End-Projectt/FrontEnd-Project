import { Box, Heading, Select, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function Hospitals() {
  const [city, setCity] = useState("");
  return (
    <Box m={5}>
      <Heading mb={2}>المستشفيات</Heading>
      <Text fontSize={"xl"}>
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
        أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم
        أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت
        أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
        ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا
        باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت
      </Text>
      <Select
        pr={3}
        placeholder="المدينة"
        w={200}
        size={"md"}
        m={5}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="الرياض">الرياض</option>
        <option value="جدة">جدة</option>
        <option value="الدمام">الدمام</option>
      </Select>
      <SimpleGrid columns={3} spacing={10}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Box>
  );
}

export default Hospitals;
