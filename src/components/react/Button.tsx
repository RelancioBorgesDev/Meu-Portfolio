interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="bg-zinc-800 px-4 py-3 rounded-xl hover:brightness-90">
      {label}
    </button>
  );
}
