export const setData = data => {
    try {
        const tasksState = JSON.stringify(data)
        localStorage.setItem('tasksList', tasksState);
    }
    catch (err) {
        console.log(err);
    }
}

export const getData = () => {
    try {
        const tasksState = localStorage.getItem('tasksList');
        return tasksState === null
            ? []
            : JSON.parse(tasksState)
    } catch (err) {
        return undefined;
    }
}