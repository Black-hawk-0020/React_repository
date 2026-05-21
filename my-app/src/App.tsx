import "./App.css";
import type {Icourse} from "./modalCourse";
const coursesAndDurationArray: Icourse[]= [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

function App() {
  return (
    <ul>
      {coursesAndDurationArray.map(({ title, monthDuration }, index) => (
        <li key={index}>
          {title}-{monthDuration}
        </li>
      ))}
    </ul>
  );
}

export default App;
