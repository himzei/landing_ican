import About from "../components/home/About";
import Community from "../components/home/Community";
import Consulting from "../components/home/Consulting";
import MainSlide from "../components/home/MainSlide";
import Portfolio from "../components/home/Portfolio";
import Service from "../components/home/Service";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      {/* 메인 슬라이드 */}
      <MainSlide />

      {/* About */}
      <Element name="test1" className="test1">
        <About />
      </Element>

      {/* Service */}
      <Element name="test2" className="test2">
        <Service />
      </Element>

      {/* 포트폴리오 */}
      <Element name="test3" className="test3">
        <Portfolio />
      </Element>

      {/* Community */}
      <Element name="test4" className="test4">
        <Community />
      </Element>

      {/* 컨설팅 */}
      <Element name="test6" className="test6">
        <Consulting />
      </Element>

      {/* 공백 */}
    </>
  );
}
