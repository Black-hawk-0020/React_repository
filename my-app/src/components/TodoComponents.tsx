import { useState, useEffect } from "react";
import { TodoComponent } from "./TodoComponent";
import type { Iuser } from "../typeUser";

export const TodoComponents = () => {
  const [user, setUser] = useState<Iuser[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);
  return user.map((value, index) => <TodoComponent key={index} {...value} />);
};
