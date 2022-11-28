import {makeAutoObservable} from "mobx"

export class Store {
    id = Math.random()
    title = ""
    finished = false

    constructor() {
        makeAutoObservable(this)
    }

    toggle() {
        this.finished = !this.finished
    }
}