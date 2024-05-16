import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
interface propType {
  img: string;
  title: string;
  rating: number;
  price: number;
  sales: boolean;
}
const ProductCard: React.FC<propType> = ({
  img,
  title,
  rating,
  price,
  sales,
}) => {
  const generate = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className=" flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
        );
      case 2:
        return (
          <div className=" flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
        );
      case 3:
        return (
          <div className=" flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
            <CiStar />
          </div>
        );
      case 4:
        return (
          <div className=" flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
          </div>
        );
      case 5:
        return (
          <div className=" flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    // product images
    <div className="px-4 border mb-3 py-2 border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <div className="relative box ">
          {sales && (
            <div className="absolute bg-red-700 inline-block top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px]  ">
              SALES!
            </div>
          )}
        </div>
        <Image
          className="w-full h-auto "
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className=" space-y-2 py-2">
        <h3 className=" text-pink-600 font-medium uppercase text-left">
          {title}
        </h3>
        <div>{generate(rating)}</div>
        <p className="text-gray-600 font-bold text-left">${price}.00</p>
      </div>
      <button className="bg-pink-700 px-3 py-1 rounded-full align-text-bottom text-white mr-[110px] hover:bg-red-200 active:bg-yellow-500 hover:text-black ">
        Add to Card
      </button>
    </div>
  );
};
export default ProductCard;
