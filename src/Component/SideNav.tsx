import React, { ReactNode } from "react";

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
import {
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";

import Diagnosis from "./Diagnosis";
import Register from "./Authentication/Register";

import { FiHome, FiMenu, FiUsers } from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import Buttons from "./Authentication/Buttons";
import Profile from "./Authentication/Profile";

import { BiBuildingHouse } from "react-icons/bi";
import { CiHospital1, CiGlobe } from "react-icons/ci";
import { BsCardText } from "react-icons/bs";

import { Route, Link } from "react-router-dom";
import { ReactJSXElementAttributesProperty } from "@emotion/react/types/jsx-namespace";
import { ValueTarget } from "framer-motion";

interface LinkItemProps {
  name: string;
  path: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "الرئيسية ", icon: FiHome, path: "Home" },
  { name: "المستشفيات ", icon: CiHospital1, path: "Hospitals" },
  { name: "مراكز التدريب", icon: BiBuildingHouse, path: "Diagnosis" },
  { name: "معلمي الظل", icon: FiUsers, path: "Teachers" },
  { name: "بطاقات الطلب", icon: BsCardText, path: "PECS/Categories" },
  { name: "المجتمع", icon: CiGlobe, path: "Community" },
];

export default function SideNav({
  children,
  comp,
}: {
  children: ReactNode;
  comp: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box mr={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderLeft="1px"
      borderLeftColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavItem
          _hover={{
            backgroundColor: "rgba(0, 135, 85, 0.7)",
            color: "#ffffff",
            transition: "150ms",
          }}
          fontFamily="GE SS Unique Bold"
          key={link.name}
          icon={link.icon}
          value={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  value: ValueTarget;
}
// Nav item link
const NavItem = ({ icon, children, value, ...rest }: NavItemProps) => {
  return (
    <Link to={`/${value}`} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}>
        {icon && (
          <Icon
            ml="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
function Greeting() {
  const isLoggedIn = localStorage.isLogIn;
  if (isLoggedIn == "false") {
    return <Buttons />;
  } else {
    return <Profile />;
  }
}
const MobileNav = (
  { onOpen, ...rest }: MobileProps,
  { comp }: { comp: ReactNode }
) => {
  return (
    <Flex
      mr={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      {Greeting()}
    </Flex>
  );
};
