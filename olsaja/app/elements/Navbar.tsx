import type { navbarProps } from "~/types"
import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = ({btn1, btn2, btn3, btn4}: navbarProps) => {

  const [cartNum, setCartNum] = useState()

  useEffect(() => {
    const cartContent: string = localStorage.getItem("cartContent") !== null ? localStorage.getItem("cartContent") !: ""
    const parsed: any = cartContent ? JSON.parse(cartContent) : []
  
    console.log(parsed)
  
    setCartNum(parsed.length)
  })

  if (!btn1) btn1 = "#"
  if (!btn2) btn2 = "about"
  if (!btn3) btn3 = "contact"
  if (!btn4) btn4 = "shop"

  return <>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/{toggle name}.min.css"></link>
    <div className="transition-all duration-1000 bg-linear-to-l from-primary to-primary/0 from-100% to-100% md:from-85% md:to-90% xl:from-87% xl:to-95% w-full p-3 flex items-center justify-between px-5">
      <img src="../img/bizon_T_NOBG.png" alt="" className="w-10 bg-gray-50 rounded-full justify-self-start hidden md:block scale-130 transition-all duration-1000" />
      <div className="flex flex-wrap flex-row gap-5 text-lg transition-all duration-1000 text-textlight">
        <a href={btn1} className="font-semibold after:block after:origin-bottom after:scale-x-0 after:border-b-3 after:border-b-textlight after:transition-all hover:after:scale-x-120 after:ease-in-out after:duration-200 hover:scale-110 transition-all duration-200 hover:font-bold">Úvod</a>
        <a href={btn2} className="font-semibold after:block after:origin-bottom after:scale-x-0 after:border-b-3 after:border-b-textlight after:transition-all hover:after:scale-x-120 after:ease-in-out after:duration-200 hover:scale-110 transition-all duration-200 hover:font-bold">O Nás</a>
        <a href={btn3} className="font-semibold after:block after:origin-bottom after:scale-x-0 after:border-b-3 after:border-b-textlight after:transition-all hover:after:scale-x-120 after:ease-in-out after:duration-200 hover:scale-110 transition-all duration-200 hover:font-bold">Kontakt</a>
        <a href={btn4} className="font-semibold after:block after:origin-bottom after:scale-x-0 after:border-b-3 after:border-b-textlight after:transition-all hover:after:scale-x-120 after:ease-in-out after:duration-200 hover:scale-110 transition-all duration-200 hover:font-bold">E-Shop</a>
      </div>
      <a href="" className="flex flex-between gap-1.5 hover:opacity-80 hover:scale-110 transition">
        <p className="">{cartNum}</p>
        <ShoppingCart />
      </a>
    </div>
  </>
}

export default Navbar