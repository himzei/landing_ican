import { VStack, Box, Image, Text } from "@chakra-ui/react";

export default function Consulting() {
  return (
    <VStack w="full" alignItems={"center"}>
      <Box w="7xl" h="300px" position="relative">
        <Image
          w="full"
          h="300px"
          objectFit={"cover"}
          objectPosition="center"
          src="https://images.unsplash.com/photo-1526157485112-5fb340a60461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <Box
          position="absolute"
          w="full"
          h="full"
          top="0"
          left="0"
          bg="rgba(0, 0, 0, 0.7)"
        />
        <VStack
          spacing="0"
          position="absolute"
          w="full"
          top="50%"
          left="50%"
          transform={"translate(-50%, -50%)"}
          color="white"
        >
          <Text fontSize="20">무료상담은 언제나 열려있습니다.</Text>
          <Text fontSize={40} fontWeight={900}>
            무엇이든 물어보세요
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
}
