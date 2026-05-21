import type { ReactNode } from "react";
import type { SimsonType } from "./date";

interface CharacterComponentProps {
  item: SimsonType;
  children: ReactNode;
}
export const CharacterComponent = ({
  item,
  children,
}: CharacterComponentProps) => {
  return (
    <div>
      <h3>
        {item.name} {item.surname}
      </h3>
      <p>{item.age}</p>
      <img src={item.photo} alt={item.name} />
      <p>{children}</p>
    </div>
  );
};
