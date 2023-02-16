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
        cates: string,
    }[]
  }

  const PECSs = [
    {
    img: "https://cdn-icons-png.flaticon.com/512/3002/3002662.png",
    title: 'الضمائر',
    cates: 'pronouns'
  },
  {
    img:"https://cdn-icons-png.flaticon.com/512/8327/8327590.png",
    title:'الأفعال',
    cates: 'verbs'
  },
  {
    img:"https://cdn-icons-png.flaticon.com/512/1426/1426296.png",
    title:'المشروبات',
    cates: 'drinks'
  },
  {
    img:"https://cdn-icons-png.flaticon.com/512/3300/3300144.png",
    title:'المشاعر',
    cates: 'emotions'
  }
];

function Categories() {
  const navigate = useNavigate();

  const clickCate = (categ: string) => {

    console.log(categ);
    
    localStorage.setItem("cate", categ)
    navigate("/PECS/Cards")
  }

  return (
      <>
          {PECSs.map((e) => 
  <Card key={e.title}  maxW='sm' textAlign={"center"} borderRadius={30}  cursor={"pointer"} onClick={()=>clickCate(e.cates)}>
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
  
  export default Categories;