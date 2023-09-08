
"use client";

import React from "react";
import { IconType } from "react-icons";
import { GoHomeFill } from "react-icons/go";
import { TfiYoutube } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { BsCollectionPlayFill } from "react-icons/bs";
import { PiMonitorPlayThin } from "react-icons/pi";
import {SiAirplayvideo} from 'react-icons/si';
import {LuMusic2} from 'react-icons/lu';

// import { useRouter } from 'next/router';
import Link from 'next/link'


interface MenuItem {
  id: number;
  icon: IconType;
  text: string;
  pathname: string;
}
const MenuItems: Array<MenuItem> = [
  {
    id: 1,
    icon: GoHomeFill,
    text: "Home",
    pathname: "/",
  },
  {
    id: 2,
    icon: TfiYoutube,
    text: "Shorts",
    pathname: "/shorts",
  },
  {
    id: 3,
    icon: BsCollectionPlayFill,
    text: "Subscriptions",
    pathname: "/subscriptions",
  },
  {
    id: 4,
    icon: PiMonitorPlayThin,
    text: "Library",
    pathname: "/library",
  },
  {
    id: 5,
    icon: SiAirplayvideo,
    text: "Originals",
    pathname: "/originals",
  },
  {
    id: 6,
    icon: LuMusic2,
    text: "Music",
    pathname: "/music",
  },
];

function SideBar() {
  const  pathname = usePathname();
  // const router = useRouter();
  // console.log("Here is pathname", pathname);

  // const handleItemClick = (item: MenuItem) => {
  //   router.push(item.pathname);
  // };
  return (
    
    <div className='p-[1px] lg:w-[200px] md:w-[200px] lg:px-2 md:p-2'>
      {MenuItems.map((item) => (
        <Link href={item.pathname} key={item.id}>
        <div  
        className={`flex flex-col lg:flex-row md:flex-row gap-4 lg:gap-4 md:gap-4 lg:py-2 lg:px-2 items-center hover:bg-zinc-700 rounded
        cursor-pointer {item.pathname === pathname && "bg-zinc-700 hover:bg-zinc-700"}`}>
          <item.icon size={22} /> 
          <span className="text-xs lg:text-base">{item.text}</span>
        </div> 
        </Link>
      ))}
    </div>
    
  );
};

export default SideBar
