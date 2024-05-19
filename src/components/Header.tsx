import { type TodoTitle } from "../types.d";
import { CreateTodo } from "./CreateTodo.tsx";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>To Do</h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};
