import type { Route } from "./+types/home";
import Navbar from "~/elements/Navbar";
import Footer from "~/elements/Footer";
import HistorySection from "~/elements/HistorySection";
import AboutProducts from "~/elements/AboutProducts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bizon » Historie" },
    { name: "description", content: "Bizon » Historie" },
  ];
}

export default function History() {
  return <>
      <div className="bg-bg transition-all duration-500">
        <Navbar btn1="../" />
        <div className="h-full w-full bg-[url(../img/bgImg.jpg)] bg-position-[center_top_-13rem] py-4 md:py-16 transition-all duration-1000">
          <h1 className="text-primarylight font-black text-7xl text-center transition-all duration-1000">Bizon</h1>
          <h2 className="font-bold text-xl text-center transition-all duration-1000 italic">„Síla prérie v každém doušku.“</h2>
        </div>
        <HistorySection />
        <p className="text-5xl font-black text-primary text-center my-8">Současné produkty</p>
        <AboutProducts />
        <Footer />
      </div>
    </>
}
