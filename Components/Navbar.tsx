import React from "react";
import Link from "next/link";
type Props = {};

function Navbar({}: Props) {
  return (
    <header className="w-full p-3 shadow-md sticky top-0 backdrop-blur-sm bg-white/70">
      <nav>
        <Link
          href={"/"}
          className="hover:shadow-md border border-gray-200 transition-all duration-200 p-2 rounded-lg "
        >
          Home
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
