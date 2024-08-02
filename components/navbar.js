import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/white-logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bgblur shadow-md">
      <div className="mx-auto px-4 py-1 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 font-medium uppercase text-white">
          {/* Nav Links (Left) */}
          <div className="flex text-sm items-center space-x-4">
            <Link href="/meals" className="nav-btn from-left" tabIndex={0}>
              Menu
            </Link>
            <Link href="/community" className="nav-btn from-lefte" tabIndex={0}>
              Community
            </Link>
          </div>

          {/* Logo (Center) */}
          <div className="flex-1 text-center">
            <Link href="/">
              <Image src={logoImg} className="w-16 h-18 mx-auto" alt="Logo" />
            </Link>
          </div>

          {/* Buttons (Right) */}
          <div className="flex items-center space-x-4">
            <button className="bg-yellow px-4 py-2 rounded-full font-bold uppercase text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
