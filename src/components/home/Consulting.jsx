import {
  VStack,
  Box,
  Image,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  Grid,
  GridItem,
  Checkbox,
  Textarea,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useCheckboxGroup,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import ServiceCategories from "../ServiceCategories";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { handleConsulting } from "../../api.js";

export default function Consulting() {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    watch,
    refetch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checked, setChecked] = useState([]);

  const options = [
    "출입통제 키오스크",
    "랜딩페이지 제작",
    "인생4컷 촬영장비",
    "만족도조사 앱",
    "취업이력서 사진",
    "헤어/메이크업",
    "퍼스널컬러 진단",
    "3D XR 촬영",
  ];

  const { getCheckboxProps } = useCheckboxGroup({
    onChange: setChecked,
  });

  useEffect(() => {
    setChecked([]);
  }, [reset]);

  const mutation = useMutation(handleConsulting, {
    onSuccess: () => {
      toast({
        title: "작성하신 상담신청을 전달하였습니다.",
        status: "success",
      });
      reset();
      refetch();
    },
  });

  const onSubmit = ({ name, tel, email, message }) => {
    mutation.mutate({ name, email, tel, message, category: checked });
  };

  return (
    <VStack w="full" alignItems={"center"} spacing="16" py="32">
      <Box w="7xl" h="300px" position="relative">
        <Image
          w="full"
          h="300px"
          objectFit={"cover"}
          objectPosition="center"
          src="https://images.unsplash.com/photo-1526157485112-5fb340a60461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <Box
          position="absolute"
          w="full"
          h="full"
          top="0"
          left="0"
          bg="rgba(0, 0, 0, 0.7)"
        />
        <VStack
          spacing="0"
          position="absolute"
          w="full"
          top="50%"
          left="50%"
          transform={"translate(-50%, -50%)"}
          color="white"
        >
          <Text fontSize="20">무료상담은 언제나 열려있습니다.</Text>
          <Text fontSize={40} fontWeight={900}>
            무엇이든 물어보세요
          </Text>
        </VStack>
      </Box>
      <VStack as="form" w="md" spacing={8} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel>이름</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsFillPersonFill color="lightgray" />}
            />

            <Input
              type="text"
              {...register("name", {
                required: "이름/회사명은 필수 입력값입니다.",
                minLength: {
                  value: 2,
                  message: "이름/회사명의 최소 입력값은 2자 이상입니다.",
                },
              })}
              placeholder="이름 또는 회사명을 입력해 주세요."
            />
          </InputGroup>
          {errors.name && (
            <Text color="red.500" fontSize="14" fontWeight={600}>
              {errors.name.message}
            </Text>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>연락처</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiFillPhone color="lightgray" />}
            />
            <Input
              name="tel"
              type="tel"
              {...register("tel", {
                required: "연락처는 필수 입력입니다.",
              })}
              placeholder="휴대폰 번호를 '-' 없이 입력해 주세요."
            />
          </InputGroup>
          {errors.tel && (
            <Text color="red.500" fontSize="14" fontWeight={600}>
              {errors.tel.message}
            </Text>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>이메일</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiTwotoneMail color="lightgray" />}
            />
            <Input
              type="email"
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
              placeholder="이메일 주소를 입력해 주세요."
            />
          </InputGroup>
          {errors.email && (
            <Text color="red.500" fontSize="14" fontWeight={600}>
              {errors.email.message}
            </Text>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>서비스유형</FormLabel>

          <Grid templateColumns={"repeat(2, 1fr)"} gap={2} w="full">
            {options.map((value) => {
              const checkbox = getCheckboxProps({ value });
              return (
                <GridItem>
                  <ServiceCategories key={value} {...checkbox}>
                    <Text align={"center"}>{value}</Text>
                  </ServiceCategories>
                </GridItem>
              );
            })}
          </Grid>
        </FormControl>

        <FormControl>
          <FormLabel>문의사항</FormLabel>
          <Textarea
            {...register("message")}
            placeholder="문의사항을 남겨주시면 더 빠른 상담이 가능합니다."
            rows="8"
          />
        </FormControl>
        <HStack
          w="full"
          p="2"
          border="1px"
          borderColor="gray.200"
          justifyContent={"space-between"}
        >
          <Checkbox colorScheme={"red"} {...register("confirm")}>
            <Text fontSize="14">
              개인정보취급방침을 읽었으며, 이에 동의합니다.
            </Text>
          </Checkbox>

          <Button size="sm" onClick={onOpen}>
            <Text fontSize="14">내용보기</Text>
          </Button>
        </HStack>

        <Box w="full">
          <Button
            isDisabled={!watch("confirm")}
            type="submit"
            w="full"
            colorScheme={"red"}
          >
            제출하기
          </Button>
          {/* <ButtonSlide text="제출하기" buttonFontSize="16" /> */}
        </Box>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>개인정보취급방침</ModalHeader>
            <ModalCloseButton />
            <ModalBody w="full">
              <VStack w="full" alignItems="flex-start" spacing={6}>
                <VStack w="full" alignItems="flex-start" spacing="0">
                  <Text fontWeight={600}>1. 개인정보의 수집 및 이용 목적 </Text>
                  <Text>- 개인정보 수집방법 : 홈페이지(견적문의) </Text>
                  <Text>
                    - 견적 안내 · 서비스 설명 · 회사 소식 등의 다양한 정보 및
                    컨텐츠 제공{" "}
                  </Text>
                </VStack>

                <VStack w="full" alignItems="flex-start" spacing="0">
                  <Text fontWeight={600}>2. 수집하는 개인정보 항목 </Text>
                  <Text>- 성함 · 연락처 · 이메일 </Text>
                </VStack>

                <VStack w="full" alignItems="flex-start" spacing="0">
                  <Text fontWeight={600}>3. 개인정보의 보유 및 이용 기간 </Text>
                  <Text>
                    - 고객님의 정보는 개인정보 보호법에 따라 보호됩니다.{" "}
                  </Text>
                  <Text>
                    - 입력해주신 개인정보는 문의 · 상담 목적으로만 사용되며,
                    상담 완료 후 즉시 폐기됩니다.
                  </Text>
                </VStack>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </VStack>
  );
}
