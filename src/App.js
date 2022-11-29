import {observer} from "mobx-react-lite";
import Form from "./components/Form";
import styled from 'styled-components';
import Tasks from "./components/Tasks";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`

const App = ({store}) => {

    return (
        <Container>
            <Form store={store} />
            <Tasks store={store} />
        </Container>
    );
}

export default observer(App);
