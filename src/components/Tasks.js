import React from 'react';
import {TaskCol, TasksUl, TasksWrap, Title} from "../styles";
import {observer} from "mobx-react-lite";
import Task from "./Task";

function Tasks({store}) {
    console.log(store);

    return (
        <TasksWrap>
            <TaskCol>
                <Title>Tasks</Title>
                <TasksUl>
                    {store.tasks.filter(item => !item.finished).map(item => {
                        return (
                            <Task
                                id={item.id}
                                title={item.title}
                                finished={item.finished}
                                key={item.id}
                                onChange={() => store.toggle(item.id)}
                            />
                        )
                    })}
                </TasksUl>
            </TaskCol>
            <TaskCol>
                <Title>Сompleted tasks</Title>
                <TasksUl>
                    {store.tasks.filter(item => item.finished).map(item => {
                        return (
                            <Task
                                id={item.id}
                                title={item.title}
                                finished={item.finished}
                                key={item.id}
                                onChange={() => store.toggle(item.id)}
                            />
                        )
                    })}
                </TasksUl>
            </TaskCol>
        </TasksWrap>
    );
}

export default observer(Tasks);