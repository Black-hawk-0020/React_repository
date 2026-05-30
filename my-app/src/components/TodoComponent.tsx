import type { ReactNode } from "react";
import type { Iuser } from "../typeUser";
export function TodoComponent(props: Iuser) {
  const li: ReactNode[] = [];
  for (const key in props) {
    const element = props[key as keyof Iuser];
    li.push(
      <li key={key}>
        {key}:{element}
      </li>,
    );
  }
  return <ul>{li}</ul>;
}
