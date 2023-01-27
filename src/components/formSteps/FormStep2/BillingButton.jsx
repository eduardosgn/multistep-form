import styled from "styled-components";
import * as pallete from '../../style/StyledVars.js';

const {
    marine_blue,
    purplish_blue,
} = pallete.colors.primary;

const {
    cool_gray,
    light_gray,
    magnolia,
    white
} = pallete.colors.neutral;

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

export default function BillingButton({ icon, title, price, promo, setPromo, stateEvent }) {
    return (
        <OptionButton type="button" onFocus={ stateEvent }>
            <img src={ icon } alt={ title } />
            <h4>{ title }</h4>
            <p>{ price }</p>
            { setPromo === true && ( <span>{ promo }</span> ) }
        </OptionButton>
    );
}