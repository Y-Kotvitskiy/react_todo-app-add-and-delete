import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

interface TodoListProps {
  lodingId: Todo['id'] | null;
  todos: Todo[];
  onChange: (todo: Todo, fieldsToUpdate: Partial<Todo>) => Promise<unknown>;
  onDelete: (todoId: Todo) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  lodingId,
  todos,
  onChange,
  onDelete,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChange={onChange}
          onDelete={onDelete}
          isLoading={lodingId === todo.id}
        />
      ))}
    </section>
  );
};
