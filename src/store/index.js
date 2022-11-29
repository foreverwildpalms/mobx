import {makeAutoObservable} from "mobx"
import {getData, setData} from "../utils/data";

export class Store {
    tasks = getData();

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

    toggle(id) {
        const currTask = this.tasks.find((item) => item.id === id);

        if (currTask) {
            currTask.finished = !currTask.finished;
        }

        setData(this.tasks);
    }

    newTask(title) {
        const newId = Math.random();
        this.tasks.push({
            id: newId,
            title: title,
            finished: false
        });

        setData(this.tasks);
    }
}