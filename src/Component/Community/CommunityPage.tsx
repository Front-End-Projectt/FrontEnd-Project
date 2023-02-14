import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CommunityCard from "./CommunityCard";

function CommunityPage() {
  return (
    <Box m={5} gap={7} padding>
      <Heading as="h2">المجتمع</Heading>
      <Text>
        معلم التوحد هو مشغل مهنة اجتماعية يراقب الطلاب الذين يعانون من اضطراب
        التوحد. يقوم هذا المتخصص بوضع خطط وتطبيقات لتوفير الاجتماعات والتدريب في
        الذهن والتواصل للطلاب الذين يعانون من اضطراب التوحد. يقوم معلمو التوحد
        أيضًا بتوفير دعم للطلاب الذين يواجهون أي مشاكل في مجال التصرف، وبتوفير
        دعم من خلال التدريب الذكي وإعدادهم لمختلف الحياة.
      </Text>
      <Flex
        flexDirection="column"
        gap={3}
        alignItems="center"
        w={"100%"}
        mb="2em">
        <CommunityCard />
        <CommunityCard />
      </Flex>
    </Box>
  );
}

export default CommunityPage;
