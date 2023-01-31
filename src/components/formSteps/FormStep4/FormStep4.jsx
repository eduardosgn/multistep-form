import { motion as m } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../../style/Title';
import { Subtitle } from '../../style/Subtitle';
import { useContext } from 'react';
import FormInfoContext from '../../../context/form-info/FormInfoContext';
import { AddonsContext } from '../../../context/form-addons/AddonsContext';
import * as pallete from '../../style/StyledVars.js';
import UserInfo from './UserInfo';
import PlanInfo from './PlanInfo';

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

    > .addonsContainer {
        > p {
            font-size: 1.2rem;
            border-bottom: 1px solid ${ light_gray };
            color: ${ marine_blue };
            font-weight: bold;
        }
        > div {
            color: ${ marine_blue };
            font-size: 1rem;
            padding: 1rem;

            > p {
                margin-bottom: .5rem;
            }
        }
    }
`;

export default function FormStep4() {
    const addonsText = {
        onlineServiceMon: 'Online service - monthly - $1/month',
        largerStorageMon: 'Larger storage - monthly - $1/month',
        customProfileMon: 'Custom profile - monthly - $2/month',
        onlineServiceYr: 'Online service - yearly - $10/year',
        largerStorageYr: 'Larger storage - yearly - $10/year',
        customProfileYr: 'Custom profile - yearly - $20/year'
    };

    const { name, email, phoneNumber, monthly, yearly } = useContext(FormInfoContext);

    const [ addons ] = useContext(AddonsContext);

    const addonsList = Object.entries(addons)
        .filter(([, value]) => value)
        .map(([key]) => addonsText[key]);

    const { arcMon, advMon, proMon } = monthly;

    const { arcYr, advYr, proYr } = yearly;

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

                <UserInfo
                    labelText='Your name' 
                    infoState='name' 
                    infoText={ name }
                />

                <UserInfo 
                    labelText='Your e-mail' 
                    infoState='email' 
                    infoText={ email }
                />

                <UserInfo 
                    labelText='Your phone number' 
                    infoState='phone' 
                    infoText={ phoneNumber }
                />

                {arcMon && (
                    <PlanInfo   
                        planName='arcade'
                        planTitle='Arcade plan - monthly'
                        planPrice='$9/month'
                    />
                )}

                {advMon && (
                    <PlanInfo   
                        planName='advanced'
                        planTitle='Advanced plan - monthly'
                        planPrice='$12/month'
                    />
                )}

                {proMon && (
                    <PlanInfo   
                        planName='pro'
                        planTitle='Pro plan - monthly'
                        planPrice='$15/month'
                    />
                )}

                {arcYr && (
                    <PlanInfo   
                        planName='arcade'
                        planTitle='Arcade plan - yearly'
                        planPrice='$90/year'
                    />
                )}

                {advYr && (
                    <PlanInfo   
                        planName='advanced'
                        planTitle='Advanced plan - yearly'
                        planPrice='$120/year'
                    />
                )}

                {proYr && (
                    <PlanInfo   
                        planName='pro'
                        planTitle='Pro plan - yearly'
                        planPrice='$150/year'
                    />
                )}

                {addonsList.length > 0 && (
                    <div className='addonsContainer'>
                        <p>Add-ons</p>

                        <div>
                            {addonsList.map(addon => (
                                <p key={addon}>{addon}</p>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </m.section>
    );
};