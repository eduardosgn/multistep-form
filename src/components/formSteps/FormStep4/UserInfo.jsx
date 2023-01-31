import styled from "styled-components";
import { RiUser3Line } from 'react-icons/ri';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import * as pallete from '../../style/StyledVars.js';

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

const InfoContainer = styled.div`
    display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid ${ light_gray };
        padding: .8rem;
        border-radius: 8px;
        margin-bottom: 1rem;

    > .infoText {
        > span {
            font-size: 14px;
        }

        > p {
            color: ${ marine_blue };
            font-weight: bold;
            font-size: 1.1rem;
        }
    }

    > p {
        font-weight: bold;
        font-size: 1.2rem;
        color: ${ marine_blue };
    }
`;

export default function UserInfo({ labelText, infoText, infoState }) {
    return (
        <InfoContainer>
            {infoState === 'name' && (
                <RiUser3Line color={ purplish_blue } size={30}  />
            )}

            {infoState === 'email' && (
                <HiOutlineMail color={ purplish_blue } size={30}  />
            )}

            {infoState === 'phone' && (
                <HiOutlinePhone color={ purplish_blue } size={30}  />
            )}

            <div className='infoText'>
                <span style={{ color: purplish_blue }}>{ labelText }</span>
                <p>{ infoText }</p>
            </div>
        </InfoContainer>
    );
};