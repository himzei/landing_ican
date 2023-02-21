import {
  Avatar,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import ListConsulting from "../components/profile/ListConsulting";
import { useQuery } from "react-query";
import { consultingList } from "../api";
import { dateFormat, nameFormat } from "../lib/\bchangeFormat";

export default function Profile() {
  const { data, isLoading } = useQuery(["consulting"], consultingList);
  console.log(isLoading, data);
  return (
    <VStack w="full" justifyContent={"center"} py="32" spacing="8">
      <VStack
        w="md"
        spacing={8}
        border="1px"
        p="8"
        rounded="xl"
        borderColor="gray.400"
        bg="white"
      >
        <Box w="full">
          <Avatar size="lg" />
        </Box>
        <FormControl>
          <FormLabel>이름</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsFillPersonFill color="lightgray" />}
            />

            <Input
              type="text"
              placeholder="이름 또는 회사명을 입력해 주세요."
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>연락처</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiFillPhone color="lightgray" />}
            />
            <Input
              name="tel"
              type="tel"
              placeholder="휴대폰 번호를 '-' 없이 입력해 주세요."
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>이메일</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiTwotoneMail color="lightgray" />}
            />
            <Input type="email" placeholder="이메일 주소를 입력해 주세요." />
          </InputGroup>
        </FormControl>
        <Box w="full">
          <Button colorScheme="red">수정하기</Button>
        </Box>
      </VStack>
      <VStack>
        <Grid
          w="5xl"
          templateColumns={"0.5fr 1fr 2.8fr 0.5fr 0.5fr"}
          bg="gray.50"
          p="2"
          fontWeight={600}
          fontSize="14"
          align="center"
          color="gray.700"
          borderTop="1px"
          borderBottom="1px"
          borderColor="gray.300"
        >
          <GridItem>이름</GridItem>
          <GridItem>이메일</GridItem>
          <GridItem>문의유형</GridItem>
          <GridItem>날짜</GridItem>
          <GridItem>진행상태</GridItem>
        </Grid>

        {data?.consulting.map((list) => (
          <ListConsulting
            key={list._id}
            name={nameFormat(list.name)}
            email={list.email}
            category={list.category}
            createdAt={dateFormat(list.createdAt)}
          />
        ))}
      </VStack>
    </VStack>
  );
}
