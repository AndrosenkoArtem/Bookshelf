import {
  Container,
  GerbIcon,
  Img,
  P,
  Li,
  Title,
  CollapsesContainer,
  ArrowDownIcon,
  Button,
} from './SupportUkraine.styled';
import React, { useState } from 'react';
import action from 'images/action.svg';
import hope from 'images/hope.svg';
import medecins from 'images/medecins.svg';
import medical from 'images/medical.svg';
import prytula from 'images/prytula.svg';
import razom from 'images/razom.svg';
import worldVision from 'images/worldVision.svg';
import saveChildren from 'images/saveChildren.svg';
import united24 from 'images/united24.svg';
export const SupportUkraine = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Container>
        <Title>
          Support Ukraine
          <GerbIcon />
        </Title>
        <ul>
          <Li>
            <P>01</P>
            <a href="https://www.savethechildren.net/what-we-do/emergencies/ukraine">
              <Img src={saveChildren} alt="" />
            </a>
          </Li>
          <Li>
            <P>02</P>
            <a href="https://www.projecthope.org/country/ukraine/">
              <Img src={hope} alt="" />
            </a>
          </Li>
          <Li>
            <P>03</P>
            <a href="https://internationalmedicalcorps.org/country/ukraine/">
              <Img src={medical} alt="" />
            </a>
          </Li>
          <Li>
            <P>04</P>
            <a href="https://www.razomforukraine.org/">
              <Img src={razom} alt="" />
            </a>
          </Li>
          <Li>
            <P>05</P>
            <a href="https://www.actionagainsthunger.org/location/europe/ukraine/">
              <Img src={action} alt="" />
            </a>
          </Li>
          <Li style={{ marginBottom: isCollapse && '20px' }}>
            <P>06</P>
            <a href="https://prytulafoundation.org/enz">
              <Img src={prytula} alt="" />
            </a>
          </Li>

          <CollapsesContainer className={isCollapse && 'isActive'}>
            <Li>
              <P>07</P>
              <a href="https://www.msf.org/ukraine">
                <Img src={medecins} alt="" />
              </a>
            </Li>
            <Li>
              <P>08</P>
              <a href="https://u24.gov.ua/uk">
                <Img src={united24} alt="" />
              </a>
            </Li>
            <Li>
              <P>09</P>
              <a href="https://www.wvi.org/emergencies/ukraine">
                <Img src={worldVision} alt="" />
              </a>
            </Li>
          </CollapsesContainer>
        </ul>
        <Button type="button" onClick={() => setIsCollapse(!isCollapse)}>
          <ArrowDownIcon rotate={{ isCollapse }} />
        </Button>
      </Container>
    </>
  );
};
