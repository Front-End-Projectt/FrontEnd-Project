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
import axios from 'axios';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import CardsData from './CardsData';

  type Categ = {
    data:{
        img: string,
        title: string,
    }[]
  }



function Cards() {
    const cardDispatch = useDispatch()
    const navigate = useNavigate();


    const addPECS = (i:number)=>{
        // CardsData[i] <Cards/>
        
        const action = {type: addPECS, payload: CardsData[i]}
        cardDispatch(action)
        navigate("/PECS/Categories")
    }

    return (
        <>
            {CardsData.map((e,i) => 

            <Card key={e.title}  maxW='sm' textAlign={"center"} borderRadius={30}  cursor={"pointer"} onClick={()=>addPECS(i)}>
                <CardBody>
                    <Image
                    src= {e.img}
                    alt={`${e.title}`}
                    />
                    <Heading mt='6' size='md'>{e.title}</Heading>
                </CardBody>
            </Card>
    )}
        </>
    );
}
  
export default Cards;