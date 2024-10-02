import { useRef } from 'react';

function TaskForm({ onAddTask, errorMessage }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskTitle = inputRef.current.value;
    onAddTask(taskTitle);
    inputRef.current.value = ''; // Limpiar el campo después de enviar
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-container">

      <input
        type="text"
        placeholder="ingresa una tarea"
        ref={inputRef}
        />
      <input type="submit" value="add" />
    </div>
      {errorMessage && <span className='error-message'>{errorMessage}</span>}
    </form>
  );
}

export default TaskForm;
