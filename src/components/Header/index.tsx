import { useEffect, useState } from 'react';

import {
  Container,
  Content,
  JoinMissionButton,
  LogoIcon,
  StyledHeader,
} from './styles';

export function Header() {
  const [show, setShow] = useState(false);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;

    setShow(scrollPosition > screenHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <StyledHeader show={show} hide={!show}>
      <Container>
        <LogoIcon />

        <Content>
          <JoinMissionButton>Quero Embarcar Na Missão</JoinMissionButton>
        </Content>
      </Container>
    </StyledHeader>
  );
}
