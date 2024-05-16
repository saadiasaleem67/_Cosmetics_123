import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navrbar = () => {
  return (
    <>
    {/* side_bar */}
      <div className="bg-white/10 py-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg">
        <div className="container flex md:justify-between justify-center items-center">
          <div className="sm:hidden text-[26px]">
            <Sheet>
              <SheetTrigger>
                <FaBars />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <div>
                      <h1 className="text-4xl text-pink-700">Diya Cosmetics</h1>
                    </div>
                    <div className="border-b-2  w-[330px] bg-yellow-400 h-2 rounded-full mt-4"></div>
                    <div className="uppercase text-3xl text-gray-900 mt-4">
                      <h1 className="pt-3 hover:cursor-pointer hover:text-pink-700">
                        blog
                      </h1>
                      <h1 className="pt-3 hover:cursor-pointer hover:text-pink-700">
                        shop
                      </h1>
                      <h1 className="pt-3 hover:cursor-pointer hover:text-pink-700">
                        pages
                      </h1>
                      <h1 className="pt-3 hover:cursor-pointer hover:text-pink-700">
                        contact
                      </h1>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

               {/*main navbar  */}
          </div>
          <div className="text-4xl  text-pink-700 sm:font-semibold ">
            <Link href="/"> Diya Cosmetics</Link>
          </div>

          <ul className="gap-6 hidden sm:flex ">
            <Link href="/" className="text-[18px] text-pink-700 text-accent">
              Home
            </Link>
            <li className="text-[18px] hover:text-pink-700 hover:cursor-pointer">
              Blog
            </li>
            <li className="text-[18px] hover:text-pink-700 hover:cursor-pointer">
              Shope
            </li>
            <li className="text-[18px] hover:text-pink-700 hover:cursor-pointer">
              Pages
            </li>
            <li className="text-[18px] hover:text-pink-700 hover:cursor-pointer">
              Contact
            </li>
          </ul>

          <div className="gap-4 hidden md:flex">
            <select
              className="text-gray-600 text-[14px] w-[70px]"
              name="lanyguage"
              id="langugaye"
            >
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navrbar;
