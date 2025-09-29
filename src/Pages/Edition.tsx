interface EditionProps {
  id: string;
}

function Edition({ id }: EditionProps) {
  return (
    <div
      id={`Edition__page__${id}`}
      className="flex justify-center w-full h-full flex-1 items-center bg-pink-200 p-10"
    >
      <div className="w-3/4 h-full bg-yellow-200 rounded-3xl flex flex-col items-center justify-center">
        <div className="w-full h-1/2 bg-green-300 p-10 ">
          <div className="w-full h-full bg-red-300 p-10 rounded-2xl flex flex-col items-center justify-center">
            <h1>question</h1>
          </div>
        </div>
        <div className="w-full h-1/2 bg-green-300 p-10">
          <div className="w-full h-full bg-blue-300 p-10 rounded-2xl flex flex-col items-center justify-center">
            <h1>reponse</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edition;
