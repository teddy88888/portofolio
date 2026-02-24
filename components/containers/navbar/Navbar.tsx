import Image from "next/image";

export default function navbar() {
  return (
    <nav className="sticky p-4 absolute top-0 z-10 bg-purple-950/50 backdrop-blur-sm w-full">
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
        <div className="text-xl hidden md:flex gap-20 ml-150 ">
          <button>
            <h1 className="text-amber-50 hover:text-2xl">Home</h1>
          </button>
          <button>
            <h1 className="text-amber-50 hover:text-2xl">About</h1>
          </button>
          <button>
            <h1 className="text-amber-50 hover:text-2xl">Skill</h1>
          </button>
          <button>
            <h1 className="text-amber-50 hover:text-2xl">Project</h1>
          </button>
          <button>
            <h1 className="text-amber-50 hover:text-2xl">FAQ</h1>
          </button>
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
