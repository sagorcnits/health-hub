"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../images/logo.png";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="py-4 bg-darkGreen px-4 md:px-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={30} />
          <h1 className="text-[#F7A582] font-Source_Sans">
            HEALTH<span className="text-white">HUB</span>
          </h1>
        </div>
        <ul className=" items-center gap-10 text-[#F3F3F3]  font-Source_Sans hidden md:flex">
          <li className={`${pathName == "/" && "active"}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${pathName == "/about" && "active"}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`${pathName == "/appointment" && "active"}`}>
            <Link href="/appointment">Appointment</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
        <button className="button md:hidden block">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
