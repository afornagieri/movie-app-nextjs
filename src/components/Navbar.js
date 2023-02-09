import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-700">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/" legacyBehavior>
          <a className="text-base md:text-2xl">Movie
            <span className="text-red-600">App</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};