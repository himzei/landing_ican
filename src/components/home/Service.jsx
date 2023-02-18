import { Grid, HStack, Text, VStack } from "@chakra-ui/react";
import One from "../../assets/svg/1.svg";
import Two from "../../assets/svg/2.svg";
import Three from "../../assets/svg/3.svg";
import Four from "../../assets/svg/4.svg";
import Five from "../../assets/svg/5.svg";
import Six from "../../assets/svg/6.svg";
import Seven from "../../assets/svg/7.svg";
import Eight from "../../assets/svg/8.svg";
import ServiceItem from "../ServiceItem";

export default function Service() {
  return (
    <HStack w="full" bg="gray.100" py="32" justifyContent={"center"}>
      <VStack w="7xl" alignItems={"flex-start"} px={4} spacing="16">
        <VStack
          alignItems={{ sm: "center", lg: "flex-start" }}
          spacing="0"
          w="full"
        >
          <Text fontSize={20}>이런일을 하고 있어요</Text>
          <Text fontWeight={900} fontSize={52}>
            제공서비스
          </Text>
        </VStack>
        <Grid
          templateColumns={{ sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap="6"
          w="full"
        >
          <ServiceItem text="출입통제 키오스크" SvgIcon={One} />
          <ServiceItem text="랜딩페이지 제작" SvgIcon={Two} />
          <ServiceItem text="인생4컷 촬영장비" SvgIcon={Three} />
          <ServiceItem text="만족도조사 앱" SvgIcon={Four} />
          <ServiceItem text="취업이력서 사진" SvgIcon={Five} />
          <ServiceItem text="헤어/메이크업" SvgIcon={Six} />
          <ServiceItem text="퍼스널컬러 진단" SvgIcon={Seven} />
          <ServiceItem text="3D XR 촬영" SvgIcon={Eight} />
        </Grid>
      </VStack>
    </HStack>
  );
}
