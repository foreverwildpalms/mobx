import {observer} from "mobx-react-lite";
import {useState} from "react";
import { FormWrap, Title, Input, Button } from "../styles";


const App = ({store}) => {
    const [title, setTitle] = useState('');

    const handleForm = (e) => {
        if (title) {
            e.preventDefault();
            store.newTask(title);
            setTitle('');
        }
    }

    return (
        <FormWrap>
            <Title>New task</Title>
            <form>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                <Button onClick={handleForm}>Отправить</Button>
            </form>
        </FormWrap>
    );
}

export default observer(App);
