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
  } from '@chakra-ui/react';
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const SignOut = () =>{
    localStorage.setItem("isLogIn", "false")
    localStorage.removeItem("id")

  }
  return (


    <Flex alignItems={'center'}>
      <Menu>
        <MenuButton
          py={2}
          transition="all 0.3s"
          _focus={{ boxShadow: 'none' }}>
          <HStack>
            <Avatar
              size={'sm'}
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DffXYqWQgkXThPePQXR7gI6djPT5inDuy9i4x-NT&s'
              }
            />
            <VStack
              display={{ base: 'none', md: 'flex' }}
              alignItems="flex-start"
              spacing="1px"
              ml="2">
              <Text fontSize="sm">Justina Clark</Text>
              <Text fontSize="xs" color="gray.600">
                Admin
              </Text>
            </VStack>
            <Box display={{ base: 'none', md: 'flex' }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue('white', 'gray.900')}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Billing</MenuItem>
          <MenuDivider />
          <MenuItem onClick={()=>SignOut()}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Profile
