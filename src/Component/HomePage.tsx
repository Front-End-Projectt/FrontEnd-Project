import { Box, SimpleGrid,} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit, FcConferenceCall, FcManager, FcDepartment } from 'react-icons/fc';
import CustomerEvaluation from "./Review/CustomerEvaluation";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps
} from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import {
  chakra,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';





{/************* Statistics ***********/}

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

{/************* End Statistics ***********/}




{/************* Features ***********/}

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}
const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack alignItems={"center"}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
{/************* End Features ***********/}

function HomePage() {
  
  return(
   <>
   
   {/* Header */}
   <Box zIndex={-100} bg={"white"} m={5}  borderRadius={10} p={6}>
   <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          الإهتمام بالتوحد{' '}
          <Text as={'span'} color={'rgba(0, 135, 85, 0.7)'}>
            هو غايتنا
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
        نساعد الذين يعانون من طيف التوحد. نوفر العديد من المصادر التعليمية والاجتماعية التي تساعد الذين يعانون من طيف التوحد في التعامل مع مشكلاتهم. نوفر مجموعة من الأدوات المختلفة التي ترشد مصابي طيف التوحد. بالإضافة إلى ذلك. نقدم أيضا الوصول إلى المزيد من المجتمعات الاجتماعية والتعليمية التي تساعد الذين يعانون من طيف التوحد
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button w={140} 
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'rgba(0, 135, 85, 0.7)'}
            _hover={{ bg: 'rgba(0, 135, 85, 0.9)' }}>
            البدء
          </Button>
          <Button w={140} rounded={'full'} px={6}>
            المزيد
          </Button>
        </Stack>
        <Flex w={'full'}>
  
        </Flex>
      </Stack>
    </Container>
 
    </Box>
{/**********  End **********/}

{/************* Statistics ***********/}
<Box p={{base:2, sm:10, md:10}}  m={5}  mb={5} background={"white"} borderRadius={10}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        ماذا نقدم؟
      </chakra.h1>
<Box p={5} border={'1px'} borderRadius={"50px"}  maxW="7xl" mx={'auto'} m={5} px={{ base: 2, sm: 12, md: 17 }}  boxShadow='md'  rounded='md' >
      <SimpleGrid  columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} pb={10}>
 

        <Flex flexDirection={"column"} alignItems={"center"} justifyContent="center">
          {/* <Icon></Icon> */}
          <Text fontSize={20}>186</Text>
          <Heading as={'span'}
          zIndex={1}
          position={"relative"}
          _after={{
            borderRadius:"15",
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: -1,
            left: 0,
            bg: 'rgba(0, 135, 85, 0.3)',
            zIndex:-1}}
            >
          مركز رعاية
          </Heading>
        </Flex>
        
        <Flex flexDirection={"column"} alignItems={"center"} justifyContent="center" >
          {/* <Icon></Icon> */}
          <Text fontSize={20}>60</Text>
          <Heading as={'span'}
          zIndex={1}
          position={"relative"}
          _after={{
            borderRadius:"15",
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: -1,
            left: 0,
            bg: 'rgba(0, 135, 85, 0.3)',
            zIndex:-1}}
            >
          معلم
          </Heading>
        </Flex>
        
        <Flex flexDirection={"column"} alignItems={"center"} justifyContent="center">
          {/* <Icon></Icon> */}
          <Text fontSize={20}>14</Text>
          <Heading as={'span'}
          zIndex={1}
          position={"relative"}
          _after={{
            borderRadius:"15",
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: -1,
            left: 0,
            bg: 'rgba(0, 135, 85, 0.3)',
            zIndex:-1}}
            >
          مدينة
          </Heading>
        </Flex>

      </SimpleGrid>
    </Box>
    </Box>
{/************* End Statistics ***********/}


{/************* Features ***********/}
<Box p={10} m={5}  mb={5} background={"white"} borderRadius={10}>
<Text mt={10} fontSize={35} align={"center"}  fontWeight={600}
          lineHeight={'110%'}>أهم المميزات
</Text>
<Box m={10} p={4} >
      <SimpleGrid  alignContent={"center"} textAlign={"center"} columns={{ base: 1, md: 3 }} spacing={10}>

        <Feature 
          icon={ <Icon as={FcDepartment} w={10} h={10} />}
          title={'مراكز معتمدة'}
          text={
            'مراكز تدريب معتمده من الجهات المختصة'
          }
        />
        <Feature
          icon={<Icon as={FcManager} w={10} h={10} />}
          title={'معلمين مختصين'}
          text={
            'معلمين ذو كفاءه وخبرات عاليه'
          }
        />
        <Feature
          icon={<Icon  as={FcConferenceCall} w={10} h={10} />}
          title={'المجتمع'}
          text={
            'مجتمع لطرح الأسئلة و الإجابة على التساؤلات'
          }
        />
      </SimpleGrid>
      </Box>
{/******** End *******/}
     </Box>
     <Box m={5} mb={10} background={"white"} borderRadius={10}>
      <Text p={10} fontSize={35} align={"center"} fontWeight={600}
          lineHeight={'110%'}>مراجعاتنا</Text>
      <Box m={12}>
   <CustomerEvaluation/>
      </Box>
     </Box>
   </>
  )
}

export default HomePage;
