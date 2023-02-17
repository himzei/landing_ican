import { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  useDisclosure,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  DrawerBody,
  Grid,
  DrawerFooter,
  GridItem,
  VStack,
  Text,
} from "@chakra-ui/react";
import Logo from "../assets/png/logo.png";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogin } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { useRef } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        setScroll(true);
      } else if (event.deltaY > 0) {
        setScroll(false);
      }
    });
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <HStack
        w="full"
        justifyContent={"center"}
        h="80px"
        boxShadow={"sm"}
        bg="white"
        position="fixed"
        transform={scroll ? "translateY(0px)" : "translateY(-80px)"}
        transition="0.4s"
        zIndex={999}
      >
        <HStack justifyContent={"space-between"} w="7xl" h="full" px="2">
          <Box h="full" p="4">
            <Image h="full" src={Logo} />
          </Box>
          <HStack spacing={8} transition="0.4s">
            <HStack spacing={5} display={{ base: "none", lg: "block" }}>
              <Button
                variant="ghost"
                _hover={{ color: "red.500" }}
                _focus={{ color: "red.500" }}
              >
                업체소개
              </Button>
              <Button
                variant="ghost"
                _hover={{ color: "red.500" }}
                _focus={{ color: "red.500" }}
              >
                서비스안내
              </Button>
              <Button
                variant="ghost"
                _hover={{ color: "red.500" }}
                _focus={{ color: "red.500" }}
              >
                포트폴리오
              </Button>
              <Button
                variant="ghost"
                _hover={{ color: "red.500" }}
                _focus={{ color: "red.500" }}
              >
                커뮤니티
              </Button>
              <Button
                variant="ghost"
                _hover={{ color: "red.500" }}
                _focus={{ color: "red.500" }}
              >
                고객센터
              </Button>
            </HStack>
            <HStack spacing={5}>
              <Button colorScheme={"red"}>프로젝트 문의 </Button>
              <Box p="2" cursor={"pointer"} ref={btnRef} onClick={onOpen}>
                <AiOutlineMenu size="20px" />
              </Box>
            </HStack>
          </HStack>
        </HStack>
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bgGradient={"linear(to-br, #2e3542, #2e3542)"}>
          <HStack
            w={{
              sm: "lg",
              md: "3xl",
              lg: "5xl",
              xl: "7xl",
            }}
            px="2"
            h="80px"
            color="white"
            margin="auto"
            justifyContent="space-between"
          >
            <Box p="4">
              <Image w="70px" src={Logo} />
            </Box>
            <HStack spacing={4}>
              <Button colorScheme={"red"}>프로젝트 문의 </Button>
              <Box p="2" cursor={"pointer"} onClick={onClose}>
                <AiOutlineClose size="20px" color="white" />
              </Box>
            </HStack>
          </HStack>

          <DrawerBody
            margin="auto auto"
            w={{
              sm: "lg",
              md: "3xl",
              lg: "5xl",
              xl: "7xl",
            }}
          >
            <Grid
              templateColumns={{
                sm: "1fr",
                md: "1fr",
                lg: "3fr 1fr",
              }}
              w="full"
              h="full"
              rowGap={"8"}
            >
              <GridItem w="full" h="80%" margin="auto">
                <VStack
                  h="100%"
                  color="white"
                  alignItems={"flex-start"}
                  justifyContent="space-between"
                  spacing={8}
                >
                  <Text
                    fontSize={{
                      sm: "20px",
                      md: "20px",
                      lg: "48px",
                    }}
                    fontWeight={600}
                  >
                    프로젝트 문의
                  </Text>
                  <Text
                    fontSize={{
                      sm: "20px",
                      md: "20px",
                      lg: "48px",
                    }}
                    fontWeight={600}
                  >
                    프로젝트 문의
                  </Text>
                  <Text
                    fontSize={{
                      sm: "20px",
                      md: "20px",
                      lg: "48px",
                    }}
                    fontWeight={600}
                  >
                    프로젝트 문의
                  </Text>
                  <Text
                    fontSize={{
                      sm: "20px",
                      md: "20px",
                      lg: "48px",
                    }}
                    fontWeight={600}
                  >
                    프로젝트 문의
                  </Text>
                  <Text
                    fontSize={{
                      sm: "20px",
                      md: "20px",
                      lg: "48px",
                    }}
                    fontWeight={600}
                  >
                    프로젝트 문의
                  </Text>
                </VStack>
              </GridItem>
              <GridItem h="80%" w="full" margin="auto">
                <VStack
                  color="white"
                  alignItems={"flex-start"}
                  justifyContent="space-between"
                  h="full"
                >
                  <VStack>
                    <HStack
                      border="1px"
                      borderColor="white"
                      rounded="sm"
                      py="2"
                      px="4"
                      w="200px"
                      justifyContent={"space-between"}
                    >
                      <Text>로그인</Text>
                      <AiOutlineLogin />
                    </HStack>
                    <HStack
                      border="1px"
                      borderColor="white"
                      rounded="sm"
                      py="2"
                      px="4"
                      w="200px"
                      justifyContent={"space-between"}
                    >
                      <Text>회원가입</Text>
                      <FaRegAddressBook />
                    </HStack>
                  </VStack>
                  <VStack
                    display={{ sm: "none", lg: "block" }}
                    spacing={8}
                    w="full"
                    alignItems="flex-start"
                  >
                    <VStack alignItems={"flex-start"}>
                      <Text
                        color="gray.400"
                        textTransform={"uppercase"}
                        fontSize="14"
                      >
                        Address
                      </Text>
                      <Text>
                        대구광역시 중구 국채보상로
                        <br />
                        123길 16, 3층
                      </Text>
                    </VStack>
                    <VStack alignItems={"flex-start"}>
                      <Text
                        color="gray.400"
                        textTransform={"uppercase"}
                        fontSize="14"
                      >
                        email
                      </Text>
                      <Text>himzei@gmail.com</Text>
                    </VStack>
                    <VStack alignItems={"flex-start"}>
                      <Text
                        color="gray.400"
                        textTransform={"uppercase"}
                        fontSize="14"
                      >
                        tel
                      </Text>
                      <Text>053.242.5454</Text>
                    </VStack>
                  </VStack>
                </VStack>
              </GridItem>
            </Grid>
          </DrawerBody>

          <DrawerFooter
            margin="auto"
            w={{
              sm: "lg",
              md: "3xl",
              lg: "5xl",
              xl: "7xl",
            }}
          >
            <Button colorScheme={"red"} mr={3} onClick={onClose}>
              닫기
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}