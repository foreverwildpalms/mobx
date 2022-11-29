import {makeAutoObservable} from "mobx"

export class Store {
    tasks = [
        {
            id: 1,
            title: "Task 1",
            finished: false
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    toggle(id) {
        if (this.tasks.id) {
            this.tasks.id.finished = !this.tasks.id.finished
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