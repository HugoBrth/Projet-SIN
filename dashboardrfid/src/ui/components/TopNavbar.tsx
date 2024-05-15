import React from "react";
import { Typographie } from "../design-system/typographie/Typogarphie";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <div className="  flex items-center px-4 mx-2 py-2 justify-between border-b border-b-grey">
      <form className="flex items-center max-w-[250px] bg-[#323232] rounded-xl px-4 py-3 gap-2">
        <IoIosSearch color="white" size={20} />
        <input
          className="text-small w-full bg-transparent border-none outline-none text-white font-normal"
          type="text"
          placeholder="Search here..."
        />
      </form>

      <Typographie variant="h4" theme="white">
        DashBoard | Home
      </Typographie>

      <div className="flex items-center gap-4">
        <div>
          <Typographie variant="tiny"  className="font-normal">
            Boularand Killian | Admin
          </Typographie>
          <Typographie variant="tiny" className="font-normal" theme="grey">

            killian.boularand@icloud.com
          </Typographie>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative overflow-hidden  w-[40px] aspect-square rounded-full">
                <Image src="/assets/img/pp.png" alt="pp"  fill style={{objectFit: 'cover', objectPosition: "center" }} />
            </div>
            <FaChevronDown color="white" size={15} />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
