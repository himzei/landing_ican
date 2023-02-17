import { VStack, Grid, Text, HStack, GridItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <VStack w="full" justifyContent={"center"} boxShadow={"sm"} bg="gray.300">
      <HStack
        justifyContent={"center"}
        w="full"
        borderTop="1px"
        borderBottom="1px"
        borderColor="gray.400"
        bg="gray.200"
      >
        <Grid
          w="7xl"
          templateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
        >
          <HStack bg="gray.200" justifyContent={"center"} w="full" py="2">
            <Text>개인정보처리방침</Text>
          </HStack>
          <HStack bg="gray.200" justifyContent={"center"} w="full" py="2">
            <Text>서비스이용약관</Text>
          </HStack>
          <HStack bg="gray.200" justifyContent={"center"} w="full" py="2">
            <Text>업체소개</Text>
          </HStack>
          <HStack bg="gray.200" justifyContent={"center"} w="full" py="2">
            <Text>공지사항</Text>
          </HStack>
          <HStack bg="gray.200" justifyContent={"center"} w="full" py="2">
            <Text>고객센터</Text>
          </HStack>
          <HStack bg="gray.200" justifyContent={"center"} w="full" py="2">
            <Text>패밀리사이트</Text>
          </HStack>
        </Grid>
      </HStack>

      <Grid
        rowGap={10}
        w="7xl"
        py="8"
        h="full"
        templateColumns={{
          sm: "repeat(1, 1fr)",
          lg: "3fr 1fr",
        }}
      >
        <GridItem w="full" display={"flex"} justifyContent="center">
          <VStack
            w={{
              sm: "md",
              md: "60%",
              lg: "full",
            }}
            fontSize="14"
            spacing="6"
            h="full"
            alignItems={"center"}
          >
            <Text></Text>
            <VStack w="full" spacing={0} alignItems="flex-start">
              <Text>
                대표 : 조현일 | 대표번호 : 053-242-5454 | 이메일 :
                himzei@gmail.com
              </Text>
              <Text>
                사업자등록번호 : 513ㅡ61ㅡ00074 | 통신판매업신고번호 :
                제2019-대구중구-0436호
              </Text>
              <Text>대구광역시 중구 국채보상로 123길 16, 3층(문화빌딩)</Text>
            </VStack>
            <VStack w="full" spacing={0} alignItems="flex-start">
              <Text>ⓒ ICAN Co., Ltd. All rights reserved.</Text>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem w="full" display={"flex"} justifyContent="center">
          <VStack
            w={{
              sm: "md",
              md: "60%",
              lg: "full",
            }}
            alignItems={{ sm: "flex-start", lg: "flex-end" }}
          >
            <VStack
              alignItems={"flex-end"}
              w="full"
              h="full"
              bg="red.500"
            ></VStack>
            <Text fontWeight={600}>CS Center</Text>
            <Text fontSize="30" fontWeight={600}>
              053-242-5454
            </Text>
            <Text fontSize="14" textAlign={"start"}>
              평일 09:00 - 18:00 | 점심 12:00 - 13:00
              <br /> 토, 일요일 및 공휴일은 쉽니다.
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
}
