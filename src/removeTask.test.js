import { ToDoList } from './TodoList';

const initialTask = {
        title: 'Initial Task',
        description: 'Description of Initial Task',
        targetDate: '2024-03-16'
};

describe('ToDoList', () => {
  describe('Testing removeTask', () => {
    test('should remove a task', () => {
      const todoInstance = new ToDoList();

      todoInstance.add(initialTask);

      todoInstance.removeTask(0);
      const tasks = todoInstance.getTasks();

      expect(tasks.length).toBe(0);
    });

    test('should not remove any task if tasks array is empty', () => {
      const todoInstance = new ToDoList();

      todoInstance.removeTask(0);
      const tasks = todoInstance.getTasks();

      expect(tasks.length).toBe(0);
    });
  });
});
