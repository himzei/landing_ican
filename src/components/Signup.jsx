import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import ButtonSlide from "../components/ButtonSlide";
import SocialLogin from "../components/SocialLogin";

export default function Signup() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HStack w="full" justifyContent={"center"} h={"100vh"} bg="gray.100">
      <VStack w="md" bg="white" p="4" rounded="xl" spacing={6}>
        <Box w="full" h="100px" position="relative">
          <VStack
            justifyContent={"center"}
            alignItems={"center"}
            h="full"
            spacing="0"
          >
            <Text fontSize={24} fontWeight={900} color="gray.500">
              회원가입
            </Text>
            <Text fontSize="16" color="gray.500">
              Signup to your account
            </Text>
          </VStack>
        </Box>
        <VStack w="full" spacing={3}>
          <InputGroup>
            <InputLeftElement
              children={
                <Box color={"gray.400"}>
                  <FaUser />
                </Box>
              }
            />
            <Input type="text" variant={"filled"} placeholder="아이디" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              children={
                <Box color={"gray.400"}>
                  <MdEmail />
                </Box>
              }
            />
            <Input type="email" variant={"filled"} placeholder="이메일" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              children={
                <Box color={"gray.400"}>
                  <FaLock />
                </Box>
              }
            />
            <Input type="password" variant={"filled"} placeholder="비밀번호" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement children={<Box color={"gray.400"}></Box>} />
            <Input
              type="password"
              variant={"filled"}
              placeholder="비밀번호 확인"
            />
          </InputGroup>
          <Box w="full">
            <ButtonSlide text="회원가입" buttonFontSize="16" />
          </Box>
        </VStack>
        <Box w="full" h="1px" bg="gray.100" position="relative">
          <Text
            bg="white"
            px="4"
            position="absolute"
            left="50%"
            fontSize="12"
            color="gray.500"
            transform="translate(-50%, -50%)"
          >
            or
          </Text>
        </Box>
        <SocialLogin />
      </VStack>
    </HStack>
  );
}
