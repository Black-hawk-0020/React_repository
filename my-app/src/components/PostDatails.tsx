import type { Ipost } from "./type";

export function PostDatails(props: Ipost) {
  return (
    <ul>
      {Object.entries(props).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
}
