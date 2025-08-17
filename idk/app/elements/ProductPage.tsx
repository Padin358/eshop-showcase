import type { prodPageProps } from "~/types"
import { ArrowLeft } from "lucide-react"
import Carousel from "./Carousel"
import { carousel1Data } from "~/data"
import { carousel2Data } from "~/data"
import { carousel3Data } from "~/data"
import { carousel4Data } from "~/data"
import { products } from "~/data"

const ProductPage = ({data}: prodPageProps) => {
  switch (data) {
    case "11=": {
      return <div className="bg-bg">
        <a href="?" className="text-text flex gap-3 items-center font-semibold p-5 hover:scale-105 transition-all duration-500 w-64"> <ArrowLeft className="scale-120" /> Zpět do obchodu</a>
        <div className="text-text flex flex-row flex-wrap justify-between mx-32">
          <div className="">
            <Carousel slides={carousel1Data} />
          </div>
          <div className="text-text border-text border">
            asadf
          </div>
        </div>
      </div>
      break
    }
    case "14=": {
      return <div className="text-8xl font-black text-primary">
        JEŠTĚ SE UVIDÍME
      </div>
    }
    case "13=": {
      return <div className="bg-bg">
        <a href="?" className="text-text flex gap-3 items-center font-semibold p-5 hover:scale-105 transition-all duration-500 w-64"> <ArrowLeft className="scale-120" /> Zpět do obchodu</a>
        <div className="text-text flex flex-row flex-wrap justify-center">
          <div className="">
            <Carousel slides={carousel3Data}/>
          </div>
          <div className=""></div>
        </div>
      </div>
      break
    }
    case "special=": {
      return <div className="text-8xl font-black text-primary">
        UŽ SE NEUVIDÍME
      </div>
    }
  }
}

export default ProductPage