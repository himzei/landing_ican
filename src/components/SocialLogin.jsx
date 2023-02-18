import { Box, HStack, Image } from "@chakra-ui/react";
import Google from "../assets/svg/google.svg";
import Kakao from "../assets/svg/kakao.svg";
import Facebook from "../assets/svg/facebook.svg";
import Naver from "../assets/png/naver.png";

export default function SocialLogin() {
  return (
    <HStack w="full" justifyContent={"center"} spacing="5">
      <Box cursor={"pointer"}>
        <Image src={Kakao} w="12" h="12" />
      </Box>
      <Box cursor={"pointer"}>
        <Image src={Google} w="10" h="10" />
      </Box>
      <Box cursor={"pointer"}>
        <Image src={Facebook} w="12" h="12" />
      </Box>
      <Box cursor={"pointer"}>
        <Image src={Naver} w="12" h="12" />
      </Box>
    </HStack>
  );
}
