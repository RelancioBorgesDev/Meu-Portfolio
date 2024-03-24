import type { ElementType } from "react";
import Button from "./Button";

interface SectionHeaderProps {
  title: string;
  icon: ElementType;
  hasAll: boolean;
  link?: string;
}

export default function SectionHeader({
  title,
  hasAll,
  icon: Icon,
  link,
}: SectionHeaderProps) {
  return (
    <header className="border-b-2 py-2 border-slate-700/40 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon size={32} />
        <span className="text-xl">{title}</span>
      </div>
      {hasAll && (
        <a href={"#"}>
          <Button label="Ver Todos" />
        </a>
      )}
    </header>
  );
}
