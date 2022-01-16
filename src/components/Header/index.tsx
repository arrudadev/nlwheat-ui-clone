import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import {
  Container,
  Content,
  JoinMissionButton,
  LogoIcon,
  StyledHeader,
} from './styles';

export function Header() {
  const [show, setShow] = useState(false);
  const [joinMissionButtonText, setJoinMissionButtonText] = useState('');

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;

    setShow(scrollPosition > screenHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    const currentWidth = window.innerWidth;
    const mediumWidth = 576;

    if (currentWidth < mediumWidth) {
      setJoinMissionButtonText('Inscreva-se');
    } else {
      setJoinMissionButtonText('Quero Embarcar Na Missão');
    }
  }, []);

  return (
    <StyledHeader show={show} hide={!show}>
      <Container>
        <LogoIcon />

        <Content>
          <Link to="subscription" spy smooth>
            <JoinMissionButton>{joinMissionButtonText}</JoinMissionButton>
          </Link>
        </Content>
      </Container>
    </StyledHeader>
  );
}
