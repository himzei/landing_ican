import { Box, VStack } from "@chakra-ui/react";
import PortfolioItem from "../PortfolioItem";

export default function Portfolio() {
  return (
    <VStack w="full" alignItems={"center"} py="32">
      <VStack w="7xl" alignItems={"flex-start"} spacing="8">
        <PortfolioItem
          imgUrl="https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          title="출입통제 서비스"
          period="2023.1.30~2023.2.1"
          company="주식회사 네이버"
          contents="주식회사 날라에서 의뢰해주신 물류대행 업체 소개 원페이지 사이트입니다. 본 페이지의 최종 목표는 물류대행 서비스 문의입니다. 원페이지 사이트는 간결하면서도 깔끔하게 의도하는 바를 고객에게 분명히 전달할 수 있어야 합니다. 스크롤을 따라 움직이는 트럭 인터랙션 효과가 특징입니다."
        />
        <Box w="full" h="1px" bg="gray.100" />
        <PortfolioItem
          imgUrl="https://images.unsplash.com/photo-1670272499188-79fe22656f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          title="랜딩페이지 제작서비스"
          period="2023.1.30~2023.2.1"
          company="주식회사 네이버"
          contents="안전도어 시공사 우즈에어 안전도어 업체소개 반응형 홈페이지입니다. 메인페이지 포함 총 17페이지로 구성되었으며, 회사소개, 연혁, 제품소개, 게시판, 고객문의 등 다양한 기능들이 포함되어 있습니다."
        />
        <Box w="full" h="1px" bg="gray.100" />
        <PortfolioItem
          imgUrl="https://images.unsplash.com/photo-1674574124792-3be232f1957f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          title="랜딩페이지 제작서비스"
          period="2023.1.30~2023.2.1"
          company="주식회사 네이버"
          contents="안전도어 시공사 우즈에어 안전도어 업체소개 반응형 홈페이지입니다. 메인페이지 포함 총 17페이지로 구성되었으며, 회사소개, 연혁, 제품소개, 게시판, 고객문의 등 다양한 기능들이 포함되어 있습니다."
        />
      </VStack>
    </VStack>
  );
}
