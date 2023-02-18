import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ButtonSlide({ text, linking, buttonFontSize = "14" }) {
  return (
    <Link to={linking}>
      <HStack
        width="100%"
        border="1px"
        _hover={{ borderColor: "transparent" }}
        borderColor="red.300"
        rounded="sm"
        pr="6"
        pl="4"
        py="2"
        role={"group"}
        position="relative"
        cursor={"pointer"}
        boxShadow="sm"
      >
        <Box
          position="absolute"
          w="0"
          h="full"
          top="0"
          left="0"
          bg="red.500"
          transition="0.1s"
          _groupHover={{ width: "100%" }}
        />
        <Text
          w="full"
          align="center"
          color="red.500"
          fontSize={buttonFontSize}
          zIndex={9}
          transition="0.1s"
          _groupHover={{ color: "white" }}
          fontWeight={600}
        >
          {text}
        </Text>
      </HStack>
    </Link>
  );
}
