import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HospitalsDetails from './HospitalsDetails';
import hospArr from './hospitalArray.js';

function Hospitals() {
  const navigate = useNavigate();

  const [arr, setArr] = useState(hospArr);

  const filter = (city: string) => {
    if (city === 'الرياض') {
      setArr(hospArr.filter((e) => e.city === 'الرياض'));
    } else if (city === 'الاحساء') {
      setArr(hospArr.filter((e) => e.city === 'الاحساء'));
    } else if (city === 'حائل') {
      setArr(hospArr.filter((e) => e.city === 'حائل'));
    } else {
      setArr(hospArr);
    }
  };

  return (
    <Box m={5}>
      <Heading mb={2}>المستشفيات</Heading>
      <Text fontSize={'lg'}>
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
        أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم
        أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت
        أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
        ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا
        باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت
      </Text>
      <Select
        bg={'white'}
        pr={3}
        _hover={{ cursor: 'pointer' }}
        placeholder="المدينة"
        w={200}
        size={'md'}
        m={5}
        onChange={(e) => filter(e.target.value)}
      >
        <option value="الرياض">الرياض</option>
        <option value="الاحساء">الاحساء</option>
        <option value="حائل">حائل</option>
      </Select>
      <Box>
        <SimpleGrid
          columns={{ base: 1, lg: 2, xl: 3 }}
          justifyContent={'space-between'}
          gap={10}
        >
          {arr.map((value , i) => (
            <Box
              key={i}
              display={'flex'}
              justifyContent={'space-between'}
              flexDirection={'column'}
              maxW={'500px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
            >
              <Heading textAlign={'center'} mb={5}>{value.title}</Heading>
              <Stack>
                <Text overflow={'hidden'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} color={'gray.500'}>{value.description}</Text>
              </Stack>
              <Flex
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
              >
                <Button
                  mt={5}
                  onClick={() => navigate(`/Hospitals/${value.id}`)}
                >
                  أعرف المزيد
                </Button>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  fontWeight={'400'}
                >
                  #{value.city}
                </Badge>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Hospitals;
