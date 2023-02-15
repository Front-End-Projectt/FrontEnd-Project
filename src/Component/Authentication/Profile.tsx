import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Profile() {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  const SignOut = () => {
    localStorage.setItem("isLogIn", "false");
    localStorage.removeItem("id");
    navigate("/Home");
  };

  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
          <HStack>
            <Avatar
              size={"sm"}
              src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
              ml="2">
              <Text fontSize="md">{userName}</Text>
            </VStack>
            <Box display={{ base: "none", md: "flex" }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue("white", "gray.900")}
          borderColor={useColorModeValue("gray.200", "gray.700")}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => SignOut()}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Profile;
