import type { prodPageProps } from "~/types"
import { ArrowLeft } from "lucide-react"
import Carousel from "./Carousel"
import { carousel1Data, carousel5Data, carousel2Data, carousel3Data, carousel4Data, carousel6Data, products, S11, Sspecial } from "~/data"
import Footer from "./Footer"
import { useState } from "react"

const ProductPage = ({data}: prodPageProps) => {
  switch (data) {
    case "11=": {
      return <div className="bg-bg">
        <a href="?" className="text-text flex gap-3 items-center font-semibold p-5 hover:scale-105 transition-all duration-500 w-64"> <ArrowLeft className="scale-120" /> Zpět do obchodu</a>
        <div className="text-text flex flex-row flex-wrap justify-center 2xl:justify-between mx-32 mb-16 mt-8 gap-16">
          <div className="">
            <Carousel slides={carousel1Data} />
          </div>
          <div className="p-5 text-right w-128">
            <p className="text-3xl font-extrabold text-primary">{products[0].name}</p>
            <p className="text-2xl font-extrabold text-primary">{products[0].price} Kč</p>
            <div className="text-left mt-8">
              <p className="text-xl">Počet variant: {products[0].variants}</p>
              <p className="text-xl">Inv. číslo: {products[0].serial}</p>
            </div>
            <div className="mt-8">
              <p className="text-xl text-center font-semibold">{products[0].desc}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-evenly mt-8 text-center">
              <div className="">
                <button className="text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl">0,5l<br />Plech</button>
              </div>
              <button className="font-semibold text-xl text-textlight bg-primary p-2 rounded-lg cursor-pointer hover:bg-primarydark/90 transition-all duration-200">Do Košíku</button>
            </div>
          </div>
        </div>
      </div>
      break
    }
    case "14=": {
      return <div className="bg-bg">
        <a href="?" className="text-text flex gap-3 items-center font-semibold p-5 hover:scale-105 transition-all duration-500 w-64"> <ArrowLeft className="scale-120" /> Zpět do obchodu</a>
        <div className="text-text flex flex-row flex-wrap justify-center 2xl:justify-between mx-32 mb-16 mt-8 gap-16">
          <div className="">
            <Carousel slides={carousel1Data} />
          </div>
          <div className="p-5 text-right w-128">
            <p className="text-3xl font-extrabold text-primary">{products[1].name}</p>
            <p className="text-2xl font-extrabold text-primary">{products[1].price} Kč</p>
            <div className="text-left mt-8">
              <p className="text-xl">Počet variant: {products[1].variants}</p>
              <p className="text-xl">Inv. číslo: {products[1].serial}</p>
            </div>
            <div className="mt-8">
              <p className="text-xl text-center font-semibold">{products[1].desc}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-evenly mt-8 text-center">
              <div className="">
                <button className="text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl">0,5l<br />Plech</button>
              </div>
              <button className="font-semibold text-xl text-textlight bg-primary p-2 rounded-lg cursor-pointer hover:bg-primarydark/90 transition-all duration-200">Do Košíku</button>
            </div>
          </div>
        </div>
      </div>
      break
    }
    case "13=": {
      return <div className="bg-bg">
        <a href="?" className="text-text flex gap-3 items-center font-semibold p-5 hover:scale-105 transition-all duration-500 w-64"> <ArrowLeft className="scale-120" /> Zpět do obchodu</a>
        <div className="text-text flex flex-row flex-wrap justify-center 2xl:justify-between mx-32 mb-16 mt-8 gap-16">
          <div className="">
            <Carousel slides={carousel1Data} />
          </div>
          <div className="p-5 text-right w-128">
            <p className="text-3xl font-extrabold text-primary">{products[2].name}</p>
            <p className="text-2xl font-extrabold text-primary">{products[2].price} Kč</p>
            <div className="text-left mt-8">
              <p className="text-xl">Počet variant: {products[2].variants}</p>
              <p className="text-xl">Inv. číslo: {products[2].serial}</p>
            </div>
            <div className="mt-8">
              <p className="text-xl text-center font-semibold">{products[2].desc}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-evenly mt-8 text-center">
              <div className="">
                <button className="text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl">0,5l<br />Plech</button>
              </div>
              <button className="font-semibold text-xl text-textlight bg-primary p-2 rounded-lg cursor-pointer hover:bg-primarydark/90 transition-all duration-200">Do Košíku</button>
            </div>
          </div>
        </div>
      </div>
      break
    }
    case "special=": {
      return <div className="bg-bg">
        <a href="?" className="text-text flex gap-3 items-center font-semibold p-5 hover:scale-105 transition-all duration-500 w-64"> <ArrowLeft className="scale-120" /> Zpět do obchodu</a>
        <div className="text-text flex flex-row flex-wrap justify-center 2xl:justify-between mx-32 mb-16 mt-8 gap-16">
          <div className="">
            <Carousel slides={carousel1Data} />
          </div>
          <div className="p-5 text-right w-128">
            <p className="text-3xl font-extrabold text-primary">{products[3].name}</p>
            <p className="text-2xl font-extrabold text-primary">{products[3].price} Kč</p>
            <div className="text-left mt-8">
              <p className="text-xl">Počet variant: {products[3].variants}</p>
              <p className="text-xl">Inv. číslo: {products[3].serial}</p>
            </div>
            <div className="mt-8">
              <p className="text-xl text-center font-semibold">{products[3].desc}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-evenly mt-8 text-center">
              <div className="">
                <button className="text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl">0,5l<br />Plech</button>
              </div>
              <button className="font-semibold text-xl text-textlight bg-primary p-2 rounded-lg cursor-pointer hover:bg-primarydark/90 transition-all duration-200">Do Košíku</button>
            </div>
          </div>
        </div>
      </div>
      break
    }
    case "S11=": {
      const [classes15, setClasses15] = useState("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16") 
      const [classes30, setClasses30] = useState("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
      const [classes50, setClasses50] = useState("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
      const [price, setPrice] = useState(S11.price1)

      function buttonFunS11_15() {
        setClasses15("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
        setClasses30("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
        setClasses50("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")

        setPrice(S11.price1)
      }

      function buttonFunS11_30() {
        setClasses15("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
        setClasses30("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
        setClasses50("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")

        setPrice(S11.price2)
      }

      function buttonFunS11_50() {
        setClasses15("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
        setClasses30("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
        setClasses50("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")

        setPrice(S11.price3)
      }

      return <div className="bg-bg">
        <a href="?" className="text-text flex gap-3 items-center font-semibold p-5 hover:scale-105 transition-all duration-500 w-64"> <ArrowLeft className="scale-120" /> Zpět do obchodu</a>
        <div className="text-text flex flex-row flex-wrap justify-center 2xl:justify-between mx-32 mb-16 mt-8 gap-16">
          <div className="">
            <Carousel slides={carousel6Data} />
          </div>
          <div className="p-5 text-right w-128">
            <p className="text-3xl font-extrabold text-primary">{products[4].name}</p>
            <p className="text-2xl font-extrabold text-primary">{price} Kč</p>
            <div className="text-left mt-8">
              <p className="text-xl">Počet variant: {products[4].variants}</p>
              <p className="text-xl">Inv. číslo: {products[4].serial}</p>
            </div>
            <div className="mt-8">
              <p className="text-xl text-center font-semibold">{products[4].desc}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-evenly mt-8 text-center">
              <div className="flex flex-row flex-wrap gap-3 justify-center">
                <button className={classes15} onClick={buttonFunS11_15}>15l</button>
                <button className={classes30} onClick={buttonFunS11_30}>30l</button>
                <button className={classes50} onClick={buttonFunS11_50}>50l</button>
              </div>
              <button className="font-semibold text-xl text-textlight bg-primary p-2 rounded-lg cursor-pointer hover:bg-primarydark/90 transition-all duration-200">Do Košíku</button>
            </div>
          </div>
        </div>
      </div>
      break
    }
    case "Sspecial=": {
      const [classes30, setClasses30] = useState("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
      const [classes50, setClasses50] = useState("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
      const [price, setPrice] = useState(Sspecial.price1)

      function buttonFunSs_30() {
        setClasses30("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
        setClasses50("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")

        setPrice(Sspecial.price1)
      }

      function buttonFunSs_50() {
        setClasses30("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/20 hover:to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")
        setClasses50("text-center cursor-pointer bg-linear-to-b from-primary/0 to-primary/100 p-2 rounded-b-2xl transition duration-300 w-16 h-16")

        setPrice(Sspecial.price2)
      }

      return <div className="bg-bg">
        <a href="?" className="text-text flex gap-3 items-center font-semibold p-5 hover:scale-105 transition-all duration-500 w-64"> <ArrowLeft className="scale-120" /> Zpět do obchodu</a>
        <div className="text-text flex flex-row flex-wrap justify-center 2xl:justify-between mx-32 mb-16 mt-8 gap-16">
          <div className="">
            <Carousel slides={carousel6Data} />
          </div>
          <div className="p-5 text-right w-128">
            <p className="text-3xl font-extrabold text-primary">{products[5].name}</p>
            <p className="text-2xl font-extrabold text-primary">{price} Kč</p>
            <div className="text-left mt-8">
              <p className="text-xl">Počet variant: {products[5].variants}</p>
              <p className="text-xl">Inv. číslo: {products[5].serial}</p>
            </div>
            <div className="mt-8">
              <p className="text-xl text-center font-semibold">{products[5].desc}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-evenly mt-8 text-center">
              <div className="flex flex-row flex-wrap gap-3 justify-center">
                <button className={classes30} onClick={buttonFunSs_30}>30l</button>
                <button className={classes50} onClick={buttonFunSs_50}>50l</button>
              </div>
              <div className="flex items-center">
                <input type="number" name="Počet" id="" className="w-20 h-10 bg-gray-200 p-3 rounded-xl" min={1} max={50}/>
              </div>
              <button className="font-semibold text-xl text-textlight bg-primary p-2 rounded-lg cursor-pointer hover:bg-primarydark/90 transition-all duration-200">Do Košíku</button>
            </div>
          </div>
        </div>
      </div>
      break
    }
  }
}

export default ProductPage