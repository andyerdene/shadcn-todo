import AddTodo from "./_components/AddTodo";
import { ModeToggle } from "./_components/theme-toggle";
import { TodoList } from "./_components/TodoList";
import TodoProvider from "./_contexts/TodoContext";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row-reverse">
        <ModeToggle />
      </div>
      <AddTodo />
      <TodoList />
    </main>
  );
}
