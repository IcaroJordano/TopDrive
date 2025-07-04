import CardVeiculo from "@/components/CardVeiculo";
import FilterBar from "@/components/Home/FilterBar";
import Pagination from "@/components/Pagination";
import SelectMult from "@/components/SelectMult";
import Image from "next/image";
import { BiDownArrow, BiDownArrowAlt, BiSearch } from "react-icons/bi";
import { IoMdArrowDown, IoMdArrowDropdown } from "react-icons/io";

export default function Home() {
  return (
    <div className="bg-neutral-50 mt-16">
      <div
        style={{
          backgroundImage:
            "url('https://bmw.scene7.com/is/image/BMW/HOME_IX:3to1?fmt=webp&wid=1504&hei=501')",
        }}
        className="bg-cover bg-center h-screen bg-no-repeat  bg-cyan-900 "
      >
        {/* <h1 className="w-[450px]  text-4xl font-semibold mx-auto text-shadow-lg text-white text-center pt-10">
          Book a Transport <br /> For Smooth Journeys
        </h1> */}
      </div>
      <div>
        <FilterBar />
      </div>

      <div className="flex w-11/12 mx-auto pb-16 justify-between   ">
        <div className=" w-4/12 px-6 py-4 flex justify-around flex-col  rounded-2xl pb-24">
          <div className="bg-white w-full px-6 py-4 flex flex-col  rounded-2xl pb-24">
            <label
              className="text-lg  font-semibold  text-neutral-800"
              htmlFor=""
            >
              What are you looking for
            </label>
            <div className="border border-neutral-200/30 rounded-md flex justify-center items-center bg-neutral-50 h-11 mt-4">
              <input
                placeholder="Search"
                className=" focus:outline-none focus:ring-0 ps-2 text-xs w-10/12 "
                type="text"
              />
              <BiSearch size={20} className="text-neutral-700" />
            </div>

            <hr className="my-8  text-neutral-300" />

            <div className="text-sm  font-semibold  text-neutral-600">
              <SelectMult Title="Car Category" />
            </div>
          </div>
          <div>
            <div className="relative w-[670] -left-50 z-10 h-auto overflow-visible">
              <Image
                src={"/background.png"}
                className="absolute left-0 right-0 "
                width={1600}
                height={700}
                alt=""
              />
            </div>
            <div className="relative z-40 w-[400px] top-20">
              <img className="z-40" src="/carro.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-9/12 ">
          <div className="flex flex-wrap gap-8   justify-end">
            <CardVeiculo />
            <CardVeiculo />
            <CardVeiculo />
            <CardVeiculo />
          </div>
          <div className="my-8">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
