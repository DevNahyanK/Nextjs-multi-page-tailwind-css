import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <header className="text-gray-200 body-font bg-[#093e6c]"> 
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"> 
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
               className="w-14 h-auto"  
            src="/Nahyan sports logo.webp"
            width={2000}
            height={2000}
            alt="Logo"
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">Our Gallary</Link>
          <Link href="/Bats" className="mr-5 hover:text-gray-900">Bats</Link>
          <Link href="/jersey" className="mr-5 hover:text-gray-900">Jersey</Link>
          <Link href="/other" className="mr-5 hover:text-gray-900">Other Items</Link>
        </nav>
      </div>
    </header>
  );
}
