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
        isActive ? "text-white font-light" : "text-zinc-200 font-extralight"
      } text-lg text-inherit hover:text-white hover:underline`}
    >
      {name}
    </Link>
  );
}
