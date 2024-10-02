import { useReducer, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { reduce } from './reducer';
import { ACTIONS } from './actions';
import './App.css'

function App() {
  const [tasks, dispatch] = useReducer(reduce, []);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddTask = (title) => {
    if (title.trim()) {
      dispatch({
        type: ACTIONS.ADD_TASK,
        title,
      });
      setErrorMessage(''); // Limpiar el mensaje de error si se añade la tarea
    } else if (tasks.length === 0) {
      setErrorMessage('El campo de entrada no puede estar vacío');
    }
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: ACTIONS.DELETE_TASK,
      id
    });
  };

  return (
    <div className='app-container'>
      <TaskForm onAddTask={handleAddTask} errorMessage={errorMessage} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
