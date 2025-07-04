import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex fixed -top-0 left-0 right-0 h-16 justify-end p-4 bg-white shadow-xs z-[500]">
      <span className="flex absolute -top-10 left-4">
        <Image
          className="dark:invert max-h-48"
          src="/logo.png"
          alt="Next.js logo"
          width={150}
          height={8}
          priority
        />
      </span>
      <ul className="flex items-center gap-4 text-sm">
        <li className="hover:bg-neutral-100 px-3 py-2  rounded-md  cursor-pointer ">
          Places
        </li>
        <li className="hover:bg-neutral-100 px-3 py-2  rounded-md  cursor-pointer ">
          Solutions
        </li>
        <li className="hover:bg-neutral-100 px-3 py-2  rounded-md  cursor-pointer ">
          Community
        </li>
        <li className="hover:bg-neutral-100 px-3 py-2  rounded-md  cursor-pointer ">
          Resources
        </li>
        <li className="hover:bg-neutral-100 px-3 py-2  rounded-md  cursor-pointer ">
          Pricing
        </li>
        <li className="hover:bg-neutral-100 px-3 py-2  rounded-md  cursor-pointer ">
          Contact
        </li>

        <li className="flex bg-neutral-100 px-3  cursor-pointer rounded-md py-2 text-sm text-black hover:underline">
          Sign in
        </li>
        <li className="flex bg-cyan-600    px-3  cursor-pointer rounded-md py-2 text-sm text-neutral-50 hover:underline">
          Register
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
