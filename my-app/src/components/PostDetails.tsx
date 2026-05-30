import type { Ipost } from "./type";

import type { JSX } from "react/jsx-runtime";

export function PostDetails(props: Ipost) {
  const li: JSX.Element[] = [];
  for (const key in props) {
    const element = props[key as keyof Ipost];
    li.push(
      <li>
        {key}: {element}
      </li>,
    );
  }
  return <ul className="w-100 m-5">{li}</ul>;
}
