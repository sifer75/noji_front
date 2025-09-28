import Section from "./Section";

interface SectionContainerProps {
  id: string;
}

const sections = [
  {
    id: "section1",
    name: "Section 1",
    collectionNumber: 1,
  },
  {
    id: "section2",
    name: "Section 2",
    collectionNumber: 2,
  },
  {
    id: "section3",
    name: "Section 3",
    collectionNumber: 0,
  },
  {
    id: "section3",
    name: "Section 3",
    collectionNumber: 0,
  },
  {
    id: "section3",
    name: "Section 3",
    collectionNumber: 0,
  },
  {
    id: "section3",
    name: "Section 3",
    collectionNumber: 0,
  },
  {
    id: "section3",
    name: "Section 3",
    collectionNumber: 0,
  },
  {
    id: "section3",
    name: "Section 3",
    collectionNumber: 0,
  },
  {
    id: "section3",
    name: "Section 3",
    collectionNumber: 0,
  },
];

function SectionContainer({ id }: SectionContainerProps) {
  return (
    <div
      id={`SectionContainer__container__${id}`}
      className="bg-amber-400 w-3/4 h-3/4 rounded-3xl flex flex-col gap-10 p-10 overflow-scroll"
    >
      {sections.map((section) => (
        <Section
          key={section.id}
          id={`SectionContainer__section__${section.id}`}
          name={section.name}
          collectionNumber={section.collectionNumber}
        />
      ))}
    </div>
  );
}

export default SectionContainer;
