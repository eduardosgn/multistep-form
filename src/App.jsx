import Form from "./pages/Form";
import styled from "styled-components";
import { FormStepsProvider } from "./context/form-steps/FormStepsContext";
import { FormInfoProvider } from "./context/form-info/FormInfoContext";

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
                <FormInfoProvider>
                    <Form />
                </FormInfoProvider>
            </Container>
        </FormStepsProvider>
    );
};

export default App;