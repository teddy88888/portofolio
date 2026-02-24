import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { main } from "framer-motion/client";

export default function Experience() {
  return (
    <main className=" bg-white w-100 md:w-320 scale-100 md:scale-130 h-350 md:h-250 flex flex-col items-center ">
      <button className="mt-8 text-black font-bold bg-white-400 hover:bg-gray-100 h-8 w-30 border border-black rounded-xl flex items-center justify-center">
        Superiority
      </button>
      <h1 className="text-2xl font-extrabold text-gray-800 mt-4 flex items-center justify-center text-center w-80">
        Built with design, speed, and UX in mind.
      </h1>
      <div className="md:flex gap-10 mt-12">
        <Card className="w-95 md:w-150 mt-12 py-4 bg-orange-300">
          <CardHeader className="text-center ">
            <h2 className="text-xl font-bold text-gray-800">Working with me</h2>
            <img
              src="/profile.png"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover mx-auto mt-4"
            />
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex col col border-b-2 border-gray-300 pb-4">
              <img src="/Frame.png" alt="frame" />
              <p className="px-4 font-bold mt-1 mb-2 ">React Expert</p>
            </div>
            <div className="flex col col border-b-2 border-gray-300 pb-4 mt-2">
              <img src="/Frame.png" alt="frame" />
              <p className="px-4 font-bold mt-1 mb-2 ">
                Precise Website Implementation
              </p>
            </div>
            <div className="flex col col border-b-2 border-gray-300 pb-4 mt-2">
              <img src="/Frame.png" alt="frame" />
              <p className="px-4 font-bold mt-1 mb-2 ">
                TypeScript Proficiency
              </p>
            </div>
            <div className="flex col col border-b-2 border-gray-300 pb-4 mt-2">
              <img src="/Frame.png" alt="frame" />
              <p className="px-4 font-bold mt-1 mb-2 ">
                Clean, Maintainable Code
              </p>
            </div>
            <div className="flex col col border-b-2 border-gray-300 pb-4 mt-2">
              <img src="/Frame.png" alt="frame" />
              <p className="px-4 font-bold mt-1 mb-2 ">
                Responsive Website Development
              </p>
            </div>
            <div className="flex col col  pb-4 mt-2">
              <img src="/Frame.png" alt="frame" />
              <p className="px-4 font-bold mt-1 mb-2 ">
                UI Design Proficiency (Figma)
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-95 md:w-150 mt-12 py-4 bg-gray-100">
          <CardHeader className="text-center ">
            <h2 className="text-xl font-bold text-gray-800">
              Another Developer
            </h2>
            <img
              src="/Profily.png"
              alt="profily"
              className="w-10 h-10 rounded-full object-cover mx-auto mt-4"
            />
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex col col border-b-2 border-gray-300 pb-4">
              <img src="/grame.png" alt="grame" />
              <p className="px-4 font-bold mt-1 mb-2 ">Basic React Knowledge</p>
            </div>
            <div className="flex col col border-b-2 border-gray-300 pb-4 mt-2">
              <img src="/grame.png" alt="grame" />
              <p className="px-4 font-bold mt-1 mb-2 ">
                Inconsistent Design Translation
              </p>
            </div>
            <div className="flex col col border-b-2 border-gray-300 pb-4 mt-2">
              <img src="/grame.png" alt="grame" />
              <p className="px-4 font-bold mt-1 mb-2 ">
                Little to No TypeScript Knowledge
              </p>
            </div>
            <div className="flex col col border-b-2 border-gray-300 pb-4 mt-2">
              <img src="/grame.png" alt="grame" />{" "}
              <p className="px-4 font-bold mt-1 mb-2 ">Unstructured Code</p>
            </div>
            <div className="flex col col border-b-2 border-gray-300 pb-4 mt-2">
              <img src="/grame.png" alt="grame" />
              <p className="px-4 font-bold mt-1 mb-2 ">
                Inconsistent Responsiveness
              </p>
            </div>
            <div className="flex col col  pb-4 mt-2">
              <img src="/grame.png" alt="grame" />
              <p className="px-4 font-bold mt-1 mb-2 ">No Design Skills</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <h1 className="text-xl font-extrabold rounded-2xl rounded-2 bg-blue-400 text-gray-50 mt-8 flex items-center justify-center text-center w-90 md:w-315 h-10">
        Hire Me
      </h1>
    </main>
  );
};
    