import Image from "next/image";
import profile from "../../public/profile.png";
import { div, nav } from "motion/react-client";
import menu from "../../public/menu.png";
export default function navbar() {
  return (
    <nav className="sticky p-4 ">
      <div className="flex items-center space-x-4">
        <div>
          <Image
            src="/profile.png" // Next.js otomatis melihat ke folder public
            alt="Profile"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h1 className="text-amber-50 ">Teddy</h1>
        </div>
        <div className="ml-auto">
          <Image 
            src="/menu.png" 
            alt="menu"           
            width={20}
            height={20}
          />
        </div>
      </div>      
    </nav>
  );
}
