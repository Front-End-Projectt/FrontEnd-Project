import React from 'react'
import axios from 'axios'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    InputLeftElement,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
interface DataTypse{
    name: string,
    email: string | number
    pass: string | number
}



export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPass] = React.useState("")
    const api = "https://63e21e03109336b6cbffdd5b.mockapi.io/lap/signUp"

    const signUp = ()=>{
        if(name.length >= 3 && email.length >=4 && password.length >= 8){
            axios.post(api,{
                name,
                email,
                password
            }).then(res=>{
                console.log(res)
                localStorage.setItem("id", res.data.id) 
            })
            axios.get(api)
        }else{
            alert("Please inter correct information")
        }
  
    }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              تسجيل
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              {/* to enjoy all of our cool features ✌️ */}
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>

                </Box>
              </HStack>
              <FormControl width={330} id="firstName" isRequired>
                <FormLabel>الاسم</FormLabel>
                <Input type="text" value={name}  onChange={(e)=> setName(e.target.value)}/>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>البريد الالكتروني</FormLabel>
                <Input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>كلمة المرور</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  value={password}  onChange={(e)=> setPass(e.target.value)}/>
                  <InputLeftElement h={'full'}>
                    <Button 
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputLeftElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button onClick={signUp}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                    
                  }}>
                  تسجيل
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                لديك حساب؟ <Link href='/SignIn' color={'blue.400'}>تسجيل دخول</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }