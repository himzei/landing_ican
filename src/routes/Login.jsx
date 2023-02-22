import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";
import { useMutation } from "react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { accessToken, refreshToken, usernameLogin } from "../api";

import SocialLogin from "../components/SocialLogin";

export default function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(usernameLogin, {
    onError: (err, context) => {
      console.log(err, context);
    },
    onSuccess: () => {
      toast({
        title: "환영합니다",
        status: "success",
      });
      reset();
      navigate("/");
    },
  });

  const onSubmit = ({ email, password }) => {
    // console.log(email, password);
    mutation.mutate({ email, password });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <VStack w="full" justifyContent={"center"} h={"100vh"} bg="gray.100">
      <VStack w="md" bg="white" p="4" rounded="xl" spacing={6}>
        <Box w="full" h="100px" position="relative">
          <VStack
            justifyContent={"center"}
            alignItems={"center"}
            h="full"
            spacing="0"
          >
            <Text fontSize={24} fontWeight={900} color="gray.500">
              로그인
            </Text>
            <Text fontSize="16" color="gray.500">
              Login to your account
            </Text>
            <HStack spacing="2" fontSize="14" color="gray.500">
              <Text>회원아이디가 없으시다면</Text>
              <Link to="/signup">
                <Text color="red.500">회원가입</Text>
              </Link>
            </HStack>
            <HStack>
              <Button onClick={accessToken}>
                <Text>access</Text>
              </Button>
              <Button onClick={refreshToken}>
                <Text>refresh</Text>
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Form Login */}
        <VStack
          as="form"
          w="full"
          spacing={3}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputGroup>
            <InputLeftElement
              children={
                <Box color={"gray.400"}>
                  <FaUser />
                </Box>
              }
            />
            <Input
              {...register("email", {
                required: "이메일을 입력해 주세요",
              })}
              isInvalid={Boolean(errors.email?.message)}
              type="text"
              variant={"filled"}
              placeholder="이메일"
              value="nadang@gmail.com"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              children={
                <Box color={"gray.400"}>
                  <FaLock />
                </Box>
              }
            />
            <Input
              {...register("password")}
              isInvalid={Boolean(errors.password?.message)}
              type="password"
              variant={"filled"}
              placeholder="비밀번호"
            />
          </InputGroup>
          <Box w="full">
            <Button type="submit" w="full" colorScheme={"red"}>
              로그인
            </Button>
            {/* <ButtonSlide text="로그인" buttonFontSize="16" /> */}
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
      <Link to="/">
        <Button variant="link">
          <Text color="gray.600">홈으로가기</Text>
        </Button>
      </Link>
    </VStack>
  );
}
