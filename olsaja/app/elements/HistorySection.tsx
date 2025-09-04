import { footerData } from "~/data"

const HistorySection = () => {
  return <>
    <p className="text-5xl font-black text-primary text-center my-8">Historie</p>
      <div className="flex justify-center gap-5 my-8">
          <div className="w-16">
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <p className="text-center text-xl text-text font-bold border-2 border-text w-14 mx-auto h-8">1857</p>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <p className="text-center text-xl text-text font-bold border-2 border-text w-14 mx-auto h-8">1880</p>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <p className="text-center text-xl text-text font-bold border-2 border-text w-14 mx-auto h-8">1933</p>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <p className="text-center text-xl text-text font-bold border-2 border-text w-14 mx-auto h-8">1991</p>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
            <p className="text-center text-xl text-text font-bold border-2 border-text w-14 mx-auto h-8">{footerData.year}</p>
            <div className="border-2 border-text h-16 w-[1px] mx-auto"></div>
          </div>
          <div className="flex flex-wrap items-center text-text font-semibold w-102 text-xs md:text-lg">
            <p className="m-5">V malé vesničce na Šumavě se objevil cestovatel z Ameriky, který s sebou přivezl bizoní roh. Místní sládek z něj údajně pil a tvrdil, že v něm pivo chutná silněji než v jakémkoli džbánu.</p>
            <p className="m-5">První várka „Bizonova ležáku“ byla uvařena na dvoře starého mlýna. Lidé se scházeli, aby ochutnali „sílu prérie v půllitru“.</p>
            <p className="m-5">Během prohibice v USA se z Čech tajně vyvážel recept „Bizonova ležáku“, který si oblíbili i američtí pašeráci.</p>
            <p className="m-5">Pivovar se znovuzrodil po sametové revoluci, kdy vnuk posledního sládka našel staré zápisky a rozhodl se obnovit tradici.</p>
            <p className="m-5">Bizon se stal symbolem odvahy, nezávislosti a divoké chuti. Zároveň však i chválenou pochoutkou šeských vlastenců.</p>
          </div>
        </div>
  </>
  

}

export default HistorySection