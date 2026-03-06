import { type FullExperience } from "@/data/content";

interface Props {
  experience: FullExperience;
  index: number;
}

export default function ExperienceEntry({ experience, index }: Props) {
  const initials = experience.company
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <article
      id={experience.slug}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-6 w-4 h-4 rounded-full bg-accent ring-4 ring-paper" />

      <div className="border border-gray-200 rounded-xl bg-paper overflow-hidden hover:border-accent transition-colors duration-200">
        {/* Card header */}
        <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50">
          <div className="flex items-start gap-4">
            {/* Company initials badge */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-sm font-bold text-accent">{initials}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h2 className="text-xl font-bold text-ink leading-snug">
                  {experience.company}
                </h2>
                <span className="text-sm text-ink/40 whitespace-nowrap">
                  {experience.tenure}
                </span>
              </div>
              <p className="text-accent font-medium text-sm mt-0.5">
                {experience.role}
              </p>
              <p className="text-xs text-ink/40 mt-0.5">{experience.location}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card body */}
        <div className="p-6 md:p-8 flex flex-col gap-8">
          {/* Top row: Context + My Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <SectionLabel>Context</SectionLabel>
              <p className="text-sm text-ink/70 leading-relaxed">
                {experience.context}
              </p>
            </div>
            <div>
              <SectionLabel>My Role</SectionLabel>
              <p className="text-sm text-ink/70 leading-relaxed">
                {experience.myRole}
              </p>
            </div>
          </div>

          {/* Middle row: Key Decisions + Systems & Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <SectionLabel>Key Decisions</SectionLabel>
              <ul className="space-y-3">
                {experience.keyDecisions.map((decision, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-ink/70 leading-relaxed"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>Systems &amp; Data</SectionLabel>
              <ul className="space-y-3">
                {experience.systemsData.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-ink/70 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Impact */}
          <div className="rounded-lg bg-accent/5 border border-accent/20 p-5">
            <SectionLabel>Business Impact</SectionLabel>
            <ul className="space-y-2">
              {experience.businessImpact.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-ink/70 leading-relaxed"
                >
                  <span className="mt-1 text-accent font-bold text-base leading-none flex-shrink-0">
                    ↑
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned — full width */}
          <div className="border-t border-gray-100 pt-6">
            <SectionLabel>What I Learned</SectionLabel>
            <p className="text-sm text-ink/70 leading-relaxed max-w-3xl">
              {experience.whatILearned}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-2">
      {children}
    </p>
  );
}
