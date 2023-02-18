import About from "../components/home/About";
import Community from "../components/home/Community";
import Consulting from "../components/home/Consulting";
import MainSlide from "../components/home/MainSlide";
import Portfolio from "../components/home/Portfolio";
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

      {/* 포트폴리오 */}
      <Portfolio />

      {/* Community */}
      <Community />

      {/* 컨설팅 */}
      <Consulting />

      {/* 공백 */}
    </>
  );
}
