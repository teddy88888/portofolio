import { Card, CardContent, CardHeader } from "@/components/ui/card";

const strengths = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
];

const weaknesses = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
];

function ComparisonCard({
  title,
  image,
  items,
  positive,
}: {
  title: string;
  image: string;
  items: string[];
  positive: boolean;
}) {
  return (
    <Card className="w-full bg-orange-300 py-4 sm:bg-orange-300">
      <CardHeader className="text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <img
          src={image}
          alt=""
          className="mx-auto mt-4 h-10 w-10 rounded-full object-cover"
        />
      </CardHeader>

      <CardContent>
        {items.map((item, index) => (
          <div
            key={item}
            className={`flex items-start gap-3 py-3 ${
              index !== items.length - 1 ? "border-b-2 border-gray-300" : ""
            }`}
          >
            <img
              src={positive ? "/Frame.png" : "/grame.png"}
              alt=""
              className="mt-1 h-6 w-6 shrink-0 object-contain"
            />
            <p className="font-bold text-gray-800">{item}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function Experience() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex h-9 items-center rounded-xl border border-black px-4 font-bold text-black">
            Superiority
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Built with design, speed, and UX in mind.
          </h2>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <ComparisonCard
            title="Working with me"
            image="/tedy.png"
            items={strengths}
            positive
          />
          <ComparisonCard
            title="Another Developer"
            image="/Profily.png"
            items={weaknesses}
            positive={false}
          />
        </div>

        <div className="mx-auto mt-8 flex h-12 w-full max-w-5xl items-center justify-center rounded-2xl bg-blue-400 text-xl font-extrabold text-white">
          Hire Me
        </div>
      </div>
    </section>
  );
}
