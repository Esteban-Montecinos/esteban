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
        isActive ? "text-zinc-50 font-medium" : "text-zinc-200"
      } text-sm text-inherit`}
    >
      {name}
    </Link>
  );
}
