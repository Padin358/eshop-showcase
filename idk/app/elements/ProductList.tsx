import { products } from "~/data"
import Product from "./Product"

const ProductList = () => {
  return <div className="flex flex-row flex-wrap justify-evenly gap-10 mx-4 md:mx-25 xl:mx-50">
    {products.map((prod, i) => (
      <Product name={prod.name} image={prod.image} variants={prod.variants} serial={prod.serial} price={prod.price} key={i}/>
    ))}
  </div>
}

export default ProductList