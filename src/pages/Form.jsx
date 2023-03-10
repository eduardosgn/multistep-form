import { useContext } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import styled from 'styled-components';
import * as pallete from '../components/style/StyledVars.js';
import StepTracker from '../components/StepTracker.jsx';
import FormStep1 from '../components/formSteps/FormStep1/FormStep1';
import FormStep2 from '../components/formSteps/FormStep2/FormStep2';
import FormStep3 from '../components/formSteps/FormStep3/FormStep3.jsx';
import FormStep4 from '../components/formSteps/FormStep4/FormStep4.jsx';
import FormStepsContext from '../context/form-steps/FormStepsContext.jsx';
import FormInfoContext from '../context/form-info/FormInfoContext.jsx';
import { useNavigate } from 'react-router-dom';

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
`;

const Section = styled.section``;

const FormSection = styled.section`
    min-width: 43.75rem;
    padding: 0 7rem;

    @media (max-width: 900px) {
        min-width: 15rem;
        padding: 0;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;

    @media (max-width: 800px) {
        margin-bottom: 2.5rem;
    }
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
        background: ${ props => props.btnBgColorOnHover };
        border: 1px solid ${ props => props.btnBgColorOnHover };
    }
`;

const SubmitButton = styled.button`
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
    const { name, email } = useContext(FormInfoContext);

    function handleNextFormStep() {
        dispatch({ type: `STEP_${ step + 1 }` });
    };

    function handlePrevFormStep() {
        dispatch({ type: `STEP_${ step - 1 }` });
    };

    const navigate = useNavigate();

    const container = {
        hidden: { scale: 0.8, opacity: 0 },
        show: { opacity: 1, scale: 1 },
        transition: { type: "tween", duration: 2, ease: 'easeInOut' }
    };

    return (
        <m.main
            variants={container}
            transition="transition"
            initial="hidden"
            animate="show"
            exit="hidden"
        >
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
                        <PrevButton 
                            onClick={handlePrevFormStep} 
                            style={{ display: step === 1 && 'none' }}
                        >
                            Go back
                        </PrevButton>

                        <NextButton 
                            onClick={handleNextFormStep} 
                            style={{
                                display: step === 4 && 'none', 
                                cursor: name === '' || email === '' ? 'not-allowed' : 'pointer', 
                                opacity: name === '' || email === '' ? '0.5' : '1'
                            }}
                            btnBgColorOnHover={
                                name === '' || email === '' ? marine_blue : purplish_blue
                            }
                            disabled={
                                name === '' || email === '' ? true : false
                            }
                        >
                            Next step
                        </NextButton>

                        {step === 4 && (
                            <SubmitButton type='buttom' onClick={() => navigate('/success')}>
                                Submit
                            </SubmitButton>
                        )}
                    </ButtonsContainer>
                </FormSection>
            </Container>
        </m.main>
    );
};