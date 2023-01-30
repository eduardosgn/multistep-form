import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../../style/Title';
import { Subtitle } from '../../style/Subtitle';
import * as pallete from '../../style/StyledVars.js';
import { useContext } from 'react';
import FormInfoContext from '../../../context/form-info/FormInfoContext';
import PhoneInput from './PhoneInput';

const {
    marine_blue,
} = pallete.colors.primary;

const {
    light_gray,
} = pallete.colors.neutral;

const Container = styled.section`
    margin-top: 2rem;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    &:last-child {
        margin-bottom: 4rem;
    }

    > label {
       color: ${ marine_blue };
       font-weight: bold;
       margin-bottom: .3rem;
    }

    > input {
        border: 1px solid ${ light_gray };
        border-radius: 8px;
        font-size: 1.125rem;
        padding: 1rem;
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export default function FormStep1() {
    const { name, email, phoneNumber, dispatch } = useContext(FormInfoContext);

    const onChangeNameInput = e => dispatch({ type: 'NAME_INPUT', payload: e.target.value });

    const onChangeEmailInput = e => dispatch({ type: 'EMAIL_INPUT', payload: e.target.value });

    const onChangePhoneInput = e => dispatch({ type: 'PHONE_INPUT', payload: e.target.value });

    return (
        <m.section
            initial={{ opacity: 0, y: '5px' }}
            animate={{ opacity: 1, y: '0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: '5px' }}
        >
            <Container>
                <Title>Personal info</Title>

                <Subtitle>Please provide your name, e-mail address and phone number.</Subtitle>

                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        placeholder='e.g. Eduardo Nascimento'
                        value={name}
                        onChange={onChangeNameInput}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        placeholder='e.g. eduardosgn19@gmail.com'
                        value={email}
                        onChange={onChangeEmailInput}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <PhoneInput 
                        value={phoneNumber} 
                        onChange={onChangePhoneInput}
                        required
                    />
                </FormGroup>
            </Container>
        </m.section>
    );
};