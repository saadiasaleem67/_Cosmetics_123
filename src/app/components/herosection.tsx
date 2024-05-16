import Image from "next/image";
import banner from "/public/Image/saadia.jpg";

const Navbar = () => {
  return (
    <>
      {/* Hero section */}
      <header className=" container grid gap-2 md:grid-cols-2 md:items-center md:text-left mt-16 xl:grid-cols-2  lg:grid-cols-2 ">
        <div className="flex justify-center items-center">
          <Image
            src={banner}
            alt=""
            className="h-96 w-auto rounded-lg "
          ></Image>
        </div>

        {/*Content */}
        <div className="">
          <h1 className="text-7xl text-pink-700 ">Diya Cosmetics</h1>
          <div className="border-b-2 md:w-24 w-20 bg-yellow-400 h-2 rounded-full mt-6"></div>
          <p className="text-sm text-gray-500 md:pr-[50px] md:text-left text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos
            tenetur dignissimos numquam, ullam dolores adipisci laudantium harum
            quae et recusandae eum magnam ex impedit placeat, sapiente,
            molestias ratione corrupti!
          </p>
          <button className="w-auto bg-slate-500 p-2 mt-6 hover:bg-yellow-400 hover:text-black rounded-full text-slate-50 ">
            Order Now
          </button>
        </div>
      </header>
    </>
  );
};
export default Navbar;
