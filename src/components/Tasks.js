import React from 'react';
import {TasksLi, TasksUl, TasksWrap, Title} from "../styles";
import {observer} from "mobx-react-lite";

function Tasks({store}) {
    return (
        <TasksWrap>
            <Title>Tasks</Title>
            <TasksUl>
                {store.tasks.map(item => {
                    return (
                        <TasksLi key={item.id}>
                            <input type="checkbox" value={item.finished} onChange={() => store.toggle(item.id)} />
                            {item.title}
                        </TasksLi>
                    )
                })}
            </TasksUl>
        </TasksWrap>
    );
}

export default observer(Tasks);