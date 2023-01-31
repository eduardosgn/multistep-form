import styled from "styled-components";
import { FormStepsProvider } from "./context/form-steps/FormStepsContext";
import { FormInfoProvider } from "./context/form-info/FormInfoContext";
import { AddonsProvider } from "./context/form-addons/AddonsContext";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { BrowserRouter } from 'react-router-dom';

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <BrowserRouter>
            <FormStepsProvider>
                <Container>
                    <FormInfoProvider>
                        <AddonsProvider>
                            <AnimatedRoutes />
                        </AddonsProvider>
                    </FormInfoProvider>
                </Container>
            </FormStepsProvider>
        </BrowserRouter>
    );
};

export default App;