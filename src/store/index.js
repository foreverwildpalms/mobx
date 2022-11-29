import {makeAutoObservable} from "mobx"

export class Store {
    tasks = [
        // {
        //     id: 1,
        //     title: "Task 1",
        //     finished: false
        // }
    ]

    // constructor(title) {
    //     makeObservable(this, {
    //         tasks: observable,
    //         completedTasks: computed,
    //         uncompletedTasks: computed,
    //         toggle: action,
    //         newTask: action
    //     })
    // }
    constructor() {
        makeAutoObservable(this)
    }

    get completedTasks() {
        return this.tasks.filter(item => item.finished)
    }

    get uncompletedTasks () {
        return this.tasks.filter(item => !(item.finished))
    }

    // constructor() {
    //     makeAutoObservable(this)
    // }

    toggle(id) {
        const currTask = this.tasks.find((item) => item.id === id);

        if (currTask) {
            currTask.finished = !currTask.finished;
        }
    }

    newTask(title) {
        const newId = Math.random();
        this.tasks.push({
            id: newId,
            title: title,
            finished: false
        });
    }
}