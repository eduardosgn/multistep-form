import { motion as m } from 'framer-motion';
import { useContext } from 'react';
import FormStepsContext from '../context/form-steps/FormStepsContext.jsx';
import styled from 'styled-components';
import * as pallete from './style/StyledVars.js';

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

export default function StepTracker() {
    const { step } = useContext(FormStepsContext);

    const Container = styled.section`
        min-width: 4rem;
        min-height: 100%;
        background: ${ purplish_blue };
        border-radius: 8px;
        padding: 2.5rem;
        margin-right: 6rem;
        
        @media (max-width: 1000px) {
            display: none;
        }
    `;

    const StepContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 60px 0;
    `;

    const StepTextContainer = styled.div`
        margin-left: .6rem;
    `;

    const StepNumber = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 1rem;
        border-radius: 100px;
        border: 1px solid ${ light_blue };
        color: ${ props => props.textColor };
        background: ${ props => props.bgColor };
    `;

    const StepText = styled.p`
        color: ${ light_blue };
        font-size: 14px;
        letter-spacing: 1px;
    `;

    const StepTitle = styled.p`
        color: ${ alabaster };
        font-weight: bold;
        letter-spacing: 1px;
    `;

    return (
        <Container>
            <StepContainer>
                <StepNumber textColor={ step === 1 ? marine_blue : light_blue } bgColor={ step === 1 && light_blue }>
                    1
                </StepNumber>

                <StepTextContainer>
                    <StepText>STEP 1</StepText>
                    <StepTitle>YOUR INFO</StepTitle>
                </StepTextContainer>
            </StepContainer>

            <StepContainer>
                <StepNumber textColor={ step === 2 ? marine_blue : light_blue } bgColor={ step === 2 && light_blue }>
                    2
                </StepNumber>

                <StepTextContainer>
                    <StepText>STEP 2</StepText>
                    <StepTitle>SELECT PLAN</StepTitle>
                </StepTextContainer>
            </StepContainer>

            <StepContainer>
                <StepNumber textColor={ step === 3 ? marine_blue : light_blue } bgColor={ step === 3 && light_blue }>
                    3
                </StepNumber>

                <StepTextContainer>
                    <StepText>STEP 3</StepText>
                    <StepTitle>ADD-ONS</StepTitle>
                </StepTextContainer>
            </StepContainer>

            <StepContainer>
                <StepNumber textColor={ step === 4 ? marine_blue : light_blue } bgColor={ step === 4 && light_blue }>
                    4
                </StepNumber>

                <StepTextContainer>
                    <StepText>STEP 4</StepText>
                    <StepTitle>SUMMARY</StepTitle>
                </StepTextContainer>
            </StepContainer>
        </Container>
    );
};