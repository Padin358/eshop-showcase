import type { productProps } from "~/types"
import { products } from "~/data"
import { useEffect } from "react"


const Product = ({name, image, variants, serial, price}: productProps) => {


  if (!name) name = "404 DATA NENALEZENA"
  if (!image) image = ""
  if (!variants) variants = 1
  if (!serial) serial = "404 DATA NENALEZENA"
  if (!price) price = NaN
  let button = "Do Košíku"

  if (serial === "S11" || serial === "Sspecial") button = "Varianty"

  return <>
    <div className="hover:scale-95 hover:border hover:border-primary transition-all rounded-2xl duration-300 cursor-auto scale-90">
      <div className="text-text bg-gray-200/50 p-3 w-52 md:w-92 mx-auto rounded-2xl">
        <a href={`?${serial}`} className="">
          <img src={image} alt="" className="h-32 md:h-48 rounded-xl cursor-pointer mx-auto"/>
          <div className="flex flex-wrap flex-row justify-between items-center">
            <p className="font-semibold text-xl text-primary">{price} Kč</p>
            <p className="font-bold text-2xl my-2 text-primary">{name}</p>
          </div>
        </a>
        <div className="flex flex-wrap flex-row justify-between items-center">
          <div className="">
            <p className="text-lg">Počet variant: {variants}</p>
            <p className="text-xs">Inventární číslo: {serial}</p>
          </div>
          <button className="font-semibold text-xl text-textlight bg-primary p-2 rounded-lg cursor-pointer hover:bg-primarydark/90 transition-all duration-200">{button}</button>
        </div>
      </div>
    </div>
  </>
}

export default Product