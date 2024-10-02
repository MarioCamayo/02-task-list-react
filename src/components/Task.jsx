function Task({ task, onDeleteTask }) {
    return (
      <div className="task">
        <p>{task.title}</p>
        <button onClick={() => onDeleteTask(task.id)}>
          delete
        </button>
      </div>
    );
  }
  
  export default Task;
  