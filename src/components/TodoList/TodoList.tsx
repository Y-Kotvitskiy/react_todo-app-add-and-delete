import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

interface TodoListProps {
  lodingId: Todo['id'] | null;
  todos: Todo[];
  tempTodo: Todo | null;
  onChange: (todo: Todo, fieldsToUpdate: Partial<Todo>) => Promise<unknown>;
  onDelete: (todoId: Todo) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  lodingId,
  todos,
  tempTodo,
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
      {tempTodo ? (
        <TodoItem
          todo={tempTodo}
          onChange={onChange}
          onDelete={onDelete}
          isLoading={true}
        />
      ) : null}
    </section>
  );
};
