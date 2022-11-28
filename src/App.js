import {observer} from "mobx-react-lite";

const App = ({store}) => {
    console.log(store);

    return (
    <div>
      Todo
    </div>
    );
}

export default observer(App);
