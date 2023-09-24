import { Montserrat, Lato, Open_Sans } from "next/font/google";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const mons = Montserrat({ subsets: ["latin"], display: "swap" });
const lato = Lato({ subsets: ["latin"], display: "swap", weight: "400" });
const o_sans = Open_Sans({ subsets: ["latin"], display: "swap" });

function InfoCard({ icon, title, delta, gross }) {
  let [profileExists, setProfileExists] = useState(false);

  return (
    <>
      <div className="flex flex-col border-2 rounded-xl p-2 drop-shadow-xl bg-white w-64 h-32">
        <Image
          src={`/images/${icon}.svg`}
          width={35}
          height={35}
          className=" bg-white"
        />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col pr-8">
            <span className={` ${lato.className} `}>{title}</span>
            <span className={` ${o_sans.className} font-bold text-2xl`}>
              {gross}
            </span>
          </div>
          <div className="flex justify-end items-end">
            <span className="h-max bg-green-100 rounded-full text-sm text-green-500 font-semibold p-1 w-14 text-center">
              +{delta}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function Icon({ src }) {
  return (
    <>
      <div className="w-8 h-8">
        <Image src={src} width={30} height={30} className="p-1" />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main className="flex flex-row p-10 h-screen">
      {/*sidebar*/}
      <section className=" bg-blue-500 text-white rounded-3xl  w-max flex flex-col justify-between ">
        {/* Nav options*/}
        <div className={`pl-12  pr-20 ${mons.className}`}>
          <h1
            className={`text-white ${mons.className} font-bold text-4xl pb-14 pt-14 `}
          >
            Board.
          </h1>
          <ul className="text-xl w-max">
            <li className="flex flex-row pb-10 font-bold ">
              <span className="pr-5">
                <Icon src="/images/dashboard_icon.svg" />
              </span>
              <span>Dashboard</span>
            </li>
            <li className="flex flex-row pb-10">
              <span className="pr-5">
                <Icon src="/images/transaction_icon.svg" />
              </span>
              <span>Transactions</span>
            </li>
            <li className="flex flex-row pb-10">
              <span className="pr-5">
                <Icon src="/images/schedule_icon.svg" />
              </span>
              <span>Schedules</span>
            </li>
            <li className="flex flex-row pb-10">
              <span className="pr-5">
                <Icon src="/images/user_icon.svg" />
              </span>
              <span>Users</span>
            </li>
            <li className="flex flex-row pb-10">
              <span className="pr-5">
                <Icon src="/images/setting_icon.svg" />
              </span>
              <span>Settings</span>
            </li>
          </ul>
        </div>
          <div className={`${mons.className} text-sm flex flex-col pl-12 pb-14 gap-5`}>
            <span>Help</span>
            <span>Contact Us</span>
          </div>
        {/* footer section*/}
      </section>

      {/* Dashboard*/}
      <section className="flex flex-col pl-16">
        {/* Card row */}
        <h1 className={`${mons.className} font-bold text-4xl`}> Dashboard</h1>
        <div className="flex flex-row gap-5">
          <InfoCard
            icon={"revenue"}
            title={"Total Revenues"}
            delta={"2.5%"}
            gross={"$2,129,430"}
          />
          <InfoCard
            icon={"transaction"}
            title={"Total Transactions"}
            delta={"1.7%"}
            gross={"1,520"}
          />
          <InfoCard
            icon={"likes"}
            title={"Total Likes"}
            delta={"1.4%"}
            gross={"9,721"}
          />
          <InfoCard
            icon={"users"}
            title={"Total Users"}
            delta={"4.2%"}
            gross={"9,721"}
          />
        </div>
        {/* Activities */}
        <div className="h-10"></div>
        <div className="w-full h-[300px] p-4 bg-green-300 rounded-3xl">
          <div className="w-full h-full bg-green-100  ">Activities</div>
        </div>
        {/* Bottom section */}
        <div className="pt-10 flex flex-row bg-red-50 ">
          <div className="flex flex-col border-2 rounded-xl w-max h-max p-6 pl-10 drop-shadow-xl bg-white flex-1 justify-evenly">
            {/* Top products*/}
            <span className={`${mons.className} font-bold text-xl`}>
              Top Products
            </span>
            <div className="flex flex-row">
              <div className=""></div>
              <div>
                <div className="bg-red-50 w-40 h-40 rounded-full bg-gradient-conic from-red-600 to-blue-600">
                  {" "}
                </div>
              </div>
              <div>
                {/* Legends */}

                <ul>
                  <li>
                    <div className="flex flex-row pb-4">
                      <div className="p-1">
                        <div className="bg-green-200 w-3 h-3 rounded-full"></div>
                      </div>
                      <div className="flex flex-col justify-start ">
                        <span
                          className={`${mons.className} font-bold text-sm `}
                        >
                          Basic Tees
                        </span>
                        <span className="text-[#858585] text-xs">55%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row pb-4">
                      <div className="p-1">
                        <div className="bg-yellow-200 w-3 h-3 rounded-full"></div>
                      </div>
                      <div className="flex flex-col justify-start p-0">
                        <span
                          className={`${mons.className} font-bold text-sm `}
                        >
                          Custom Short Pants
                        </span>
                        <span className="text-[#858585] text-xs">31%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row pb-4">
                      <div className="p-1">
                        <div className="bg-red-200 w-3 h-3 rounded-full"></div>
                      </div>
                      <div className="flex flex-col justify-start p-0 ">
                        <span
                          className={`${mons.className} font-bold text-sm `}
                        >
                          Super Hoodies
                        </span>
                        <span className="text-[#858585] text-xs">14%</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pl-10"></div>
          {/* Profile */}
          <div className="flex-1">
            <div className="flex flex-col border-2 rounded-xl w-full h-full  drop-shadow-xl bg-white justify-center items-center">
              <div className="flex flex-col w-max h-max items-center ">
                <Image
                  src={`/images/profile_add.svg`}
                  width={70}
                  height={70}
                  className=" bg-white pb-4"
                />
                <span className="text-gray-500">Add Profile</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
