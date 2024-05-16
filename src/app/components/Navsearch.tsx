import { IoSearch } from "react-icons/io5";
import { PiShoppingCartDuotone } from "react-icons/pi";
const Navsearch = () => {
  return (
    <div>
        {/* second navbar */}
      <div className="bg-white py-4  ">
        <div className="container flex justify-center items-center">
          <div className="w-full sm:w-[300px] md:w-[70%] ">
            <input
              className="border-gray-600 border p-2 px-4 rounded lg:w-full "
              type="text"
              placeholder="Enter any Product name..."
            />
          </div>
          <div className="flex gap-6 text-[28px] px-8 ">
            <div className="relative cursor-pointer">
              <PiShoppingCartDuotone />
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[20px] h-[20px] rounded-full text-white text-[14px] grid place-items-center">
                0
              </div>
            </div>
            <div>
              <IoSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navsearch;
