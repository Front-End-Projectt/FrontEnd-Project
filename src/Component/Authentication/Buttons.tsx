import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function Buttons() {
  return (
    <Flex gap={2}>
      <Link to="/SignIn">
        <Button>تسجيل الدخول</Button>
      </Link>
      <Link to="/Register">
        <Button>حساب جديد</Button>
      </Link>
    </Flex>
  );
}

export default Buttons;
