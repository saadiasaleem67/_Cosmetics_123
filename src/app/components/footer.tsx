import { FaInstagram, FaFacebook, FaAmazon } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pink-200 w-full h-16 text-center pt-2 pb-16">
      <div className="text-base">Diya Cosmetics</div>
      <div className="flex items-center justify-center mt-3">
        <FaInstagram className="w-10 h-5 hover:text-pink-500" />
        <FaFacebook className="w-10 h-5 hover:text-pink-500" />
        <FaAmazon className="w-10 h-5 hover:text-pink-500" />
      </div>
    </div>
  );
};
export default Footer;
