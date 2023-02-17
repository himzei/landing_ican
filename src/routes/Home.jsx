import { Box } from "@chakra-ui/react";
import About from "../components/home/About";
import Community from "../components/home/Community";
import Consulting from "../components/home/Consulting";
import MainSlide from "../components/home/MainSlide";
import Service from "../components/home/Service";

export default function Home() {
  return (
    <>
      {/* 메인 슬라이드 */}
      <MainSlide />

      {/* About */}
      <About />

      {/* Service */}
      <Service />

      {/* Community */}
      <Community />

      {/* 컨설팅 */}
      <Consulting />

      {/* 공백 */}
      <Box h="200px" />
    </>
  );
}
