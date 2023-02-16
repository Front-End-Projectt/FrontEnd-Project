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
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    useDisclosure,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  
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
    const [showAlert , setShowAlert] = useState(false)
    const navigate = useNavigate()
    
    const customAlert = (des:string) => {    
      return (
        showAlert ? (
        <Alert   status="error" bg={'white'} color={'red'} w={'100%'}>
          <AlertDescription fontSize={'sm'}>{des}</AlertDescription>
        </Alert>
        ): (
          <span></span>
        )
      ) 
    }

    

    const signUp = ()=>{
        if(name.length >= 3){
          if (email.length >=4) {
            if (password.length >= 8) {
             axios.post(api,{
                name,
                email,
                password
            }).then(res=>{
                console.log(res)
                localStorage.setItem("id", res.data.id)
                navigate('/signIn')

            })
            axios.get(api)
            }else {  
              setShowAlert(true)
            }
          } else {
            setShowAlert(true)
          } 
        }else{
          setShowAlert(true)
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
            <Text fontSize={'lg'} color={'gray.600'}>
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <Heading fontSize={'3xl'} textAlign={'center'}>
              تسجيل
            </Heading>
              <HStack>
                <Box>

                </Box>
              </HStack>
              <Box width={330}></Box>
              <FormControl  id="firstName" isRequired>
                <FormLabel>الاسم</FormLabel>
                <Input type="text" value={name}  onChange={(e)=> setName(e.target.value)}/>
                {name.length < 3 ? customAlert('الاسم يجب ان يكون اكثر 3 احرف'):null}
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>البريد الالكتروني</FormLabel>
                <Input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                {email.length < 4 ? customAlert('البريد الالكتروني يجب ان يكون اكثر من 4 احرف'):null}
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
                {password.length < 8 ? customAlert('كلمة المرور يجب ان تكون اكثر من 8 احرف'):null}
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