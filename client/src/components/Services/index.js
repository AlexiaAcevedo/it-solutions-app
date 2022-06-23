import React from 'react';
import Icon1 from '../../images/services1.svg';
import Icon2 from '../../images/services2.svg';
import Icon3 from '../../images/services3.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Professional Services</ServicesH2>
                        <ServicesP>We provide professional services on demand.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Data Analytics Services</ServicesH2>
                        <ServicesP>We advise, develop and implement modern data, analytics and AI solutions for all your tech needs.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Cloud Operations</ServicesH2>
                        <ServicesP>Architecture, consulting, support and development of infrastructure automation in public and private Clouds.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services