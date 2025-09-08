import { footerData } from "~/data"
import { Facebook, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return <div className="w-full bg-primary p-3 text-textlight">
    <div className="mx-auto text-center my-4">
      <img src="../img/bizon_W_T_NOBG.png" alt="" className="w-32 mx-auto"/>
      <p className="italic scale-105 -mt-3.5">„Síla prérie v každém doušku.“</p>
    </div>
    <div className="flex flex-row flex-wrap justify-evenly gap-5">
      <div className="w-72 p-3 text-lg">
        <a href="" className="hover:border-b-2 transition-border duration-50">Úvod</a>
        <br />
        <a href="" className="hover:border-b-2 transition-border duration-50">O Nás</a>
        <br />
        <a href="" className="hover:border-b-2 transition-border duration-50">Kontakt</a>
        <br />
        <a href="" className="hover:border-b-2 transition-border duration-50">E-Shop</a>
      </div>
      <div className="w-72 p-3">
        <p className="text-lg font-bold underline underline-offset-2">Kontakt:</p>
        <p className="">{footerData.address}</p>
        <p className="">Tel.: {footerData.phone}</p>
        <p className="">Email: {footerData.email}</p>
      </div>
      <div className="w-72 p-3">
        <p className="text-lg font-bold underline underline-offset-2">Otev. doba pivovarní hospody</p>
        <div className="flex flex-row flex-wrap justify-center text-center">
          <div className="w-16">
            <p className="">Po - Čt:</p>
            <p className="">Pá - So:</p>
            <p className="">Ne:</p>
          </div>
          <div className="w-32">
            <p className="">{footerData.poct}</p>
            <p className="">{footerData.paso}</p>
            <p className="">{footerData.ne}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="my-8 flex flex-row flex-wrap justify-center gap-10 text-textlight">
      <a href="https://facebook.com/" className="hover:opacity-70 transition-all duration-200 scale-200"><Facebook /></a>
      <a href="https://instagram.com/" className="hover:opacity-70 transition-all duration-200 scale-200"><Instagram /></a>
      <a href="https://youtube.com/" className="hover:opacity-70 transition-all duration-200 scale-200"><Youtube /></a>
    </div>
    <div className="w-full flex flex-row flex-wrap justify-between gap-5 p-2 text-sm font-normal mt-8">
      <p className="">© {footerData.year} Pivovar Bizon</p>
      <p className="">Pijte zodpovědně. Alkohol je pouze pro starší 18 let.</p>
      <p className="">IČO 01234567</p>
    </div>
  </div>
}

export default Footer