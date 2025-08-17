import { products } from "~/data"

const AboutProducts = () => {
  return <div className="flex flex-row flex-wrap justify-evenly mx-12 lg:mx-72">
    {products.map((prod, i) => (
      <div className="border-primary/40 border rounded-2xl text-text p-3 bg-linear-to-b from-primary/0 to-primary/5 my-16">
        <img src={prod.image} alt="" className="h-36 rounded-t-2xl rounded-b-lg mx-auto" />
        <p className="text-center text-primary text-xl font-bold mt-6">{prod.name}</p>
        <p className="text-center text-text text-sm mt-3 w-50 mx-auto h-4">{prod.desc}</p>
        <div className="grid grid-cols-2 mt-16">
          <p className="">Cena: {prod.price}</p>
          <p className="">Inv. číslo: {prod.serial}</p>
        </div>
        <p className="text-center">Varianty: {prod.variants}</p>
      </div>
    ))}
  </div>
}

export default AboutProducts