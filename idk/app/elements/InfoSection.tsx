import { infoCards } from "~/data"
import InfoCard from "./InfoCard"

const InfoSection = () => {
  return <div className="flex flex-row flex-wrap justify-center mx-10 lg:mx-72 py-12 gap-10 gap-x-64">
    {infoCards.map((card, i) => (
      <InfoCard name={card.name} image={card.image}>{card.children}</InfoCard>
    ))}
  </div>
}

export default InfoSection