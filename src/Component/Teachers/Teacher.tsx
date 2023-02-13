import React from 'react'
import { Select, SimpleGrid } from '@chakra-ui/react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  import axios from 'axios';

function Teacher() {
  let techArr =[
    {
    "img":  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DffXYqWQgkXThPePQXR7gI6djPT5inDuy9i4x-NT&s',
    "name": "احمد",
    "des":"لدي الكفاءة في التعامل مع ألاطفال المصابين بالتوحد بأساليب مختلفة",
    "region":"الرياض"
    },
    {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DffXYqWQgkXThPePQXR7gI6djPT5inDuy9i4x-NT&s",
    "name": "ساره",
    "des":"لدي الكفاءة في التعامل مع الأطفال المصابين بالتوحد بأساليب مختلفة",
    "region":"الجبيل"
    },
    {
    "img":  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DffXYqWQgkXThPePQXR7gI6djPT5inDuy9i4x-NT&s',
    "name": "سالم",
    "des":"لدي الكفاءة في التعامل مع الأطفال المصابين بالتوحد بأساليب مختلفة",
    "region":"الدمام"
    },
    {
    "img":  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DffXYqWQgkXThPePQXR7gI6djPT5inDuy9i4x-NT&s',
    "name": "فهد",
    "des":"لدي الكفاءة في التعامل مع الأطفال المصابين بالتوحد بأساليب مختلفة",
    "region":"القصيم"
    },
    {
    "img":  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DffXYqWQgkXThPePQXR7gI6djPT5inDuy9i4x-NT&s',
    "name": "خالد",
    "des":"لدي الكفاءة في التعامل مع ألاطفال المصابين بالتوحد بأساليب مختلفة",
    "region":"الرياض"
    },
    {
    "img":  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DffXYqWQgkXThPePQXR7gI6djPT5inDuy9i4x-NT&s',
    "name": "نوره",
    "des":"لدي الكفاءة في التعامل مع ألاطفال المصابين بالتوحد بأساليب مختلفة",
    "region":"المجمعة"
    }
    ]
    const [arr, setArr] = React.useState(techArr);
    const filter = (region: string) => {
        if (region === 'الرياض') {
          setArr(techArr.filter((e) => e.region === 'الرياض'));
        } else if (region === 'المجمعة') {
          setArr(techArr.filter((e) => e.region === 'المجمعة'));
        } else if (region === 'القصيم') {
          setArr(techArr.filter((e) => e.region === 'القصيم'));
        } else if (region === 'الجبيل') {
          setArr(techArr.filter((e) => e.region === 'الجبيل'));
        } else if (region === 'الدمام') {
          setArr(techArr.filter((e) => e.region === 'الدمام'));
        }  else {
          setArr(techArr);
        }
      };
  return (
<>
<Text>معلم التوحد هو مشغل مهنة اجتماعية يراقب الطلاب الذين يعانون من اضطراب التوحد. يقوم هذا المتخصص بوضع خطط وتطبيقات لتوفير الاجتماعات والتدريب في الذهن والتواصل للطلاب الذين يعانون من اضطراب التوحد. يقوم معلمو التوحد أيضًا بتوفير دعم للطلاب الذين يواجهون أي مشاكل في مجال التصرف، وبتوفير دعم من خلال التدريب الذكي وإعدادهم لمختلف الحياة.</Text>
<Select
        bg={'white'}
        pr={3}
        _hover={{cursor: 'pointer'}}
        placeholder="المدينة"
        w={200}
        size={'md'}
        m={5}
        onChange={(e) => filter(e.target.value)}
      >
        <option value="الرياض">الرياض</option>
        <option value="المجمعة">المجمعة</option>
        <option value="القصيم">القصيم</option>
        <option value="الدمام">الدمام</option>
        <option value="الجبيل">الجبيل</option>
      </Select>
<SimpleGrid columns={{base:1,md:3,sm:2}}  spacing={10}>
  { arr.map((tech, i)=>(

<Center py={6} key={i}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        m={3}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            tech.img
          }
          mb={4}
          pos={'relative'}

        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {tech.name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {tech.des}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #{tech.region}
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            المزيد
          </Button>
        </Stack>
      </Box>
    </Center> 
    
   ))}
  </SimpleGrid>
    </>
  )
}

export default Teacher
