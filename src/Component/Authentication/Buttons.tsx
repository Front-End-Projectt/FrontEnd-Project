import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function Buttons() {
  return (
    <Flex gap={2} flexDir={'row'} justifyContent={'center'}>
      <Link to="/SignIn">
        <Button _hover={{backgroundColor:'rgba(0, 135, 85, 0.7)'}}>تسجيل الدخول</Button>
      </Link>
      <Link to="/Register">
        <Button _hover={{backgroundColor:'rgba(0, 135, 85, 0.7)'}}>حساب جديد</Button>
      </Link>
    </Flex>
  );
}

export default Buttons;
