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
        المستشفى هو وسيلة للرعاية الصحية الذاتية التي توفر خدمات الرعاية الصحية
        الأساسية والآثار التتبعية للحالات الصحية على المستويات المختلفة. ويقدم
        المستشفى خدمات طبية، علاجية، صحية راجعة وأخرى كخدمات مرافقة (استقبال
        الزوار، ووظائف الاستخدام المتوازن وخدمات الخلوص) لدعم العلاج الطبي.وتشمل
        الخدمات الطبية التي يقدمها المستشفى العلاج باستخدام الادوية والعلاج
        الصحي، وتكوين الشخص ونمو القدرات، والبحث عن الأمراض المزمنة وعلاجها، و
        غيرها من الخدمات.
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
          justifyContent={'center'}
          spacing={10}
        >
          {arr.map((value) => (
            <Box
              key={value.title}
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
              <Heading fontSize={'3xl'} mb={5}>{value.title}</Heading>
              <Stack>
                <Text
                  overflow={'hidden'}
                  whiteSpace={'nowrap'}
                  textOverflow={'ellipsis'}
                  color={'gray.500'}
                >
                  {value.description}
                </Text>
              </Stack>
              <Flex
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  fontWeight={'400'}
                >
                  #{value.city}
                </Badge>
                <Button
                  _hover={{
                    backgroundColor: 'rgba(0, 135, 85, 0.7)',
                    color: '#ffffff',
                    transition: '150ms',
                  }}
                  variant="outline"
                  mt={5}
                  onClick={() => navigate(`/Hospitals/${value.id}`)}
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

export default Hospitals;
