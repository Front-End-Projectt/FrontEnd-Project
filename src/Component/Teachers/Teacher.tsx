import React from 'react'
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
  import teacher from './teacher.json'
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
    "des":"لدي الكفاءة في التعامل مع ألاطفال المصابين بالتوحد بأساليب مختلفة",
    "region":"الرياض"
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
    "region":"الرياض"
    }
    ]
  return (
<>

  { techArr.map((tech)=>(

<Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            tech.img
          }
        //   alt={'Avatar Alt'}
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
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
          
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
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
            Follow
          </Button>
        </Stack>
      </Box>
    </Center> 

  ))}
    {/* <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
        //   alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}

        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Lindsey James
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @lindsey_jam3s
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
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
            Follow
          </Button>
        </Stack>
      </Box>
    </Center> */}
    </>
  )
}

export default Teacher
