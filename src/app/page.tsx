import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

import { PiCrossThin, PiBookOpenThin, PiChurchThin } from "react-icons/pi";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full h-screen">
        <Image
          src={"/hero1.jpg"}
          alt="Hero 1"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 via-royal-blue/50 to-white-accent/5"></div>

        <div className="relative z-10 container mx-auto px-6 text-center md:pt-20 flex flex-col justify-center items-center h-full">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-poppins text-sm lg:text-xl font-bold text-red-bold leading-none mb-6 uppercase tracking-widest">
              Welcome to COLCI
            </h1>

            <p className="text-lg md:text-2xl text-white-accent/80 max-w-2xl mx-auto mb-10 leading-relaxed font-poppins font-[500]">
              Raising a generation of end-time believers that are manifesting
              <span className="block text-3xl md:text-5xl my-2 font-semibold text-white-accent">
                THE GLORY OF GOD
              </span>{" "}
              in all spheres of life!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="border border-red-bold bg-red-bold text-white-accent text-sm hover:bg-red-bold/60 font-bold px-9 py-4 text rounded-full transition-colors uppercase"
            >
              Become a Member
            </Link>
            {/* <Link
              href="#"
              className="border border-gold-accent text-gold-accent bg-white hover:bg-gold-accent/0 hover:text-white font-semibold px-8 py-2 text-lg rounded-xl transition-colors"
            >
              View Our Work
            </Link> */}
          </div>
        </div>
      </div>

      <div className="relative w-full bg-white px-5 md:px-10 lg:flex justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
          <div className="space-y-2">
            <div className="flex flex-col space-y-1">
              <PiCrossThin className="size-15" />
              <h3 className="font-poppins font-bold text-dark-gray text-2xl uppercase">Jesus</h3>
              <h4 className="font-poppins font-[300] text-red-bold text-sm">We are Christ-centric</h4>
              <div className="w-[55px] border-t border-t-red-bold mt-2"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col justify-start">
              <PiBookOpenThin className="size-15"  />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col justify-start">
              <PiChurchThin className="size-15" />
            </div>
          </div>
        </div>
        <div className="bg-red-bold px-10 py-27  lg:mt-[-52] lg:max-w-[33%]">
          <h1 className="font-poppins font-semibold text-2xl text-white-accent mb-5">
            And when Christ, who is your life, is revealed to the whole world,
            you will share in all his glory.
          </h1>
          <h2 className="font-playfair-display text-white-accent/90 text-right text-lg font-semibold">- Colossians 3:4 (NLT)</h2>
        </div>
      </div>
    </div>
  );
}
