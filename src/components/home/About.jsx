import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import ButtonSlide from "../ButtonSlide";

export default function About() {
  return (
    <HStack w="full" py="32" justifyContent={"center"}>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        w="7xl"
        rowGap={{ sm: "16", lg: "0" }}
      >
        <GridItem w="full" display={"flex"} justifyContent="center">
          <VStack spacing={0}>
            <Text
              fontWeight={900}
              fontSize={{ sm: "320", lg: "480" }}
              my={{ sm: "-20", lg: "-40" }}
              bgImage={
                "url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)"
              }
              backgroundPosition="bottom"
              backgroundSize={"cover"}
              backgroundClip={"text"}
            >
              14
            </Text>
            <Text fontWeight={600} fontSize={20}>
              Years Of Experience With Creative Team
            </Text>
          </VStack>
        </GridItem>
        <GridItem
          h="full"
          display={"flex"}
          alignItems="center"
          px={{ sm: "4", lg: "0" }}
        >
          <VStack
            alignItems={"flex-start"}
            H="full"
            justifyContent={"center"}
            spacing="6"
          >
            <VStack spacing={2} alignItems="flex-start">
              <Text>14년의 노하우와 경험</Text>
              <Text
                fontWeight={900}
                fontSize={48}
                lineHeight={"56px"}
                letterSpacing={-1}
              >
                고객이 원하는 것은
                <br /> 아이캔이 추구하는 방향입니다.
              </Text>
            </VStack>
            <Box borderLeft="4px" borderColor="red.500" px="4" py="2">
              <Text fontWeight={600} fontSize="20">
                아이캔은 수년간의 경험과 노하우로 안정된 행사운영과 고객중심의
                서비스로 진행할 것을 약속드립니다.
              </Text>
            </Box>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Text>
            <ButtonSlide text="빠른견적문의" />
          </VStack>
        </GridItem>
      </Grid>
    </HStack>
  );
}
