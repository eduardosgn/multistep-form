import Form from "./pages/Form";
import styled from "styled-components";
import { FormStepsProvider } from "./context/form-steps/FormStepsContext";

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
`;

function App() {
    return (
        <FormStepsProvider>
            <Container>
                <Form />
            </Container>
        </FormStepsProvider>
    );
};

export default App;