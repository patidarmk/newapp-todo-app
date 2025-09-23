import { Todo } from '../types';
import { TodoItem } from './TodoItem';
import { Separator } from '@/components/ui/separator';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
}

export function TodoList({ todos, toggleComplete, deleteTodo, editTodo }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo, index) => (
        <>
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
          {index < todos.length - 1 && <Separator />}
        </>
      ))}
    </div>
  );
}