import { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import * as pallete from '../components/style/StyledVars.js';
import StepTracker from '../components/StepTracker.jsx';
import FormStep1 from '../components/formSteps/FormStep1';
import FormStep2 from '../components/formSteps/FormStep2';
import FormStep3 from '../components/formSteps/FormStep3';
import FormStep4 from '../components/formSteps/FormStep4';
import FormStepsContext from '../context/form-steps/FormStepsContext.jsx';

const {
    marine_blue,
    purplish_blue,
    pastel_blue,
    light_blue,
    strawberry_red
} = pallete.colors.primary;

const {
    cool_gray,
    light_gray,
    magnolia,
    alabaster,
    white
} = pallete.colors.neutral;

const Container = styled.main`
    margin: 0 auto;
    background: ${ white };
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    min-width: 65%;

    @media (max-width: 1400px) {
        min-width: 75%;
    }

    @media (max-width: 1200px) {
        min-width: 85%;
    }

    @media (max-width: 800px) {
        min-width: 95%;
        margin: 0 10px;
    }
`;

const Section = styled.section``;
const FormSection = styled.section`
    width: 80%;
`;

const ButtonsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
`;

const NextButton = styled.button`
    border-radius: 8px;
    background: ${ marine_blue };
    color: ${ white };
    padding: .8rem 2.5rem;
    border: 1px solid ${ marine_blue };
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:hover {
        background: ${ purplish_blue };
        border: 1px solid ${ purplish_blue };
    }
`;

const PrevButton = styled.button`
    padding: .8rem 2.5rem;
    border-radius: 8px;
    background: ${ white };
    color: ${ cool_gray };
    border: 1px solid ${ marine_blue };
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-right: 1rem;
    transition: all .1s ease-in-out;

    &:hover {
        color: ${ marine_blue };
    }
`;

export default function Form() {
    const { step, dispatch } = useContext(FormStepsContext);

    function handleNextFormStep() {
        dispatch({ type: `STEP_${ step + 1 }` });
    };

    function handlePrevFormStep() {
        dispatch({ type: `STEP_${ step - 1 }` });
    };

    return (
        <Container>
            <Section>
                <StepTracker />
            </Section>

            <FormSection>
                <AnimatePresence initial={ false } mode={ 'wait' }>
                    { step === 1 && <FormStep1 key={step} /> }
                    { step === 2 && <FormStep2 key={step} /> }
                    { step === 3 && <FormStep3 key={step} /> }
                    { step === 4 && <FormStep4 key={step} /> }
                </AnimatePresence>

                <ButtonsContainer>
                    <PrevButton onClick={handlePrevFormStep} style={{ display: step === 1 && 'none' }}>
                        Go back
                    </PrevButton>

                    <NextButton onClick={handleNextFormStep} style={{ display: step === 4 && 'none' }}>
                        Next step
                    </NextButton>
                </ButtonsContainer>
            </FormSection>
        </Container>
    );
};