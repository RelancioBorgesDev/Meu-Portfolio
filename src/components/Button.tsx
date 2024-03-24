interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="bg-tag px-4 py-3 rounded-lg hover:brightness-90">
      {label}
    </button>
  );
}
