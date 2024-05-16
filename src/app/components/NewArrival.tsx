import Link from "next/link";
import Data from "@/productDetails/productData";
import ProductCard from "./product";

const NewArival = () => {
  return (
    <>
    {/* links */}
      <div className="container pt-30 mt-[70px]">
        <div className="text-center">
          <h2 className="font-semibold text-5xl  text-gray-950">New Arrival</h2>

          <ul className="flex flex-col md:flex-row justify-center pt-8 sm:flex-row uppercase font-medium text-xl md:text-center ">
            <li className="sm:pr-4 pt-3 ">
              <Link href="/" className="hover:text-pink-700 ">
                All
              </Link>
            </li>
            <li className="sm:pr-4 pt-3 ">
              <Link href="/" className="hover:text-pink-700 ">
                Skin Care
              </Link>
            </li>
            <li className="sm:pr-4 pt-3">
              <Link href="/" className="hover:text-pink-700 ">
                lipStick
              </Link>
            </li>
            <li className="sm:pr-4 pt-3">
              <Link href="/" className="hover:text-pink-700 ">
                Makeup
              </Link>
            </li>
            <li className="sm:pr-4 pt-3">
              <Link href="/" className="hover:text-pink-700 ">
                nail & wax
              </Link>
            </li>
          </ul>

              {/* product data */}
          <div className=" container pt-16">
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 hover:cursor-pointer">
              {Data.map((item, index) => (
                <ProductCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  sales={item.sales}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewArival;
