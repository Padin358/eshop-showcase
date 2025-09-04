import Navbar from "~/elements/Navbar";
import AnimatedLogo from "~/elements/AnimatedLogo";
import InfoSection from "~/elements/InfoSection";
import Footer from "~/elements/Footer";
import type { Route } from "./+types/home"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bizon » „Síla prérie v každém doušku.“" },
    { name: "description", content: "Bizon » „Síla prérie v každém doušku.“" },
  ];
}

export default function Home() {

  return <>
      <div className="bg-bg transition-all duration-500">
        <Navbar />
        <div className="h-full w-full bg-[url(../img/bgImg.jpg)] bg-position-[center_top_-13rem] py-4 md:py-16 transition-all duration-1000">
          <h1 className="text-primarylight font-black text-7xl text-center transition-all duration-1000">Bizon</h1>
          <h2 className="text-textlight font-bold text-xl text-center transition-all duration-1000 italic">„Síla prérie v každém doušku.“</h2>
        </div>
        <div className="w-full pt-8 transition-all duration-1000">
          <AnimatedLogo />
          <InfoSection />
        </div>
        <Footer />
      </div>
    </>
}