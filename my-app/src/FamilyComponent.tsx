import { simpsons } from "./date";
import { CharacterComponent } from "./CharacterComponent";
export const FamilyComponent = () => {
  return (
    <div>
      {simpsons.map((value) => (
        <CharacterComponent item={value}>{value.info}</CharacterComponent>
      ))}
    </div>
  );
};
