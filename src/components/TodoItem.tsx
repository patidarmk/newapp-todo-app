import { useState } from 'react';
import { Todo } from '../types';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2, Save } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
}

export function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center space-x-4 p-2 rounded-lg transition-colors hover:bg-muted/50">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => toggleComplete(todo.id)}
      />
      <div className="flex-1">
        {isEditing ? (
          <Input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="h-8"
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          />
        ) : (
          <label
            htmlFor={`todo-${todo.id}`}
            className={`text-sm font-medium leading-none transition-colors ${
              todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'
            }`}
          >
            {todo.text}
          </label>
        )}
      </div>
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="icon" onClick={handleEdit}>
          {isEditing ? <Save className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
        </Button>
        <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)}>
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>
    </div>
  );
}