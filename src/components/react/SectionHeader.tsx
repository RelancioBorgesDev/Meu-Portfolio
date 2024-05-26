import Button from "./Button";

interface SectionHeaderProps {
  title: string;
  hasAll: boolean;
  link?: string;
}

export default function SectionHeader({
  title,
  hasAll,
  link,
}: SectionHeaderProps) {
  return (
    <header className="border-b-2 border-slate-700/40 flex pb-2 items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-4xl font-bold">{title}</span>
      </div>
      {hasAll && (
        <a href={link}>
          <Button label="Ver Todos" />
        </a>
      )}
    </header>
  );
}
