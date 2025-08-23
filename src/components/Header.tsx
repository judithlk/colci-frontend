import Link from "next/link";
import Image from "next/image";

import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 p-0">
      <div className="p-3 bg-dark-gray lg:hidden"></div>
      <div className="w-[100%] border-b border-b-gray-700 flex justify-end md:justify-between px-10">
        <div className="hidden md:flex items-center space-x-1.5 py-3">
          <FaMapMarkerAlt className="size-3.5 fill-white-accent" />
          <h4 className="text-white-accent font-poppins font-[300] text-sm">
            Nunku Street, Off Yakubu Gowon Way, Jos, Nigeria
          </h4>
        </div>
        <div className="grid grid-cols-4 gap-0">
          <Link
            href={"#"}
            className="flex p-3 items-center hover:bg-red-bold transition-colors duration-300 ease-in-out border-l border-l-gray-700"
          >
            <FaFacebookF className="size-4.5 fill-white-accent" />
          </Link>
          <Link
            href={"#"}
            className="flex p-3 items-center hover:bg-red-bold transition-colors duration-300 ease-in-out border-l border-l-gray-700"
          >
            <FaInstagram className="size-4.5 fill-white-accent" />
          </Link>
          <Link
            href={"#"}
            className="flex p-3 items-center hover:bg-red-bold transition-colors duration-300 ease-in-out border-l border-l-gray-700"
          >
            <FaXTwitter className="size-4 fill-white-accent" />
          </Link>
          <Link
            href={"#"}
            className="flex p-3 items-center hover:bg-red-bold transition-colors duration-300 ease-in-out border-l border-l-gray-700"
          >
            <FaWhatsapp className="size-4 fill-white-accent" />
          </Link>
        </div>
      </div>
      <div className="w-[100%] flex justify-between items-center px-10 py-4">
        <div className="hidden lg:flex space-x-1 items-center">
          <div className="">
            <Image
              src={"/logoWhite.png"}
              alt="COLCI Logo"
              width={55}
              height={55}
              priority
            />
          </div>
          <div>
            <h3 className="font-poppins text-white-accent font-bold text-sm md:text-lg tracking-tight">
              Christ Our Life Church International
            </h3>
            {/* <h4 className="font-poppins text-white-accent/60 tracking-wide text-xl">The Megacity Church</h4> */}
          </div>
        </div>
        <div className="hidden lg:flex space-x-4 items-center font-poppins text-sm tracking-wider font-[500]">
          <Link
            href={"#"}
            className="block p-2 text-white-accent/85 hover:text-red-bold transition-colors duration-300 ease-in-out"
          >
            <h4>HOME</h4>
          </Link>
          <Link
            href={"#"}
            className="block p-2 text-white-accent/85 hover:text-red-bold transition-colors duration-300 ease-in-out"
          >
            <h4>ABOUT</h4>
          </Link>
          <Link
            href={"#"}
            className="block p-2 text-white-accent/85 hover:text-red-bold transition-colors duration-300 ease-in-out"
          >
            <h4>SERMONS</h4>
          </Link>
          <Link
            href={"#"}
            className="block p-2 text-white-accent/85 hover:text-red-bold transition-colors duration-300 ease-in-out"
          >
            <h4>PUBLICATIONS</h4>
          </Link>
          <Link
            href={"#"}
            className="block p-2 text-white-accent/85 hover:text-red-bold transition-colors duration-300 ease-in-out"
          >
            <h4>EVENTS</h4>
          </Link>
          <Link
            href={"#"}
            className="block p-2 text-white-accent/85 hover:text-red-bold transition-colors duration-300 ease-in-out"
          >
            <h4>TESTIMONIES</h4>
          </Link>
          <Link
            href={"#"}
            className="block p-2 text-white-accent/85 hover:text-red-bold transition-colors duration-300 ease-in-out"
          >
            <h4>CONTACT US</h4>
          </Link>
          <Link
            href={"#"}
            className="group block text-white-accent p-2 px-4 bg-red-bold rounded-full"
          >
            <h4 className="group-hover:text-white-accent/30 transition-colors duration-300 ease-in-out">
              GIVE
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
