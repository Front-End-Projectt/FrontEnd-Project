import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Button,
  Avatar,
  Badge,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import {  useParams } from 'react-router-dom';
import {  FaMapPin  } from 'react-icons/fa';
import hospArr from './hospitalArray.js';

function HospitalsDetails() {
  let { id } = useParams();
  let i = Number((id as unknown as number) - 1);

  return (
    <><Box p={5}>
      <Flex
        flexDirection={{base:'column' , lg:'row'}}
        justifyContent={'space-around'}
        p={8}
        bg={'white'}
        gap={{base:10 , lg:0}}
        width="full"
        height="full"
        borderRadius="lg"
        textAlign="left"
      >
        
        <VStack w={{lg:'50%' , base:'100%'}} >
          <Box>
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: 'white' }}
              textAlign="right"
            >
              {hospArr[i].title}
            </Text>

            <HStack
              spacing={3}
              color="gray.800"
              _dark={{ color: 'gray.200' }}
            ></HStack>
            <HStack spacing={3} color="gray.700" _dark={{ color: 'gray.200' }}>
              <FaMapPin size={20} />
              <Text fontSize="lg">{hospArr[i].city}</Text>
            </HStack>
            <Text mt={5} textAlign={'right'} fontSize={'xl'}>
              {hospArr[i].description}
            </Text>
          </Box>
        </VStack>
        <VStack w={{lg:'30%', base:'100%'}} h={'400px'} >
          <iframe
            src={hospArr[i].mapUrl}
            className={'frame'}
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
          <Text>موقع {hospArr[i].title}</Text>
        </VStack>
      </Flex>
      <Box
        rounded="lg"
        bg="#edf3f8"
        _dark={{ bg: 'gray.800' }}
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDirection={'row'} justifyContent={'center'} wrap={'wrap'}  py={6} key={i} >
        {hospArr[i].doctors.map((value , i) => (
        <Box 
          key={i}
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'xl'}
          rounded={'lg'}
          m={3}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              value.imgUrl
            }
            mb={4}
            pos={'relative'}
  
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {value.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {value.jobTitle}
          </Text>          
        </Box>
        ))}
        </Flex>
        
      </Box>
      </Box>
    </>
  );
}

export default HospitalsDetails;
