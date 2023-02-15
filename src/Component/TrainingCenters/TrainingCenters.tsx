import {
  Badge,
  Box,
  Button,
  filter,
  Flex,
  Text,
  Heading,
  Select,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import trainArr from './TrainingArray.js';
function TrainingCenters() {
  const navigate = useNavigate();

  const [arr, setArr] = useState<any[]>(trainArr);
  const [city, setCity] = useState('');
  const [type, setType] = useState('');

  const filter = (city?: string, type?: string) => {
    // if (city !== undefined){
    // setCity(city as string)
    // }
    // if (type !== undefined){
    //   setType(type as string)
    //   }
    // cityFilter();
    // typeFilter();
  };

  const cityFilter = (filteredData: object[]): object[] => {
    // console.log(city + 'in city filter');

    if (!city) {
      return filteredData;
    }
    const fillteredCites = trainArr.filter((e) => e.city === city);

    return fillteredCites;
    // console.log(arr);
  };

  const typeFilter = (filteredData: object[]): object[] => {
    // console.log(type + 'in type filter');

    if (!type) {
      return filteredData;
    }
    const fillteredTypes = trainArr.filter((e) => e.type === type);

    return fillteredTypes;
    // console.log(arr);
  };

  const handleCityChange = (event: any) => {
    setCity(event.target.value);
  };

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };

  useEffect(() => {
    let filteredData = cityFilter(trainArr);
    console.log(filteredData);
    filteredData = cityFilter(typeFilter(filteredData));
    setArr(filteredData);
  }, [city, type]);

  console.log(city, type);

  return (
    <Box m={5}>
      <Flex flexDir={'column'} bg={'white'} p={7} borderRadius={10} gap={7}>
        <Heading>مراكز التدريب</Heading>
        <Text fontSize={'lg'}>
          المستشفى هو وسيلة للرعاية الصحية الذاتية التي توفر خدمات الرعاية
          الصحية الأساسية والآثار التتبعية للحالات الصحية على المستويات
          المختلفة. ويقدم المستشفى خدمات طبية، علاجية، صحية راجعة وأخرى كخدمات
          مرافقة (استقبال الزوار، ووظائف الاستخدام المتوازن وخدمات الخلوص) لدعم
          العلاج الطبي.وتشمل الخدمات الطبية التي يقدمها المستشفى العلاج باستخدام
          الادوية والعلاج الصحي، وتكوين الشخص ونمو القدرات، والبحث عن الأمراض
          المزمنة وعلاجها، و غيرها من الخدمات.
        </Text>
      </Flex>
      <Flex flexDir={'row'} justifyContent={'space-evenly'}>
        <Select
          bg={'white'}
          pr={3}
          _hover={{ cursor: 'pointer' }}
          placeholder="المدينة"
          w={200}
          size={'md'}
          m={5}
          onChange={(e) => handleCityChange(e)}
        >
          <option value="الرياض">الرياض</option>
          <option value="الاحساء">الاحساء</option>
          <option value="حائل">حائل</option>
        </Select>

        <Select
          bg={'white'}
          pr={3}
          _hover={{ cursor: 'pointer' }}
          placeholder="النوع"
          w={200}
          size={'md'}
          m={5}
          onChange={(e) => handleTypeChange(e)}
        >
          <option value="مركز">مراكز</option>
          <option value="افراد">افراد</option>
        </Select>
      </Flex>

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
