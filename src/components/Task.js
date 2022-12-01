import React from 'react';
import { TasksLi } from "../styles";

function Task({ title, id, finished, onChange }) {
    return (
        <TasksLi>
            <input type="checkbox" value={id} checked={finished} onChange={onChange} />
            {title}
        </TasksLi>
    );
}

export default Task;