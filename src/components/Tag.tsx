import React from "react";

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return <div className="bg-tag p-2 rounded-lg text-sm font-bold">{tag}</div>;
}
