import React from 'react';

const Item = props => {
  return (
    <div className="list-group-item">
      <h3>{ props.task.title }</h3>
      <div>Poster: { props.task.poster }</div>
      <div>Important?: { props.task.Important }</div>
      <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
        </button>
    </div>
  )
};

export default Item;