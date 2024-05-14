import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex bg-primary-600 w-fit h-screen">
      <div className="flex flex-col items-center gap-[40px] pt-[30px] pl-[25px]">
        <div className=" relative w-[40px] aspect-square">
          <Image
            src="/assets/svg/logoico.svg"
            alt="logo"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="space-y-[50px]">
          <div className="relative px-[37px] py-[19px] bg-primary-800 rounded-l-lg cursor-pointer ">
            <Image
              src="/assets/svg/homeico.svg"
              alt="icon"
              width={20}
              height={20}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative px-[37px] py-[19px] rounded-l-lg cursor-pointer ">
            <Image
              src="/assets/svg/calendarico.svg"
              alt="icon"
              width={20}
              height={20}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative px-[37px] py-[19px] rounded-l-lg cursor-pointer ">
            <Image
              src="/assets/svg/chartico.svg"
              alt="icon"
              width={20}
              height={20}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative px-[37px] py-[19px] rounded-l-lg cursor-pointer ">
            <Image
              src="/assets/svg/serverico.svg"
              alt="icon"
              width={20}
              height={20}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative px-[37px] py-[19px] rounded-l-lg cursor-pointer ">
            <Image
              src="/assets/svg/settingsico.svg"
              alt="icon"
              width={20}
              height={20}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
