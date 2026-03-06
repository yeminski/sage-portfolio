import { experiences } from "@/data/content";

export default function KeyExperiences() {
  return (
    <section id="experience" className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-ink mb-2">Key Experiences</h2>
        <p className="text-ink/60 mb-12">
          A snapshot of where I&apos;ve worked and what I&apos;ve built.
        </p>

        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group border border-gray-200 rounded-lg p-6 hover:border-l-4 hover:border-l-accent transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-ink">
                  {exp.company}
                </h3>
                <span className="text-sm text-ink/50 mt-1 sm:mt-0">
                  {exp.tenure}
                </span>
              </div>
              <p className="text-sm font-medium text-accent mb-4">{exp.role}</p>
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm text-ink/70 flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={`#experience`}
                className="text-sm font-medium text-accent hover:underline"
              >
                View Full Experience →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
