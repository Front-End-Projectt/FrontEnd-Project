import { Flex, Heading, VStack, Text, Button, Stack, Center, Box, Badge, Avatar, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import techArr from './ArrayTeacher';
import StarRating from './StarRating';
import { HStack, Image } from "@chakra-ui/react";
import { FaEnvelope, FaMapPin, FaSuitcase } from "react-icons/fa";
import { render } from "react-dom";
 

function DetailsTeacher() {
  let { id } = useParams();
  let i = Number((id as unknown as number) - 1);

  return (
   <>

     <Flex
    
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={5}
      w={"full"}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
         width={1000}
        shadow="lg"
        rounded="lg"
        bg="#edf3f8"
        _dark={{ bg: "gray.800" }}
        mb={8}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
        
          bg="#edf3f8"
          _dark={{ bg: "#3e3e3e" }}
          style={{
            height:"150px",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          height="100%"
          width="100%"
          borderRadius="lg"
          p={8}
          display="flex"
          alignItems="left"
        >
          <Image
                      src={
            techArr[i].img
          }
            alt="Profile Picture"
            borderRadius="full"
            boxSize="150px"
            shadow="lg"
            border="5px solid"
            mb={-20}
            borderColor="gray.800"
            _dark={{ borderColor: "gray.200" }}
          />
        </Box>
        <Box
          gridColumn="span 8"
          p={8}
          width="full"
          height="full"
          borderRadius="lg"
          textAlign="left"
          mt={10}
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign="right"
          >
            {techArr[i].name}
          </Text>
          <HStack spacing={3} color="gray.800" _dark={{ color: "gray.200" }}>
            <FaSuitcase size={24} />
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: "gray.200" }}
            >
              معلم ظل
            </Text>
          </HStack>
          <HStack spacing={3} color="gray.700" _dark={{ color: "gray.200" }}>
            <FaMapPin size={20} />
            <Text fontSize="lg">{techArr[i].region}</Text>
          </HStack>
          <HStack spacing={3} color="gray.700" _dark={{ color: "gray.200" }}>
            <FaEnvelope size={20} />
            <Text fontSize="lg">{techArr[i].email}</Text>
          </HStack>
        </Box>
      </Flex>
    </Flex>
   </>
   
  )
}

export default DetailsTeacher
