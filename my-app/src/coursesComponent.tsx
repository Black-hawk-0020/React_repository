import { coursesArray } from "./coursesArray";
import { CourseDeteils } from "./courseDeteilse";

export function CoursesComponent() {
  return (
    <div>
      {coursesArray.map((value, index) => (
        <CourseDeteils item={value} key={index} />
      ))}
    </div>
  );
}
