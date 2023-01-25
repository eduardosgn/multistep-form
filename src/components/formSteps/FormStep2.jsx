import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../style/Title';
import { Subtitle } from '../style/Subtitle';

const Container = styled.section`
    margin-top: 2rem;
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
            </Container>
        </m.section>
    );
};