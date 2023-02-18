import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ButtonSlide from "./ButtonSlide";

export default function PortfolioItem({
  imgUrl,
  title,
  period,
  company,
  contents,
}) {
  return (
    <Box w={"full"}>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", lg: "3fr 4fr" }} gap={8}>
        <GridItem w="full" h="340px">
          <Box w="full" h="full" rounded="lg" overflow={"hidden"}>
            <Image
              objectFit={"cover"}
              objectPosition="center"
              w="full"
              h="full"
              src={imgUrl}
            />
          </Box>
        </GridItem>
        <GridItem w="full" py={8} px={4} h="340px">
          <VStack
            w="full"
            h="full"
            alignItems={"flex-start"}
            justifyContent="space-between"
          >
            <VStack spacing={4} alignItems="flex-start">
              <Text fontWeight={600} fontSize="24" px="3">
                {title}
              </Text>
              <HStack
                fontSize="14"
                bg="gray.100"
                px="4"
                py="2"
                w="full"
                justifyContent={"space-between"}
              >
                <Text>개발기간 | {period}</Text>
                <Text>고객사명 | {company}</Text>
              </HStack>
              <Box px="4">
                <Text>{contents}</Text>
              </Box>
            </VStack>
            <HStack>
              <ButtonSlide text="바로가기" />
              <ButtonSlide text="상세보기" />
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
