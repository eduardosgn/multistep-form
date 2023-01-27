import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../../style/Title';
import { Subtitle } from '../../style/Subtitle';
import arcadeIcon from '../../../assets/images/icon-arcade.svg';
import advancedIcon from '../../../assets/images/icon-advanced.svg';
import proIcon from '../../../assets/images/icon-pro.svg';
import * as pallete from '../../style/StyledVars.js';
import { useState } from 'react';
import { useContext } from 'react';
import FormInfoContext from '../../../context/form-info/FormInfoContext';
import BillingButton from './BillingButton';

const { marine_blue } = pallete.colors.primary;

const { cool_gray, magnolia, white } = pallete.colors.neutral;

const Container = styled.section`
    margin-top: 2rem;
`;

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 10px;
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
                        <BillingButton 
                            icon={ arcadeIcon } 
                            title='Arcade' 
                            price='$9/month' 
                            setPromo={ false } 
                            stateEvent={() => dispatch({ type: 'ARCADE_MONTH' })}
                        />
    
                        <BillingButton
                            icon={ advancedIcon } 
                            title='Advanced' 
                            price='$12/month' 
                            setPromo={ false } 
                            stateEvent={() => dispatch({ type: 'ADVANCED_MONTH' })}
                        />
    
                        <BillingButton
                            icon={ proIcon } 
                            title='Pro' 
                            price='$15/month' 
                            setPromo={ false } 
                            stateEvent={() => dispatch({ type: 'PRO_MONTH' })}
                        />
                    </OptionsContainer>
                ) : (
                    <OptionsContainer>
                        <BillingButton 
                            icon={ arcadeIcon } 
                            title='Arcade' 
                            price='$90/year'
                            promo='2 months free' 
                            setPromo={ true } 
                            stateEvent={() => dispatch({ type: 'ARCADE_YEAR' })}
                        />
    
                        <BillingButton
                            icon={ advancedIcon } 
                            title='Advanced' 
                            price='$120/year'
                            promo='2 months free' 
                            setPromo={ true } 
                            stateEvent={() => dispatch({ type: 'ADVANCED_YEAR' })}
                        />
    
                        <BillingButton
                            icon={ proIcon } 
                            title='Pro' 
                            price='$150/year'
                            promo='2 months free'
                            setPromo={ true } 
                            stateEvent={() => dispatch({ type: 'PRO_YEAR' })}
                        />
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