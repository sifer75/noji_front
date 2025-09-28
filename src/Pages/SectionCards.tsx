import { useParams } from "react-router-dom";
import { TbCards } from "react-icons/tb";
import Title from "../components/Title";

//interface SectionCardsProps {
//  id: string;
//}

function SectionCards() {
  const params = useParams();
  console.log(params);

  return (
    <div className="flex justify-center bg-orange-400 w-full h-full flex-1 flex-col items-center">
      <Title id="SectionCards__title" />
      <div
        id={`SectionCards__container__`}
        className=" w-1/4 h-full flex flex-col items-center justify-center gap-5"
      >
        <TbCards size={50} />
        <h2>Ce paquet n'a pas de cartes</h2>
        <button className="p-3 w-full rounded-3xl bg-white text-black hover:bg-gray-200">
          Ajouter des cartes
        </button>
      </div>
    </div>
  );
}

export default SectionCards;
