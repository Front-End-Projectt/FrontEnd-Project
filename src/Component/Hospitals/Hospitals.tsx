import {
  Badge,
  Box,
  Button,
  Center,
  Container,
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
import hospArr from './hospitalArray';

function Hospitals() {
  const navigate = useNavigate();

  const [arr, setArr] = useState(hospArr);

  const filter = (city: string) => {
    if (city === '') {
      setArr(hospArr);
    } else {
      setArr(hospArr.filter((e) => e.city === city));
    }
  };

  return (
    <Box p={5}>
      <Box zIndex={-100} bg={'white'} m={5} borderRadius={10}>
        <Container maxW={'5xl'}>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              المستشفيات
            </Heading>
            <Text color={'gray.500'} maxW={'3xl'}>
              المستشفى هو وسيلة للرعاية الصحية الذاتية التي توفر خدمات الرعاية
              الصحية الأساسية والآثار التتبعية للحالات الصحية على المستويات
              المختلفة. ويقدم المستشفى خدمات طبية، علاجية، صحية راجعة وأخرى
              كخدمات مرافقة (استقبال الزوار، ووظائف الاستخدام المتوازن وخدمات
              الخلوص) لدعم العلاج الطبي.وتشمل الخدمات الطبية التي يقدمها
              المستشفى العلاج باستخدام الادوية والعلاج الصحي، وتكوين الشخص ونمو
              القدرات، والبحث عن الأمراض المزمنة وعلاجها، و غيرها من الخدمات.
            </Text>
          </Stack>
        </Container>
      </Box>
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
          pr={30}
          pl={30}
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
              boxShadow={'lg'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}
            >
              <Heading fontSize={{ base: '3xl', md: 'xl' }} mb={5}>
                {value.title}
              </Heading>
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
                  fontSize="sm"
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
