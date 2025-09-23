import { Todo } from '../types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toISOString(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, text: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-8 flex justify-center">
      <Card className="w-full max-w-2xl shadow-2xl bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">My Tasks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </CardContent>
      </Card>
    </div>
  );
}