import styled from "styled-components";
import arcadeIcon from '../../../assets/images/icon-arcade.svg';
import advancedIcon from '../../../assets/images/icon-advanced.svg';
import proIcon from '../../../assets/images/icon-pro.svg';
import * as pallete from '../../style/StyledVars.js';

const { purplish_blue, marine_blue } = pallete.colors.primary;

const { light_gray } = pallete.colors.neutral;

const PlanContainer = styled.div`
    display: flex;
    align-items: center;
    padding: .8rem;
    border: 1px solid ${ light_gray };
    border-radius: 8px;
    gap: 8px;
    margin-bottom: 1rem;

    > p {
        color: ${ marine_blue };
        font-weight: bold;
        font-size: 1.1rem;
        flex: 1;
    }

    > span {
        font-size: .9rem;
        color: ${ purplish_blue };
    }
`;

export default function PlanInfo({ planName, planTitle, planPrice }) {
    return (
        <PlanContainer>
            {planName === 'arcade' && (<img src={ arcadeIcon } alt="Arcade" />)}
            {planName === 'advanced' && (<img src={ advancedIcon } alt="Advanced" />)}
            {planName === 'pro' && (<img src={ proIcon } alt="Pro" />)}
            <p>{ planTitle }</p>
            <span>{ planPrice }</span>
        </PlanContainer>
    );
};