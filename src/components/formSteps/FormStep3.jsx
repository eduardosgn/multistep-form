import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../style/Title';
import { Subtitle } from '../style/Subtitle';
import { useContext } from 'react';
import FormInfoContext from '../../context/form-info/FormInfoContext';
import * as pallete from '../style/StyledVars.js';

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

export default function FormStep3() {
    const { monthly, addOnsMonthly, dispatch } = useContext(FormInfoContext);

    const { setMonthly } = monthly;

    const { onlineService, largerStorage, customizableProfile } = addOnsMonthly;

    const Container = styled.section`
        margin-top: 2rem;
    `;

    const AddonOptionContainer = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        background: ${ white };
        border: 1px solid ${ onlineService ? light_gray : purplish_blue };
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 4rem;
        }
    `;

    const AddonCheckboxContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        > input {
            -webkit-appearance: none;
            appearance: none;
            background-color: ${ white };
            margin: 0 1rem 0 0;
            font: inherit;
            color: currentColor;
            width: 1.5rem;
            height: 1.5rem;
            border: 0.15em solid ${ light_gray };
            border-radius: 0.15em;
            transform: translateY(-0.075em);
            display: grid;
            place-content: center;

            &::before {
                content: "";
                width: 0.7em;
                height: 0.7em;
                transform: scale(0);
                transition: 120ms transform ease-in-out;
                box-shadow: inset 1em 1em ${ marine_blue };
                transform-origin: bottom left;
                clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
            }

            &:checked::before {
                transform: scale(1);
            }
        }
    `;

    const AddonOptionText = styled.div`
        flex: 1;
    `;

    const AddonOptionTitle = styled.p`
        font-weight: bold;
        color: ${ marine_blue };
        font-size: 1.1rem;
    `;

    const AddonOptionDescription = styled.p`
        margin-top: .2rem;
        color: ${ cool_gray };
    `;

    const AddonOptionPrice = styled.p`
        color: ${ purplish_blue };
    `;

    return (
        <m.section
            initial={{ opacity: 0, y: '5px' }}
            animate={{ opacity: 1, y: '0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: '5px' }}
        >
            <Container>
                <Title>Pick add-ons</Title>
                <Subtitle>Add-ons help enhance your gaming experience.</Subtitle>

                {setMonthly ? (
                    <section>
                        <AddonOptionContainer>
                            <AddonCheckboxContainer>
                                <input type="checkbox" onClick={() => dispatch({type: 'ADD_ONLINE_SERVICE_MONTHLY'})} />
                                <span className='checkmark'></span>
                            </AddonCheckboxContainer>
                            <AddonOptionText>
                                <AddonOptionTitle>Online service</AddonOptionTitle>
                                <AddonOptionDescription>Access to multiple games</AddonOptionDescription>
                            </AddonOptionText>
                            <AddonOptionPrice>+$1/month</AddonOptionPrice>
                        </AddonOptionContainer>

                        <AddonOptionContainer>
                            <AddonCheckboxContainer>
                                <input type="checkbox" />
                                <span className='checkmark'></span>
                            </AddonCheckboxContainer>
                            <AddonOptionText>
                                <AddonOptionTitle>Larger storage</AddonOptionTitle>
                                <AddonOptionDescription>Extra 1TB of cloud save</AddonOptionDescription>
                            </AddonOptionText>
                            <AddonOptionPrice>+$2/month</AddonOptionPrice>
                        </AddonOptionContainer>

                        <AddonOptionContainer>
                            <AddonCheckboxContainer>
                                <input type="checkbox" />
                                <span className='checkmark'></span>
                            </AddonCheckboxContainer>
                            <AddonOptionText>
                                <AddonOptionTitle>Customizable profile</AddonOptionTitle>
                                <AddonOptionDescription>Custom theme on your profile</AddonOptionDescription>
                            </AddonOptionText>
                            <AddonOptionPrice>+$2/month</AddonOptionPrice>
                        </AddonOptionContainer>
                    </section>
                ) : (
                    <section>
                        <div>
                            <input type="checkbox" />
                            <div>
                                <p>Online service</p>
                                <p>Access to multiple games</p>
                            </div>
                            <p>+$10/year</p>
                        </div>
                    </section>
                )}
            </Container>
        </m.section>
    );
};