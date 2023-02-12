import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";

function Buttons() {
  return (
    <Flex>
      <Link href="/SignIn">
        <Button>تسجيل الدخول</Button>{" "}
      </Link>
      <Link href="/Register">
        <Button>حساب جديد</Button>
      </Link>
    </Flex>
  );
}

export default Buttons;
