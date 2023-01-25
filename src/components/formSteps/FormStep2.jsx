import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../style/Title';
import { Subtitle } from '../style/Subtitle';
import arcadeIcon from '../../assets/images/icon-arcade.svg';
import advancedIcon from '../../assets/images/icon-advanced.svg';
import proIcon from '../../assets/images/icon-pro.svg';
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

const Container = styled.section`
    margin-top: 2rem;
`;

const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const OptionButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${ white };
    border: 1px solid ${ light_gray };
    border-radius: 8px;
    padding: 2.2rem;
    transition: all .s2 ease-in-out;

    &:focus {
        border: 1px solid ${ purplish_blue };
        background: ${ magnolia };
    }
`;

export default function FormStep2() {
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
                <OptionsContainer>
                    <OptionButton type="button">
                        <img src={arcadeIcon} alt="Arcade" />
                        <h4>Arcade</h4>
                        <p>$90/yr</p>
                        <span>2 months free</span>
                    </OptionButton>

                    <OptionButton type="button">
                        <img src={advancedIcon} alt="Arcade" />
                        <h4>Advanced</h4>
                        <p>$120/yr</p>
                        <span>2 months free</span>
                    </OptionButton>

                    <OptionButton type="button">
                        <img src={proIcon} alt="Arcade" />
                        <h4>Pro</h4>
                        <p>$150/yr</p>
                        <span>2 months free</span>
                    </OptionButton>
                </OptionsContainer>
            </Container>
        </m.section>
    );
};