import filials from "../../data/filial.json";

const Filials = () => {
  return (
    <div>
      {filials.map((filial) => (
        <div key={filial.id} className=" max-w-[700px] bg-white rounded-xl shadow-md mb-6 p-5 border-t">
          <div className="flex justify-between border-b mb-3">
            <div className="mb-3">
              <h3 className=" text-2xl font-bold">{filial.title}</h3>
              <p>{filial.addres}</p>
            </div>
            <div>
              <span className=" text-green-600">{filial.close}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-slate-600">Ish vaqti:</p>
              <p>{filial.time}</p>
            </div>
            <div>
                <p className=" text-right text-slate-600">Telefon:</p>
                <p>+{filial.tel}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filials;
