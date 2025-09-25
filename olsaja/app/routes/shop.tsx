import type { Route } from "./+types/home"; 
import Navbar from "~/elements/Navbar";
import Footer from "~/elements/Footer";
import ProductList from "~/elements/ProductList";
import { useSearchParams } from "react-router";
import ProductPage from "~/elements/ProductPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bizon » E-Shop" },
    { name: "description", content: "Bizon » E-Shop" },
  ];
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const param : string = searchParams.toString()

  if (!param) {
    return <>
      <div className="bg-bg transition-all duration-500">
        <Navbar btn1="../" />
        <div className="h-full w-full bg-[url(../img/bgImg.jpg)] bg-position-[center_top_-13rem] py-4 md:py-16 transition-all duration-1000">
          <h1 className="text-primarylight font-black text-7xl text-center transition-all duration-1000">Bizon</h1>
          <h2 className="font-bold text-xl text-center transition-all duration-1000 text-textlight">„Síla prérie v každém doušku.“</h2>
        </div>
        <div className="w-full pt-8 transition-all duration-1000">
          <ProductList />
        </div>
        <Footer />
      </div>
    </>
  }
  if (param) {
    return <>
      <div className="bg-bg transition-all duration-500">
        <Navbar btn1="../"/>
        <div className="h-full w-full bg-[url(../img/bgImg.jpg)] bg-position-[center_top_-13rem] py-4 md:py-16 transition-all duration-1000">
          <h1 className="text-primary font-black text-7xl text-center">Bizon</h1>
          <h2 className="font-bold text-xl text-center transition-all duration-1000 text-textlight">„Síla prérie v každém doušku.“</h2>
        </div>
        <div className="w-full bg-bg">
          <ProductPage data={param} />
        </div>
        <Footer />
      </div>
    </>
  }
}
