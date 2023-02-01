import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const updateTask = (updateTask) => {
    const tasksList = tasks.map((task) => {
      if (task.id === updateTask.id) {
        return updateTask;
      } else {
        return task;
      }
    });
    setTasks(tasksList);
  };

  const deleteById = (id) => {
    const tasksList = tasks.filter((task) => {
      task.id !== id;
    });
    console.log(tasksList);
    return setTasks(tasksList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            updateTask={updateTask}
            deleteById={deleteById}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
