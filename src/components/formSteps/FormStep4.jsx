import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../style/Title';
import { Subtitle } from '../style/Subtitle';
import { useContext } from 'react';
import FormInfoContext from '../../context/form-info/FormInfoContext';

const Container = styled.section`
    margin-top: 2rem;
`;

export default function FormStep4() {
    const { name, email, phoneNumber } = useContext(FormInfoContext);

    return (
        <m.section
            initial={{ opacity: 0, y: '5px' }}
            animate={{ opacity: 1, y: '0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: '5px' }}
        >
            <Container>
                <Title>Finishing up</Title>
                <Subtitle>Double-check everything looks OK before confirming.</Subtitle>
                <p>{ name }</p>
                <p>{ email }</p>
                <p>{ phoneNumber }</p>
            </Container>
        </m.section>
    );
};