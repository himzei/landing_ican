import { Box, Image, Text, VStack } from "@chakra-ui/react";
import TypeIt from "typeit-react";
import ButtonSlide from "../ButtonSlide";

export default function MainSlide() {
  return (
    <Box w="full" h="100vh" position="relative">
      <Image
        w="full"
        h="100vh"
        objectFit={"cover"}
        objectPosition="center"
        src="https://images.unsplash.com/photo-1561490497-43bc900ac2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      />
      <Box
        position="absolute"
        w="full"
        h="full"
        top="0"
        left="0"
        // bg="rgba(255, 255, 255, 0.7)"
        bgGradient={
          "linear(to-br, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))"
        }
      />
      <VStack
        position={"absolute"}
        top="45%"
        left="50%"
        transform={"translate(-50%, -50%)"}
        w={{
          sm: "lg",
          md: "3xl",
          lg: "5xl",
          xl: "7xl",
        }}
        margin="0 auto"
        alignItems={"flex-start"}
        spacing="4"
        // display={"flex"}
        // justifyContent="flex-start"
      >
        <VStack spacing={0} w="full" alignItems={"flex-start"} px="8">
          <Text
            w="full"
            fontSize={{
              sm: "30px",
              lg: "60px",
            }}
            fontWeight={900}
          >
            <TypeIt
              getBeforeInit={(instance) => {
                instance.type("박람회 행사 지원").pause(500);
                // .delete(2)
                // .pause(500)
                // .type("출입 통제 키오스크")
                // .pause(500)
                // .pause(500);

                // Remember to return it!
                return instance;
              }}
            />
          </Text>
          <Text
            transform={"translateY(-20px)"}
            fontWeight={900}
            fontSize={{
              sm: "30px",
              lg: "60px",
            }}
            color="red.500"
          >
            아이캔과 함께!
          </Text>
        </VStack>
        <VStack
          alignItems="flex-start"
          px="8"
          w="full"
          spacing={0}
          fontSize={{ sm: "16", lg: "24" }}
          fontWeight={600}
          color="gray.600"
        >
          <Text>QR 전자 출입증으로 빠르고 간편하게 체크인</Text>
          <Text fontWeight={400}>
            인생4컷, 증명사진촬영, 퍼스널컬러, 헤어/메이크업
          </Text>
          <Text fontWeight={400}>행사홍보용 랜딩페이지 제작</Text>
        </VStack>
        <Box />
        <Box px="8">
          <ButtonSlide text="빠른견적문의" />
        </Box>
      </VStack>
    </Box>
  );
}
