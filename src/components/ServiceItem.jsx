import { Box, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function ServiceItem({ SvgIcon, text }) {
  return (
    <GridItem
      w="full"
      bg="white"
      rounded={"md"}
      role="group"
      _hover={{
        bg: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <VStack px="4" pt="10" pb="12" w="full" position="relative" spacing="4">
        <Box rounded="full" bg="gray.100" _groupHover={{ bg: "white" }} p="8">
          <Image src={SvgIcon} w={50} h={50} />
        </Box>
        <Text fontWeight={600} fontSize="22" _groupHover={{ color: "white" }}>
          {text}
        </Text>
        <HStack
          bg="gray.100"
          p="3"
          rounded="lg"
          position="absolute"
          bottom="-16px"
          _groupHover={{ bg: "red.500", color: "white", px: "28px" }}
          cursor="pointer"
        >
          <Text display={"none"} _groupHover={{ display: "block" }}>
            자세히보기
          </Text>
          <HiOutlineArrowNarrowRight />
          <Box _groupHover={{ mr: "-4px" }} />
        </HStack>
      </VStack>
    </GridItem>
  );
}
