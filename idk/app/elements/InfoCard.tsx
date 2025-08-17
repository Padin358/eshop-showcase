import type { infoCardProps } from "~/types"

const InfoCard = ({image, name, children}: infoCardProps) => {
  return <div className="border-gray-300 border-1 w-64 text-text p-4 rounded-2xl items-center text-center">
    <img src={image} alt="" className="w-32 h-32 mx-auto" />
    <p className="mt-12 text-2xl font-extrabold text-primary">{name}</p>
    <p className="mt-4 text-lg">{children}</p>
  </div>
}

export default InfoCard