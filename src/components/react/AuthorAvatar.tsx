import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AuthorAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/RelancioBorgesDev.png" />
      <AvatarFallback>RB</AvatarFallback>
    </Avatar>
  );
}
