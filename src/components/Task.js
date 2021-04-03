import React from 'react';

const Task = props => {
  return (
    <div className="list-group-item">
      <h3>{ props.task.title }</h3>
      <div>Poster: { props.task.poster }</div>
      <div>Important?: { props.task.Important }</div>
      { props.task.column !== "To Do" ? (
        <button type="button"
              onClick={() => props.moveTask(props.task, 0)}
              className="btn btn-primary">
        Move Left
        </button>
      ) : null }
      { props.task.column !== "Done" ? (
      <button type="button"
              onClick={() => props.moveTask(props.task, 1)}
              className="btn btn-primary">
        Move Right
        </button>
      ) : null }
    </div>
  )
};

export default Task;