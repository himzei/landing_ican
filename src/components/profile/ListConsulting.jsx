import { Box, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import { categoryList } from "../home/Service";

export default function ListConsulting({
  name = "이름",
  email = "이메일",
  category = "카테고리",
  createdAt = "날짜",
  status = "진행",
}) {
  return (
    <Grid
      w="5xl"
      h="80px"
      alignItems={"center"}
      templateColumns={"0.5fr 1fr 2.8fr 0.5fr 0.5fr"}
      px="2"
      py="4"
      fontWeight={600}
      fontSize="14"
      align="center"
      color="gray.700"
      cursor="pointer"
      _hover={{ bg: "red.50" }}
    >
      <GridItem>{name}</GridItem>
      <GridItem>{email}</GridItem>
      <GridItem>
        <HStack w="full" flexWrap={"wrap"} justifyContent="center">
          {category?.map((list, index) => (
            <Box
              bg={
                list === categoryList[0]
                  ? "blue.100"
                  : list === categoryList[1]
                  ? "yellow.100"
                  : list === categoryList[2]
                  ? "purple.100"
                  : list === categoryList[3]
                  ? "teal.100"
                  : list === categoryList[4]
                  ? "orange.100"
                  : list === categoryList[5]
                  ? "green.100"
                  : list === categoryList[6]
                  ? "red.100"
                  : "cyan.100"
              }
              px="1"
              key={index}
            >
              <Text>{list}</Text>
            </Box>
          ))}
        </HStack>
      </GridItem>
      <GridItem>{createdAt}</GridItem>
      <GridItem>{status}</GridItem>
    </Grid>
  );
}
