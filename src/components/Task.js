import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

//{ id, title, isComplete }
const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  const toggleComplete = (e) => {
    const updateTask = {
      id: props.id,
      isComplete: !props.isComplete,
      title: props.title,
    };
    props.updateTask(updateTask);
  };

  const clickDelete = (e) => {
    props.deleteById(props.id);
  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={toggleComplete}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={clickDelete}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteById: PropTypes.func.isRequired,
};

export default Task;
