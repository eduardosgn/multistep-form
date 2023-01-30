import styled from "styled-components";
import * as pallete from '../../style/StyledVars.js';

const {
    marine_blue,
    purplish_blue
} = pallete.colors.primary;

const {
    cool_gray,
    light_gray,
    magnolia,
    white
} = pallete.colors.neutral;

const AddonOptionContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background: ${ props => props.bgColor };
    border: 1px solid ${ props => props.borderColor };
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

export default function Option({ inputName, inputState, handleFunc, optionTitle, optionDescription, optionPrice }) {
    return (
        <AddonOptionContainer bgColor={ inputState ? magnolia : white } borderColor={ inputState ? marine_blue : light_gray }>
            <AddonCheckboxContainer>
                <input type="checkbox" name={ inputName } checked={ inputState } onChange={ handleFunc } />
            </AddonCheckboxContainer>
            <AddonOptionText>
                <AddonOptionTitle>{ optionTitle }</AddonOptionTitle>
                <AddonOptionDescription>{ optionDescription }</AddonOptionDescription>
            </AddonOptionText>
            <AddonOptionPrice>{ optionPrice }</AddonOptionPrice>
        </AddonOptionContainer>
    );
};