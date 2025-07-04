import { BiSearch } from "react-icons/bi";
import SelectMult from "../SelectMult";

const FilterBar = () => {
  return (
    <div className="flex items-end py-8 gap-4 px-auto justify-center font-semibold text-neutral-700  w-11/12 relative -top-12  mx-auto bg-white shadow-lg">
      <div className="flex flex-col gap-2">
        <label className="text-sm " htmlFor="">
          Pickup Location
        </label>
        <div className="w-80">
          <SelectMult Title="Pickup Location" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm " htmlFor="">
          Pickup Date
        </label>
        <div className="w-80">
          <input
            className="text-xs text-gray-600 py-3 w-full px-4 rounded-sm    bg-neutral-100"
            type="date"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm " htmlFor="">
          Return Date
        </label>
        <div className="w-80">
          <input
            className="text-xs text-gray-600 py-3 w-full px-4 rounded-sm    bg-neutral-100"
            type="date"
          />
        </div>
      </div>
      <button className="flex items-center gap-2 px-9 py-3 text-sm bg-cyan-700 text-white rounded-xs">
        <BiSearch size={20} />
        Search
      </button>
    </div>
  );
};

export default FilterBar;
