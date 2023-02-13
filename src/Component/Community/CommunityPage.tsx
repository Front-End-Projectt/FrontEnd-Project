import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CommunityCard from "./CommunityCard";
import Comment from "./Comment";

function CommunityPage() {
  return (
    <>
      <Heading m={"1em"} mb={"3em"}>
        الـمـجـتـمـع
      </Heading>
      <Flex
        flexDirection="column"
        gap={3}
        alignItems="center"
        w={"100%"}
        mb="2em">
        <CommunityCard />
        <CommunityCard />
      </Flex>
    </>
  );
}

export default CommunityPage;
