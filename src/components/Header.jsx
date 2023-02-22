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
  Avatar,
  useToast,
} from "@chakra-ui/react";
import Logo from "../assets/png/logo.png";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogin,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { RiMessage2Fill } from "react-icons/ri";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import useUser from "../lib/useUser";
import { logout, refreshToken } from "../api";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userLoading, isLoggedIn, user } = useUser();
  console.log(userLoading, isLoggedIn, user);
  const menuList = [
    { name: "업체소개", link: "test1", link2: "/#1" },
    { name: "서비스안내", link: "test2", link2: "/#2" },
    { name: "포트폴리오", link: "test3", link2: "/#3" },
    { name: "커뮤니티", link: "test4", link2: "/#4" },
    { name: "고객센터", link: "test6", link2: "/#6" },
  ];
  const [scroll, setScroll] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        setScroll(true);
      } else if (event.deltaY > 0) {
        setScroll(false);
      }
    });
  });

  const btnRef = useRef();

  const toast = useToast();
  const navigate = useNavigate();

  const onLogout = async () => {
    const toastId = toast({
      title: "로그아웃 중입니다",
      status: "loading",
    });
    const data = await logout();
    console.log(data);
    setTimeout(() => {
      toast.update(toastId, {
        status: "success",
        title: "로그아웃!",
        description: "다음에 또 만나요!",
      });
    }, 5000);
    navigate("/");
    onClose();
  };

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
            <Link to="/">
              <Image h="full" src={Logo} />
            </Link>
          </Box>
          <HStack spacing={8} transition="0.4s">
            <HStack spacing={5} display={{ base: "none", lg: "block" }}>
              {menuList.map((_, i) =>
                pathname === "/" ? (
                  <LinkScroll
                    key={i}
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className={menuList[i].link}
                    to={menuList[i].link}
                  >
                    <Button
                      variant="ghost"
                      _hover={{ color: "red.500" }}
                      _focus={{ color: "red.500" }}
                    >
                      {menuList[i].name}
                    </Button>
                  </LinkScroll>
                ) : (
                  <a href={menuList[i].link2}>
                    <Button
                      variant="ghost"
                      _hover={{ color: "red.500" }}
                      _focus={{ color: "red.500" }}
                    >
                      {menuList[i].name}
                    </Button>
                  </a>
                )
              )}
            </HStack>
            <HStack spacing={5}>
              <Link to="/">
                <Button colorScheme={"red"}>프로젝트 문의 </Button>
              </Link>
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
            <Box p="4" onClick={onClose}>
              <Link to={"/"}>
                <Image w="70px" src={Logo} />
              </Link>
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
                  onClick={onClose}
                >
                  {menuList.map((_, i) =>
                    pathname === "/" ? (
                      <LinkScroll
                        key={i}
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        className={menuList[i].link}
                        to={menuList[i].link}
                        onClick={onClose}
                      >
                        <Text
                          cursor="pointer"
                          fontSize={{
                            sm: "20px",
                            md: "20px",
                            lg: "48px",
                          }}
                          fontWeight={600}
                        >
                          {menuList[i].name}
                        </Text>
                      </LinkScroll>
                    ) : (
                      <a href={menuList[i].link2}>
                        <Text
                          cursor="pointer"
                          fontSize={{
                            sm: "20px",
                            md: "20px",
                            lg: "48px",
                          }}
                          fontWeight={600}
                        >
                          {menuList[i].name}
                        </Text>
                      </a>
                    )
                  )}
                </VStack>
              </GridItem>
              <GridItem h="80%" w="full" margin="auto">
                <VStack
                  color="white"
                  alignItems={"flex-start"}
                  justifyContent="space-between"
                  h="full"
                >
                  {isLoggedIn ? (
                    <VStack w="200px" alignItems={"flex-start"} spacing="4">
                      <HStack spacing={4}>
                        <Link to="/profile">
                          <Avatar
                            cursor={"pointer"}
                            size="md"
                            onClick={onClose}
                          />
                        </Link>
                        <VStack alignItems={"flex-start"} spacing="0">
                          <Text color="gray.300" fontSize="14">
                            Hello~!
                          </Text>
                          <Text color="gray.300" fontSize="14" fontWeight={600}>
                            {user?.username || ""}
                          </Text>
                        </VStack>
                      </HStack>

                      <HStack spacing={2}>
                        <Button p="0" variant={"ghost"}>
                          <GoPerson color="gray" size="20" />
                        </Button>
                        <Button p="0" variant={"ghost"}>
                          <Link to="/chat">
                            <RiMessage2Fill color="gray" size="20" />
                          </Link>
                        </Button>
                        <Button p="0" variant="ghost">
                          <AiFillSetting color="gray" size="20" />
                        </Button>
                        <Button p="0" variant="ghost" onClick={onLogout}>
                          <AiOutlineLogout color="gray" size="20" />
                        </Button>
                      </HStack>
                    </VStack>
                  ) : (
                    <VStack>
                      <Link to="/login">
                        <HStack
                          onClick={onClose}
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
                      </Link>
                      <Link to="/signup">
                        <HStack
                          onClick={onClose}
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
                      </Link>
                    </VStack>
                  )}

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
