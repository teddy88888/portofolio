const skills = [
  { level: 90, icon: "/assets/htmllabel.png" },
  { level: 90, icon: "/assets/csslabel.png" },
  { level: 90, icon: "/assets/jslabel.png" },
  { level: 90, icon: "/assets/reactlabel.png" },
  { level: 78, icon: "/assets/mongo.png" },
  { level: 78, icon: "/assets/docker.png" },
  { level: 78, icon: "/assets/expressjs.png" },
  { level: 75, icon: "/assets/postgresql.png" },
];

function SkillCard({ level, icon }: { level: number; icon: string }) {
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[28px] bg-white p-5 shadow-lg transition-transform hover:scale-[1.02] sm:p-7">
      <div className="relative mb-5 h-32 w-32 sm:h-36 sm:w-36">
        <svg className="h-full w-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#F3F4F6"
            strokeWidth="12"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#FBBF24"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-[#1F2937]">{level}%</span>
        </div>
      </div>

      <img src={icon} alt="" className="h-auto w-full max-w-[150px] object-contain" />
    </div>
  );
}

export default function Skillset() {
  return (
    <section className="w-full overflow-hidden bg-blue-400 py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex h-10 items-center rounded-2xl border border-white px-4 font-bold text-white">
            skillset
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-100 sm:text-4xl">
            Skills That Build Great Interfaces
          </h2>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} level={skill.level} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
