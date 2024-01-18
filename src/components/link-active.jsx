"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function NavigationList({ href, name }) {
  const [mount, setMount] = useState(false)
  useEffect(() => {
    setMount(true)
    
  }, [])

  
  const pathname = usePathname();
  
  const isActive = `/${pathname.split('/')[1]}` === href;
  
  if (!mount) {
    return <Skeleton className="w-20 rounded-lg bg-zinc-200 dark:bg-zinc-700">
    <div className="w-full px-4 py-2 rounded h-[37px] "></div>
  </Skeleton>
  }
  
  return (
    <Link
      href={href}
      className={`${
        isActive ? "dark:text-white text-black font-normal dark:bg-zinc-700 bg-zinc-300" : "bg-zinc-100 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700  dark:hover:text-white hover:text-black dark:text-zinc-200 text-zinc-600"
      } text-lg px-4 py-2 transition-colors rounded font-light`}
    >
      {name}
    </Link>
  );
}
