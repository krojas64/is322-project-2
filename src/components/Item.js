import React from 'react';

const Item = props => {
  return (
    <li className="list-group-item">
      { props.task.title }
      <div> { props.task.poster }</div>
      <div>Important?: { props.task.Important }</div>
      <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
        </button>
    </li>
  )
};

export default Item;