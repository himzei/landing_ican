import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as One } from "../../assets/svg/1.svg";
import { ReactComponent as Two } from "../../assets/svg/2.svg";
import { ReactComponent as Three } from "../../assets/svg/3.svg";
import { ReactComponent as Forth } from "../../assets/svg/4.svg";
import { ReactComponent as Fifth } from "../../assets/svg/5.svg";
import { ReactComponent as Sixth } from "../../assets/svg/6.svg";
import { ReactComponent as Seventh } from "../../assets/svg/7.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Service() {
  return (
    <HStack w="full" bg="gray.100" py="32" justifyContent={"center"}>
      <VStack w="7xl" alignItems={"flex-start"} px={4} spacing="16">
        <VStack alignItems={"flex-start"} spacing="0">
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
          {/* 1번째 */}
          <GridItem
            w="full"
            bg="white"
            rounded={"md"}
            role="group"
            _hover={{
              bg: "rgba(0, 0, 0, 0.8)",
              // backgroundImage:
              //   "url(https://images.unsplash.com/photo-1676289238739-04bfd122bd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
              // backgroundPosition: "center center",
              // backgroundSize: "cover",
            }}
            // transition="0.4s"
          >
            <VStack
              px="4"
              pt="10"
              pb="12"
              w="full"
              position="relative"
              spacing="4"
            >
              <Box
                rounded="full"
                bg="gray.100"
                _groupHover={{ bg: "white" }}
                p="8"
              >
                <One width={50} height={50} />
              </Box>
              <Text
                fontWeight={600}
                fontSize="22"
                _groupHover={{ color: "white" }}
              >
                출입통제 키오스크
              </Text>
              <HStack
                bg="gray.100"
                p="3"
                rounded="lg"
                position="absolute"
                bottom="-16px"
                _groupHover={{ bg: "red.500", color: "white", px: "28px" }}
                cursor="pointer"
              >
                <Text display={"none"} _groupHover={{ display: "block" }}>
                  자세히보기
                </Text>
                <HiOutlineArrowNarrowRight />
                <Box _groupHover={{ mr: "-4px" }} />
              </HStack>
            </VStack>
          </GridItem>

          {/* 2번째 */}
          <GridItem
            w="full"
            bg="white"
            rounded={"md"}
            role="group"
            _hover={{
              bg: "rgba(0, 0, 0, 0.8)",
              // backgroundImage:
              //   "url(https://images.unsplash.com/photo-1676289238739-04bfd122bd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
              // backgroundPosition: "center center",
              // backgroundSize: "cover",
            }}
            // transition="0.4s"
          >
            <VStack
              px="4"
              pt="10"
              pb="12"
              w="full"
              position="relative"
              spacing="4"
            >
              <Box
                rounded="full"
                bg="gray.100"
                _groupHover={{ bg: "white" }}
                p="8"
              >
                <Two width={50} height={50} />
              </Box>
              <Text
                fontWeight={600}
                fontSize="22"
                _groupHover={{ color: "white" }}
              >
                랜딩페이지 제작
              </Text>
              <HStack
                bg="gray.100"
                p="3"
                rounded="lg"
                position="absolute"
                bottom="-16px"
                _groupHover={{ bg: "red.500", color: "white", px: "28px" }}
                cursor="pointer"
              >
                <Text display={"none"} _groupHover={{ display: "block" }}>
                  자세히보기
                </Text>
                <HiOutlineArrowNarrowRight />
                <Box _groupHover={{ mr: "-4px" }} />
              </HStack>
            </VStack>
          </GridItem>

          {/* 3번째 */}
          <GridItem
            w="full"
            bg="white"
            rounded={"md"}
            role="group"
            _hover={{
              bg: "rgba(0, 0, 0, 0.8)",
              // backgroundImage:
              //   "url(https://images.unsplash.com/photo-1676289238739-04bfd122bd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
              // backgroundPosition: "center center",
              // backgroundSize: "cover",
            }}
            // transition="0.4s"
          >
            <VStack
              px="4"
              pt="10"
              pb="12"
              w="full"
              position="relative"
              spacing="4"
            >
              <Box
                rounded="full"
                bg="gray.100"
                _groupHover={{ bg: "white" }}
                p="8"
              >
                <Three width={50} height={50} />
              </Box>
              <Text
                fontWeight={600}
                fontSize="22"
                _groupHover={{ color: "white" }}
              >
                인생4컷 촬영장비
              </Text>
              <HStack
                bg="gray.100"
                p="3"
                rounded="lg"
                position="absolute"
                bottom="-16px"
                _groupHover={{ bg: "red.500", color: "white", px: "28px" }}
                cursor="pointer"
              >
                <Text display={"none"} _groupHover={{ display: "block" }}>
                  자세히보기
                </Text>
                <HiOutlineArrowNarrowRight />
                <Box _groupHover={{ mr: "-4px" }} />
              </HStack>
            </VStack>
          </GridItem>

          {/* 4번째 */}
          <GridItem
            w="full"
            bg="white"
            rounded={"md"}
            role="group"
            _hover={{
              bg: "rgba(0, 0, 0, 0.8)",
              // backgroundImage:
              //   "url(https://images.unsplash.com/photo-1676289238739-04bfd122bd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
              // backgroundPosition: "center center",
              // backgroundSize: "cover",
            }}
            // transition="0.4s"
          >
            <VStack
              px="4"
              pt="10"
              pb="12"
              w="full"
              position="relative"
              spacing="4"
            >
              <Box
                rounded="full"
                bg="gray.100"
                _groupHover={{ bg: "white" }}
                p="8"
              >
                <Forth width={50} height={50} />
              </Box>
              <Text
                fontWeight={600}
                fontSize="22"
                _groupHover={{ color: "white" }}
              >
                만족도조사 어플리케이션
              </Text>
              <HStack
                bg="gray.100"
                p="3"
                rounded="lg"
                position="absolute"
                bottom="-16px"
                _groupHover={{ bg: "red.500", color: "white", px: "28px" }}
                cursor="pointer"
              >
                <Text display={"none"} _groupHover={{ display: "block" }}>
                  자세히보기
                </Text>
                <HiOutlineArrowNarrowRight />
                <Box _groupHover={{ mr: "-4px" }} />
              </HStack>
            </VStack>
          </GridItem>

          {/* 5번째 */}
          <GridItem
            w="full"
            bg="white"
            rounded={"md"}
            role="group"
            _hover={{
              bg: "rgba(0, 0, 0, 0.8)",
              // backgroundImage:
              //   "url(https://images.unsplash.com/photo-1676289238739-04bfd122bd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
              // backgroundPosition: "center center",
              // backgroundSize: "cover",
            }}
            // transition="0.4s"
          >
            <VStack
              px="4"
              pt="10"
              pb="12"
              w="full"
              position="relative"
              spacing="4"
            >
              <Box
                rounded="full"
                bg="gray.100"
                _groupHover={{ bg: "white" }}
                p="8"
              >
                <Fifth width={50} height={50} />
              </Box>
              <Text
                fontWeight={600}
                fontSize="22"
                _groupHover={{ color: "white" }}
              >
                취업 이력서사진
              </Text>
              <HStack
                bg="gray.100"
                p="3"
                rounded="lg"
                position="absolute"
                bottom="-16px"
                _groupHover={{ bg: "red.500", color: "white", px: "28px" }}
                cursor="pointer"
              >
                <Text display={"none"} _groupHover={{ display: "block" }}>
                  자세히보기
                </Text>
                <HiOutlineArrowNarrowRight />
                <Box _groupHover={{ mr: "-4px" }} />
              </HStack>
            </VStack>
          </GridItem>

          {/* 6번째 */}
          <GridItem
            w="full"
            bg="white"
            rounded={"md"}
            role="group"
            _hover={{
              bg: "rgba(0, 0, 0, 0.8)",
              // backgroundImage:
              //   "url(https://images.unsplash.com/photo-1676289238739-04bfd122bd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
              // backgroundPosition: "center center",
              // backgroundSize: "cover",
            }}
            // transition="0.4s"
          >
            <VStack
              px="4"
              pt="10"
              pb="12"
              w="full"
              position="relative"
              spacing="4"
            >
              <Box
                rounded="full"
                bg="gray.100"
                _groupHover={{ bg: "white" }}
                p="8"
              >
                <Sixth width={50} height={50} />
              </Box>
              <Text
                fontWeight={600}
                fontSize="22"
                _groupHover={{ color: "white" }}
              >
                헤어/메이크업
              </Text>
              <HStack
                bg="gray.100"
                p="3"
                rounded="lg"
                position="absolute"
                bottom="-16px"
                _groupHover={{ bg: "red.500", color: "white", px: "28px" }}
                cursor="pointer"
              >
                <Text display={"none"} _groupHover={{ display: "block" }}>
                  자세히보기
                </Text>
                <HiOutlineArrowNarrowRight />
                <Box _groupHover={{ mr: "-4px" }} />
              </HStack>
            </VStack>
          </GridItem>

          {/* 7번째 */}
          <GridItem
            w="full"
            bg="white"
            rounded={"md"}
            role="group"
            _hover={{
              bg: "rgba(0, 0, 0, 0.8)",
              // backgroundImage:
              //   "url(https://images.unsplash.com/photo-1676289238739-04bfd122bd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
              // backgroundPosition: "center center",
              // backgroundSize: "cover",
            }}
            // transition="0.4s"
          >
            <VStack
              px="4"
              pt="10"
              pb="12"
              w="full"
              position="relative"
              spacing="4"
            >
              <Box
                rounded="full"
                bg="gray.100"
                _groupHover={{ bg: "white" }}
                p="8"
              >
                <Seventh width={50} height={50} />
              </Box>
              <Text
                fontWeight={600}
                fontSize="22"
                _groupHover={{ color: "white" }}
              >
                퍼스널컬러 진단
              </Text>
              <HStack
                bg="gray.100"
                p="3"
                rounded="lg"
                position="absolute"
                bottom="-16px"
                _groupHover={{ bg: "red.500", color: "white", px: "28px" }}
                cursor="pointer"
              >
                <Text display={"none"} _groupHover={{ display: "block" }}>
                  자세히보기
                </Text>
                <HiOutlineArrowNarrowRight />
                <Box _groupHover={{ mr: "-4px" }} />
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </HStack>
  );
}
