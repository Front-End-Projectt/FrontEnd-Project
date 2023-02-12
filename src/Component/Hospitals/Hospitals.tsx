import {
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

function Hospitals() {
  let hospArr = [
    {
      title: 'مستشفى اليمامة',
      description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا ',
      city: 'الرياض',
    },
    {
      title: 'مستشفى الملك سلمان',
      description:
        'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو',
      city: 'الرياض',
    },
    {
      title: 'مستشفى الصحة النفسية',
      description:
        'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو',
      city: 'الاحساء',
    },
    {
      title: 'مستشفى الولادة و الاطفال',
      description:
        'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو',
      city: 'الاحساء',
    },
    {
      title: 'مستشفى الملك سلمان التخصصي',
      description:
        'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو',
      city: 'حائل',
    },
    {
      title: 'مستشفى الملك خالد',
      description:
        'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو',
      city: 'حائل',
    },
  ];
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
      <Text fontSize={'xl'}>
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
        <SimpleGrid columns={{base:1 , lg: 2 , xl:3 }} justifyContent={'center'} spacing={10} >
          {arr.map((value) => (
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              flexDirection={'column'}
              maxW={'445px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}
            >
              <Heading mb={5}>{value.title}</Heading>
              <Stack>
                <Text color={'gray.500'}>{value.description}</Text>
              </Stack>
              <Flex
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
              >
                <Button mt={5}>أعرف المزيد</Button>
                <Text>المدينة: {value.city}</Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Hospitals;
