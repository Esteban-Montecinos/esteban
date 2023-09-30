"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  User,
} from "@nextui-org/react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { cv } from "../../constants";
export default function UserAvatar() {
  return (
    <Dropdown
      showArrow
      classNames={{
        arrow: "bg-default-200",
      }}
    >
      <DropdownTrigger>
        <User
          isFocusable
          className="p-2 transition-colors rounded-full cursor-pointer bg-zinc-800 hover:bg-zinc-700"
          name="Esteban Montecinos"
          description="Ingeniero en Informática"
          avatarProps={{
            src: "https://github.com/Esteban-Montecinos.png",
          }}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="links a mis redes" variant="flat">
        <DropdownItem key="github">
          <Link
            color="foreground"
            className="flex flex-row items-center w-full"
            href="https://github.com/Esteban-Montecinos"
            size="sm"
            isExternal
          >
            <IconBrandGithub className="w-4 h-4 mr-2" />
            GitHub
          </Link>
        </DropdownItem>
        <DropdownItem key="linkedin">
          <Link
            color="foreground"
            className="flex flex-row items-center w-full"
            href="https://www.linkedin.com/in/esteban-montecinos/"
            size="sm"
            isExternal
          >
            <IconBrandLinkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Link>
        </DropdownItem>
        <DropdownItem key="cv">
          <Link
            color="foreground"
            className="flex flex-row items-center w-full"
            href={cv}
            size="sm"
            isExternal
          >
            <IconFileCv className="w-4 h-4 mr-2" />
            Curriculum Vitae
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
