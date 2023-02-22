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
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { usernameSignUp } from "../api";

export default function Signup() {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(usernameSignUp, {
    onSuccess: () => {
      toast({
        title: "회원가입을 축하합니다.",
        status: "success",
      });
      reset();
      navigate("/login");
    },
  });

  const onSubmit = ({ username, email, password, password2 }) => {
    mutation.mutate({ username, email, password, password2 });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <VStack
      w="full"
      justifyContent={"center"}
      h={"100vh"}
      bg="gray.100"
      spacing={4}
    >
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
            <HStack spacing="2" fontSize="14" color="gray.500">
              <Text>이미 회원이시라면</Text>
              <Link to="/login">
                <Text color="red.500">로그인</Text>
              </Link>
            </HStack>
          </VStack>
        </Box>

        {/* as Form */}
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
              type="text"
              {...register("username", {
                required: "아이디를 입력해주세요",
                minLength: {
                  message: "아이디는 6자 이상 작성하셔야 합니다. ",
                  value: 5,
                },
              })}
              variant={"filled"}
              placeholder="아이디"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              children={
                <Box color={"gray.400"}>
                  <MdEmail />
                </Box>
              }
            />
            <Input
              type="email"
              variant={"filled"}
              placeholder="이메일"
              {...register("email", {
                required: "이메일을 입력해주세요",
              })}
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
              type="password"
              variant={"filled"}
              placeholder="비밀번호"
              {...register("password")}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement children={<Box color={"gray.400"}></Box>} />
            <Input
              type="password"
              variant={"filled"}
              placeholder="비밀번호 확인"
              {...register("password2")}
            />
          </InputGroup>
          {/* <Button type="submit" colorScheme={"red}"} variant="ghost">
            제출하기
          </Button> */}
          <Box w="full">
            <Button
              w="full"
              type="submit"
              colorScheme={"red"}
              variant="outline"
            >
              전송하기
            </Button>
            {/* <ButtonSlide text="회원가입" buttonFontSize="16" type="submit" /> */}
          </Box>
          {errors.errors?.message ? (
            <Text fontSize="14" color="red.500">
              {errors.errors?.message}
            </Text>
          ) : null}
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
