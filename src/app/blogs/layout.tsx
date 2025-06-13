import { ReactNode } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-fit flex flex-col items-center bg-black text-white font-averta">
      <div className="w-[80vw] sm:w-[60vw] ">{children}</div>
      {/* <CartButton></CartButton> */}
    </div>
  );
}
