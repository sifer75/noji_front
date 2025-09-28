import { IoIosArrowForward } from "react-icons/io";

interface SectionProps {
  id: string;
  children?: React.ReactNode | SectionProps;
  name: string;
  collectionNumber: number;
}

function Section({ id, name, collectionNumber }: SectionProps) {
  return (
    <div
      id={`Section__container__${id}`}
      className="min-h-20 bg-blue-500 flex items-center justify-between px-6 rounded-xl hover:bg-amber-100"
      onClick={() => {
        window.location.href = `/section/${id}`;
      }}
    >
      <div id={`Section__description__${id}`} className="flex flex-col gap-2">
        <p id={`Section__name__${id}`}>{name}</p>
        {collectionNumber > 0 ? (
          <p>nombre de carte: {collectionNumber}</p>
        ) : (
          <p>aucune carte</p>
        )}
      </div>
      <IoIosArrowForward />
    </div>
  );
}

export default Section;
