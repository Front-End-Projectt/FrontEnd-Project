import React from "react";
import { Box, Flex, Icon, Image, chakra, SimpleGrid } from "@chakra-ui/react";

import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
// import { VscCode } from "react-icons/vsc";

export default function Team() {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2, xl: 2, sm: 1 }}
      justifyContent={"space-between"}
      spacing={10}
      padding={5}
    >
      {/* CARD 1 */}
      <Box
        w="sm"
        mx="auto"
        bg="white"
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex alignItems="center" px={6} py={3} bg="rgba(0, 135, 85, 0.7)">
          <Icon as={BsFillBriefcaseFill} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          مطور برامج
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            ريان الجوير
          </chakra.h1>

          <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
            مطور واجهات المواقع, مصمم UI/UX
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />
            <chakra.h1 px={2} fontSize="sm">
              مطور واجهات المواقع
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              الرياض
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              rayanaljwoair@gmail.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>

      {/* CARD 2 */}

      <Box
        w="sm"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Flex alignItems="center" px={6} py={3} bg="rgba(0, 135, 85, 0.7)">
          <Icon as={BsFillBriefcaseFill} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          مطور برامج
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            عبدالله الدوسري
          </chakra.h1>
          <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
            مطور واجهات المواقع, مصمم UI/UX
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              مطور واجهات المواقع
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
            الرياض
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              dev.abduallah@gmail.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>

      {/* CARD 3 */}

      <Box
        w="sm"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Flex alignItems="center" px={6} py={3} bg="rgba(0, 135, 85, 0.7)">
          <Icon as={BsFillBriefcaseFill} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            مطور برامج
          </chakra.h1>
        </Flex>
        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            خالد الفواز
          </chakra.h1>

          <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
            مطور واجهات المواقع, مصمم UI/UX
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              مطور واجهات المواقع
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              الرياض
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />
            <chakra.h1 px={2} fontSize="sm">
              Khaled@al-fawaz.net
            </chakra.h1>
          </Flex>
        </Box>
      </Box>

      {/* CARD 4 */}

      <Box
        w="sm"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Flex alignItems="center" px={6} py={3} bg="rgba(0, 135, 85, 0.7)">
          <Icon as={BsFillBriefcaseFill} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          مطور برامج
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            عبد العزيز العنزي
          </chakra.h1>

          <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
            مطور واجهات المواقع, مصمم UI/UX
          </chakra.p>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              مطور واجهات المواقع
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              الرياض
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              abdalazez.alrslany@gmail.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
