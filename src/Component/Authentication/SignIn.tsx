import React from "react";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SimpleCard() {
  const navigate = useNavigate();
  const [currentEmail, setCurrentEmail] = React.useState("");
  const [currentPass, setPass] = React.useState("");
  const [Data, setData] = React.useState("");
  const [userState, setUserState] = React.useState<string>("false");
  const api = "https://63e21e03109336b6cbffdd5b.mockapi.io/lap/signUp";

  // localStorage.setItem("isLogIn", userState);
  const signIn = () => {
    const getLoc = localStorage.getItem("pathname")

    axios.get(api).then((usersList) => {
      for (let i = 0; i <= api.length; i++) {
        const user = usersList.data[i];
        const storedEmail = user.email;
        const storedPassword = user.password;
        const Id = user.id;
        const userName = user.name;

        if (storedEmail === currentEmail && storedPassword === currentPass) {
          localStorage.setItem("isLogIn", "true");
          localStorage.setItem("userId", Id);
          localStorage.setItem("userName", userName);
          navigate(`${getLoc}`);
          break;
        } else {
          console.log("No account");
        }
      }
      setData(usersList.data);
    });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Text fontSize={"lg"} color={"gray.600"}>
            {/* to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️ */}
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
          <Heading mb={12} fontSize={"3xl"}>تسجيل الدخول إلى حسابك</Heading>
            <FormControl id="email">
              <FormLabel>البريد الالكتروني</FormLabel>
              <Input
                type="email"
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>كلمة المرور</FormLabel>
              <Input
                type="password"
                value={currentPass}
                onChange={(e) => setPass(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                {/* <Checkbox>Remember me</Checkbox> */}
                {/* <Link color={'blue.400'}>Forgot password?</Link> */}
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={signIn}>
                تسجيل الدخول
              </Button>
            </Stack>
            <Text align={'center'}>
                ليس لديك حساب؟ <Link href='/Register' color={'blue.400'}>تسجيل </Link>
                </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
