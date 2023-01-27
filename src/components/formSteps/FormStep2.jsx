import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../style/Title';
import { Subtitle } from '../style/Subtitle';
import arcadeIcon from '../../assets/images/icon-arcade.svg';
import advancedIcon from '../../assets/images/icon-advanced.svg';
import proIcon from '../../assets/images/icon-pro.svg';
import * as pallete from '../style/StyledVars.js';
import { useState } from 'react';
import { useContext } from 'react';
import FormInfoContext from '../../context/form-info/FormInfoContext';

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

const Container = styled.section`
    margin-top: 2rem;
`;

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 10px;
`;

const OptionButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${ white };
    border: 1px solid ${ light_gray };
    border-radius: 8px;
    padding: 1.2rem 3rem 1.2rem 1.2rem;
    transition: all .2s ease-in-out;

    @media (max-width: 900px) {
        padding: 1.2rem 1.8rem 1.2rem 1.2rem;
    }

    > img {
        margin-bottom: 2.3rem;
    }

    > h4 {
        color: ${ marine_blue };
        font-size: 1rem;
        margin-bottom: .5rem;
    }

    > p {
        font-weight: bold; 
        color: ${ cool_gray };
    }

    > span {
        font-size: 12px;
        color: ${ marine_blue };
        margin-top: .5rem;
    }

    &:hover {
        border: 1px solid ${ purplish_blue };
        background: ${ magnolia };
    }

    &:focus {
        border: 1px solid ${ purplish_blue };
        background: ${ magnolia };
        box-shadow: 0px 0px 27px -13px rgba(2,41,90,1);
        transform: scale(1.02);
    }
`;

const ToggleContainer = styled.div`
    min-width: 100%;
    background: ${ magnolia };
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: .8rem 0;
    margin-bottom: 2rem;
    border-radius: 8px;
`;

const Toggle = styled.div`
    width: 50px;
    height: 30px;
    background: ${ marine_blue };
    cursor: pointer;
    position: relative;
    border-radius: 30px;

    > div {
        width: 25px;
        height: 25px;
        position: absolute;
        border-radius: 50%;
        background: ${ white };
        left: 3px;
        bottom: 3px;
        transition: all .2s ease-in-out;
    }

    > .toggleLeft {
        transform: translateX(0);
    }

    > .toggleRight {
        transform: translateX(19px);
    }
`;

const ToggleTitle = styled.p`
    font-weight: bold;

    > .activeBillingType {
        color: ${ marine_blue }
    }

    > .inactiveBillingType {
        color: ${ cool_gray }
    }
`;

export default function FormStep2() {
    const [toggleBillingDates, setToggleBillingDates] = useState(true);

    const { dispatch } = useContext(FormInfoContext);

    return (
        <m.section
            initial={{ opacity: 0, y: '5px' }}
            animate={{ opacity: 1, y: '0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: '5px' }}
        >
            <Container>
                <Title>Select your plan</Title>

                <Subtitle>You have the option of monthly or yearly billing.</Subtitle>

                {toggleBillingDates === true ? (
                    <OptionsContainer>
                        <OptionButton type="button" onFocus={() => dispatch({ type: 'ARCADE_MONTH' })}>
                            <img src={arcadeIcon} alt="Arcade" />
                            <h4>Arcade</h4>
                            <p>$9/month</p>
                        </OptionButton>

                        <OptionButton type="button" onFocus={() => dispatch({ type: 'ADVANCED_MONTH' })}>
                            <img src={advancedIcon} alt="Arcade" />
                            <h4>Advanced</h4>
                            <p>$12/month</p>
                        </OptionButton>

                        <OptionButton type="button" onFocus={() => dispatch({ type: 'PRO_MONTH' })}>
                            <img src={proIcon} alt="Arcade" />
                            <h4>Pro</h4>
                            <p>$15/month</p>
                        </OptionButton>
                    </OptionsContainer>
                ) : (
                    <OptionsContainer>
                        <OptionButton type="button">
                            <img src={arcadeIcon} alt="Arcade" />
                            <h4>Arcade</h4>
                            <p>$90/year</p>
                            <span>2 months free</span>
                        </OptionButton>

                        <OptionButton type="button">
                            <img src={advancedIcon} alt="Arcade" />
                            <h4>Advanced</h4>
                            <p>$120/year</p>
                            <span>2 months free</span>
                        </OptionButton>

                        <OptionButton type="button">
                            <img src={proIcon} alt="Arcade" />
                            <h4>Pro</h4>
                            <p>$150/year</p>
                            <span>2 months free</span>
                        </OptionButton>
                    </OptionsContainer>
                )}

                <ToggleContainer>
                    <ToggleTitle>
                        <p className={ toggleBillingDates ? 'activeBillingType' : 'inactiveBillingType' }>Monthly</p>
                    </ToggleTitle>

                    <Toggle onClick={() => setToggleBillingDates(!toggleBillingDates)}>
                        <div className={ toggleBillingDates ? 'toggleLeft' : 'toggleRight' }></div>
                    </Toggle>

                    <ToggleTitle>
                        <p className={ !toggleBillingDates ? 'activeBillingType' : 'inactiveBillingType' }>Yearly</p>
                    </ToggleTitle>
                </ToggleContainer>
            </Container>
        </m.section>
    );
};