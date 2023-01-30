import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../../style/Title';
import { Subtitle } from '../../style/Subtitle';
import { useContext } from 'react';
import FormInfoContext from '../../../context/form-info/FormInfoContext';
import { AddonsContext } from '../../../context/form-addons/AddonsContext';
import Option from './Option';

const Container = styled.section`
    margin-top: 2rem;
`;

export default function FormStep3() {
    const { monthly } = useContext(FormInfoContext);
    const [addons, setAddons] = useContext(AddonsContext);

    const handleCheckboxChange = e => {
        setAddons({ ...addons, [e.target.name]: e.target.checked });
    };

    const {
        onlineServiceMon, 
        largerStorageMon, 
        customProfileMon, 
        onlineServiceYr, 
        largerStorageYr, 
        customProfileYr 
    } = addons;

    const { setMonthly } = monthly;

    return (
        <m.section
            initial={{ opacity: 0, y: '5px' }}
            animate={{ opacity: 1, y: '0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: '5px' }}
        >
            <Container>
                <Title>Pick add-ons</Title>
                <Subtitle>Add-ons help enhance your gaming experience.</Subtitle>

                {setMonthly ? (
                    <section>
                        <Option
                            handleFunc={handleCheckboxChange}
                            inputName='onlineServiceMon'
                            inputState={onlineServiceMon}
                            optionTitle='Online service'
                            optionDescription='Access to multiple games'
                            optionPrice='+$1/month'
                            key='onlineServiceMon'
                        />
                        <Option
                            handleFunc={handleCheckboxChange}
                            inputName='largerStorageMon'
                            inputState={largerStorageMon}
                            optionTitle='Larger storage'
                            optionDescription='Extra 1TB of cloud save'
                            optionPrice='+$2/month'
                            key='largerStorageMon'
                        />
                        <Option
                            handleFunc={handleCheckboxChange}
                            inputName='customProfileMon'
                            inputState={customProfileMon}
                            optionTitle='Customizable profile'
                            optionDescription='Custom theme on your profile'
                            optionPrice='+$2/month'
                            key='customProfileMon'
                        />
                    </section>
                ) : (
                    <section>
                        <Option
                            handleFunc={handleCheckboxChange}
                            inputName='onlineServiceYr'
                            inputState={onlineServiceYr}
                            optionTitle='Customizable profile'
                            optionDescription='Custom theme on your profile'
                            optionPrice='+$10/year'
                            key='onlineServiceYr'
                        />
                        <Option
                            handleFunc={handleCheckboxChange}
                            inputName='largerStorageYr'
                            inputState={largerStorageYr}
                            optionTitle='Larger storage'
                            optionDescription='Extra 1TB of cloud save'
                            optionPrice='+$10/year'
                            key='largerStorageYr'
                        />
                        <Option
                            handleFunc={handleCheckboxChange}
                            inputName='customProfileYr'
                            inputState={customProfileYr}
                            optionTitle='Customizable profile'
                            optionDescription='Custom theme on your profile'
                            optionPrice='+$20/year'
                            key='customProfileYr'
                        />
                    </section>
                )}
            </Container>
        </m.section>
    );
};