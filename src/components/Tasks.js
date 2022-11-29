import React from 'react';
import {TaskCol, TasksLi, TasksUl, TasksWrap, Title} from "../styles";
import {observer} from "mobx-react-lite";

function Tasks({store}) {
    console.log(store);

    return (
        <TasksWrap>
            <TaskCol>
                <Title>Tasks</Title>
                <TasksUl>
                    {store.tasks.filter(item => !item.finished).map(item => {
                        return (
                            <TasksLi key={item.id}>
                                <input type="checkbox" value={item.id} checked={item.finished} onChange={() => store.toggle(item.id)} />
                                {item.title}
                            </TasksLi>
                        )
                    })}
                </TasksUl>
            </TaskCol>
            <TaskCol>
                <Title>Сompleted tasks</Title>
                <TasksUl>
                    {store.tasks.filter(item => item.finished).map(item => {
                        return (
                            <TasksLi key={item.id}>
                                <input type="checkbox" value={item.id} checked={item.finished} onChange={() => store.toggle(item.id)} />
                                {item.title}
                            </TasksLi>
                        )
                    })}
                </TasksUl>
            </TaskCol>
        </TasksWrap>
    );
}

export default observer(Tasks);