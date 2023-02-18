import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import ButtonSlide from "../ButtonSlide";

export default function Community() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <HStack justifyContent={"center"} py="32" bg="yellow.400">
      <VStack w="7xl" alignItems={"flex-start"} px={4} spacing="16">
        <VStack
          alignItems={{ sm: "center", lg: "flex-start" }}
          spacing="0"
          w="full"
        >
          <Text fontSize={20}>최신소식을 전해 드립니다.</Text>
          <Text fontWeight={900} fontSize={52}>
            커뮤니티
          </Text>
        </VStack>
        <Box w="full">
          <Slider {...settings}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <Box w="400px" cursor="pointer" mr="10">
                  <VStack w="full" role="group" spacing="0">
                    <Box
                      w="400px"
                      h="225px"
                      position="relative"
                      transition="0.4s"
                      overflow={"hidden"}
                    >
                      <Image
                        w="full"
                        h="full"
                        objectFit={"cover"}
                        transition="0.4s"
                        _groupHover={{ transform: "scale(1.1)" }}
                        src="https://images.unsplash.com/photo-1676194141782-8487ce11cb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                      />
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="full"
                        h="full"
                        bgGradient="linear(to-r, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))"
                      />
                    </Box>
                    <VStack
                      w="400px"
                      bg="gray.100"
                      px="4"
                      py="6"
                      alignItems={"flex-start"}
                      spacing="4"
                    >
                      <VStack alignItems={"flex-start"} spacing="0">
                        <Text
                          fontWeight={600}
                          fontSize="20"
                          _groupHover={{ color: "red.500" }}
                        >
                          제목입니다. 안녕하세요 반가워요
                        </Text>
                        <Text fontSize="14">2023-02-17</Text>
                      </VStack>
                      <Text>
                        동해물과 백두산이 마르고 닳도록 하느님이 보우하사
                        우리나라 만세 동해물과 백두산이 마르고 닳도록 하느님이
                        보우하사 하느님이 보우하사
                      </Text>
                      <ButtonSlide text="자세히보기" />
                    </VStack>
                  </VStack>
                </Box>
              ))}
          </Slider>
        </Box>
      </VStack>
    </HStack>
  );
}
