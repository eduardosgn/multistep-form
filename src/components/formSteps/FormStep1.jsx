import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../style/Title';
import { Subtitle } from '../style/Subtitle';

const Container = styled.section`
    margin-top: 2rem;
`;

export default function FormStep1() {
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
            </Container>
        </m.section>
    );
};