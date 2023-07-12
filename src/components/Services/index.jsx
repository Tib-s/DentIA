import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nos Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Integration de l'IA</ServicesH2>
          <ServicesP>Integration de l'IA dans votre quotidien.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Diagnostic</ServicesH2>
          <ServicesP>Analyse approfondie de données médicales par l'IA.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Plateforme</ServicesH2>
          <ServicesP>Une plateforme personnalisée et intuitive.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
