import { Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import hospArr from "./array.js";

function HospitalsDetails() {
  let { id } = useParams();
  let i = Number((id as unknown as number) - 1);

  return (
    <div>
        <Flex flexDirection={"row"} justifyContent={'space-around'} >
          <VStack>
            <Heading>{hospArr[i].title}</Heading>
            <Text>{hospArr[i].description}</Text>
          </VStack>
          <VStack>
            <iframe
              src={hospArr[i].mapUrl}
              className={'frame'}
              width="400"
              height="400"
              loading="lazy"
            ></iframe>
          </VStack>
        </Flex>
    </div>
  );
}

export default HospitalsDetails;
