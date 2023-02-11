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
import { useNavigate } from 'react-router-dom';

  type Categ = {
    data:{
        img: string,
        title: string,
    }[]
  }

const cardData = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/3002/3002611.png",
    title: 'أنا',
  },
  
];


function Cards() {

    const navigate = useNavigate();
    return (
        <>
            {cardData.map((e) => 
    <Card key={e.title}  maxW='sm' textAlign={"center"} borderRadius={30}  cursor={"pointer"} onClick={()=>navigate("/Categories")}>
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