import React from 'react'
import axios from 'axios'
import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

function Comment() {
const [comment, setComment] = React.useState("")
const [data, setData] = React.useState<any[]>([])
const [id, setId] = React.useState<string>('')

  const api = "https://63e750caac3920ad5bdc24a6.mockapi.io/Comment"
  
  // podt data to api
  const PostData = () =>{
  

      axios.post(api,{
        comment

      }).then(res=>{
        console.log(res)
        localStorage.setItem("id", res.data.id)
      })
      axios.get(api)

  }
  // get data from api
  React.useEffect(() => {
    axios.get(api).then(res=>{
      setData(res.data)
    })
  }, [])

  const deletItem = (id: any)=> {
    console.log(id)
    axios.delete(`https://63e750caac3920ad5bdc24a6.mockapi.io/Comment/${id}`).then(res=>{
      setData(data.filter((del)=> del.id !=id))
    })
  }
//   React.useEffect(() => {
//     setId(localStorage.getItem("id"))

//  })

  return (
    <>
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Container
      maxW={'lg'}
      bg={useColorModeValue('white', 'whiteAlpha.100')}
      boxShadow={'xl'}
      rounded={'lg'}
      p={6}
      >
      <Heading
        as={'h2'}
        fontSize={{ base: 'xl', sm: '2xl' }}
        textAlign={'center'}
        mb={5}>
        Subscribe to our Newsletter
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        as={'form'}
        spacing={'12px'}
        >
        <FormControl>
          <Input onChange={e =>{setComment(e.target.value)}}
            variant={'solid'}
            borderWidth={1}
            color={'gray.800'}
            _placeholder={{
              color: 'gray.400',
            }}
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            id={'email'}
            type={'email'}
            required
            placeholder={'Your Email'}
            aria-label={'Your Email'}
          />
        </FormControl>
        <FormControl w={{ base: '100%', md: '40%' }}>
          <Button onClick={PostData}
            w="100%"
           >Post
          </Button>
        </FormControl>
      </Stack>
      <Text
        mt={2}
        textAlign={'center'}>

      </Text>
    </Container>

  </Flex>
  {data.map((item:any)=>(
      <p>{item.comment} <button onClick={()=>{deletItem(item.id)}}>delet</button></p>
    ))}
  </>
  )
}

export default Comment
