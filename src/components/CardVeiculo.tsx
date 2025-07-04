import { BiCheck } from "react-icons/bi";

const CardVeiculo = () => {
  return (
    <div className="bg-white border border-neutral-200/50 shadow-xs  pb-8  rounded-2xl w-96 ">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover scale-x-[-1] -rotate-5"
          src="/carro.png"
          alt=""
        />
      </div>
      <div className="flex flex-col w-full h-2/5 px-6 py-4">
        <h1 className="text-2xl font-semibold text-neutral-800">
          BMW M4 Coupe
        </h1>
        <div className="flex items-center gap-2 mt-4">
          <div className="w-7/12 flex  flex-wrap gap-3 text-xs">
            <p className="flex justify-end items-end gap-1">
              <BiCheck className="bg-green-700 text-white rounded-full w-4 h-4" />
              atributo
            </p>

            <p className="flex justify-end items-end gap-1">
              <BiCheck className="bg-green-700 text-white rounded-full w-4 h-4" />
              atributo
            </p>

            <p className="flex justify-end items-end gap-1">
              <BiCheck className="bg-green-700 text-white rounded-full w-4 h-4" />
              atributo
            </p>

            <p className="flex justify-end items-end gap-1">
              <BiCheck className="bg-green-700 text-white rounded-full w-4 h-4" />
              atributo
            </p>
          </div>
          <div className="w-5/12 flex justify-center items-end">
            <h1 className="text-2xl font-semibold text-neutral-800 flex">
              R$ 1000
            </h1>
            <p className="text-sm text-neutral-600">/dia</p>
          </div>
        </div>
        <div>
          <button className="w-full py-2 font-semibold rounded-sm text-white bg-cyan-600 my-6">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardVeiculo;
