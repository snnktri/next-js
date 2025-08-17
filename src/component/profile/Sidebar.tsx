'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
    const route = useRouter();

    // state management
    const handleClick = () => {
        route.push("/network");
    }
  return (
    <div className="w-full space-y-8">
      <button className="w-14 h-14 border-2 border-[#dfdfdf] bg-[#f7f7f7]
     rounded-full flex items-center justify-center cursor-pointer"
     onClick={handleClick}>
        <svg
          width="19"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 15L1 8L8 1"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="border-y-1 border-[#AEAEAE] py-4 w-4/5
      flex flex-col justify-center items-start gap-y-4">
        {/* navLink */}
        <Link href="#" className="text-[14px] font-medium">Activities</Link>
        <Link href="#" className="text-[14px] font-medium">Account Settings</Link>
        <Link href="#" className="text-[14px] font-medium">Contributions</Link>
        <Link href="#" className="text-[14px] font-medium">Help Center</Link>
      </div>
    </div>
  );
};

export default Sidebar;
