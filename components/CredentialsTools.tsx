import { GraduationCap, BadgeCheck } from "lucide-react";

const credentials = [
  {
    label: "MBA",
    logo: <GraduationCap size={56} className="text-ink/60" strokeWidth={1.5} />,
  },
  {
    label: "CFA Level I",
    logo: <BadgeCheck size={48} className="text-ink/60" strokeWidth={1.5} />,
  },
];

const tools = [
  {
    label: "Figma",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
        alt="Figma"
        className="h-12 w-auto object-contain"
      />
    ),
  },
  {
    label: "Notion",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
        alt="Notion"
        className="h-12 w-12 object-contain"
      />
    ),
  },
  {
    label: "Cursor",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://cursor.com/favicon.ico"
        alt="Cursor"
        className="h-12 w-12 object-contain rounded-lg"
      />
    ),
  },
  {
    label: "Claude Code",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://anthropic.com/favicon.ico"
        alt="Claude Code"
        className="h-12 w-12 object-contain rounded-lg"
      />
    ),
  },
  {
    label: "SQL",
    logo: (
      <div className="h-12 px-4 rounded-lg bg-ink flex items-center justify-center">
        <span className="text-sm font-bold text-paper tracking-wide">SQL</span>
      </div>
    ),
  },
];

function ItemCol({ label, logo }: { label: string; logo: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="h-12 flex items-center justify-center">{logo}</div>
      <span className="text-sm text-ink/50 text-center max-w-[96px] leading-snug">{label}</span>
    </div>
  );
}

export default function CredentialsTools() {
  return (
    <section className="bg-paper pt-12 pb-16 border-t border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section title */}
        <h2 className="text-3xl font-bold text-ink mb-1">What I Bring</h2>
        <p className="text-ink/50 mb-10">Credentials and tools that back up the work</p>

        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0">

          {/* Credentials */}
          <div className="flex-1 bg-gray-50 rounded-xl p-6">
            <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-8">
              Credentials
            </p>
            <div className="flex gap-14">
              {credentials.map(({ label, logo }) => (
                <ItemCol key={label} label={label} logo={logo} />
              ))}
            </div>
          </div>

          {/* Gap between panels */}
          <div className="hidden md:block w-4 flex-shrink-0" />
          <div className="block md:hidden h-4" />

          {/* Tools */}
          <div className="flex-[2] bg-accent/5 rounded-xl p-6">
            <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-8">
              Tools
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              {tools.map(({ label, logo }) => (
                <ItemCol key={label} label={label} logo={logo} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
