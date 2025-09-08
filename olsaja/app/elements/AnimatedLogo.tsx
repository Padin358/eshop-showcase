import { useEffect, useState } from "react";

const AnimatedLogo = () => {
  const [bizonSource, setBizonSource] = useState("../img/bizon_T_NOBG.png");
  const [bizonClass, setbizonClass] = useState(`w-64 mx-auto transition-all duration-1000 opacity-100`)

  useEffect(() => {
    const timer1 = setTimeout(() => setbizonClass(`w-64 mx-auto transition-all duration-1000 opacity-0`), 2000);

    const timer2 = setTimeout(() => {
      setBizonSource("../img/bizon_NOT_NOBG.png");
      setbizonClass(`w-64 mx-auto transition-all duration-1000 hover:scale-110 hover:rotate-10 opacity-100 drop-shadow-primary drop-shadow-lg`)
    }, 4000);

    const timer3 = setTimeout(() => {
      setbizonClass("w-64 mx-auto transition-all duration-1000 opacity-0 drop-shadow-primary drop-shadow-lg")
    }, 3000)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3)
    };
  }, []);
  return (
    <img
      src={bizonSource}
      alt=""
      className={bizonClass}
      id="bizonLogo"
    />
  );
};

export default AnimatedLogo;