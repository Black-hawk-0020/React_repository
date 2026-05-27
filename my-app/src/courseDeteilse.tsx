import type { Icourses } from "./coursesArray";
interface Iprops {
  item: Icourses;
}
export function CourseDeteils({ item }: Iprops) {
  return (
    <ul>
      {Object.entries(item).map(([key, value], index) => (
        <li key={index}>
          {key} : {arrayCheck(value)}{" "}
        </li>
      ))}
    </ul>
  );
}

function arrayCheck(item: string | string[]) {
  if (Array.isArray(item)) {
    return (
      <ul>
        {item.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    );
  } else return item;
}
