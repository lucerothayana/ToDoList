/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from './TodoList'

const initialTask = {
        title: 'Initial Task',
        description: 'tarefa original',
        targetDate: '2024-03-16'
      };
  const updatedData = {
        title: 'Updated Task Title',
        description: 'Utarefa atualizada',
        targetDate: '2024-03-18'
  };

describe('ToDoList', () => {
  describe('Testing updateTask', () => {
    test('should update a task', () => {
      const todoInstance = new ToDoList(); 

      todoInstance.add(initialTask);
      todoInstance.updateTask(0, updatedData);
      const tasks = todoInstance.getTasks();

      expect(tasks.length).toBe(1);
      expect(tasks[0]).toEqual({
        ...initialTask,
        ...updatedData
      });
    });

    test('should not update task with empty tasks', () => {
      const todoInstance = new ToDoList();
      
      todoInstance.add(initialTask);
      todoInstance.updateTask(0, {});
      const tasks = todoInstance.getTasks();
      
      //podia verificar se esse errou lancou uma exceção, mas n sei fazer
      expect(tasks[0]).toEqual(initialTask);
    });

    test('should not updateTask if index is invalid', () => {
      const todoInstance = new ToDoList();

      todoInstance.add(initialTask);
      todoInstance.updateTask(1, updatedData);
      const tasks = todoInstance.getTasks();

      //podia verificar se esse errou lancou uma exceção, mas n sei fazer
      expect(tasks[0]).toEqual(initialTask);
    });
  });
});
