import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    CardFooter,
    Button,
    ButtonGroup,
    Divider,
  } from '@chakra-ui/react';
import { useState } from 'react';

  type Categ = {
    data:{
        img: string,
        title: string,
    }[]
  }
  const PECSs = [
    {
    img: "https://cdn-icons-png.flaticon.com/512/3002/3002662.png",
    title: 'الضمائر',
  },
];
const maping = PECSs.map((e) => 
  <Card key={e.title}  maxW='sm' textAlign={"center"} borderRadius={30}>
      <CardBody>
          <Image
          src= {e.img}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          />
             <Heading mt='6' size='md'>{e.title}</Heading>
      </CardBody>
  </Card>
          )
  function categories() {

    return (
        <>
            {maping}
        </>
    );
  }
  
  export default categories;