import About from "../components/home/About";
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
    </>
  );
}
