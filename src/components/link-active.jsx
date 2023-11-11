"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavigationList({ href, name }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "dark:text-white text-black font-normal underline" : "dark:text-zinc-200 text-zinc-600 font-light"
      } text-lg text-inherit dark:hover:text-white hover:text-black`}
    >
      {name}
    </Link>
  );
}
