import { GraduationCap, BadgeCheck, type LucideIcon } from "lucide-react";

const credentials: { label: string; sublabel: string; Icon: LucideIcon }[] = [
  { label: "MBA", sublabel: "UCLA Anderson School of Management", Icon: GraduationCap },
  { label: "CFA Level I", sublabel: "CFA Institute", Icon: BadgeCheck },
];

const tools: { label: string; logo: React.ReactNode }[] = [
  {
    label: "Figma",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="h-6 w-auto object-contain" />
    ),
  },
  {
    label: "Notion",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="h-6 w-6 object-contain" />
    ),
  },
  {
    label: "Cursor",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://cursor.com/favicon.ico" alt="Cursor" className="h-6 w-6 object-contain rounded" />
    ),
  },
  {
    label: "Claude Code",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="https://anthropic.com/favicon.ico" alt="Claude Code" className="h-6 w-6 object-contain rounded" />
    ),
  },
  {
    label: "SQL",
    logo: (
      <span className="h-6 w-6 flex items-center justify-center rounded bg-ink text-paper text-[8px] font-bold tracking-wide flex-shrink-0">SQL</span>
    ),
  },
];

export default function CredentialsTools() {
  return (
    <section className="bg-paper py-16 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">

        <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">What I Bring</span>
        <h2 className="font-serif text-3xl font-bold text-ink mt-2 mb-1">Credentials & Tools</h2>
        <p className="text-ink/50 mb-10">The foundation behind every product decision</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">

          {/* Credentials — 1 col */}
          <div className="border-t border-ink/10 pt-5 pb-6">
            <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-4">Credentials</p>
            <div className="flex flex-col gap-4">
              {credentials.map(({ label, sublabel, Icon }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={22} className="flex-shrink-0 text-navy mt-0.5" strokeWidth={1.75} />
                  <div>
                    <p className="text-sm font-semibold text-ink leading-snug">{label}</p>
                    <p className="text-xs text-ink/45 mt-0.5">{sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools — 2 cols */}
          <div className="md:col-span-2 border-t border-ink/10 pt-5 pb-6">
            <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-4">Tools</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8">
              {tools.map(({ label, logo }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="h-6 w-6 flex items-center justify-center flex-shrink-0">
                    {logo}
                  </div>
                  <span className="text-sm font-medium text-navy">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
