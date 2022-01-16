import { animateScroll as scroll } from 'react-scroll';

import {
  BoostingPeopleIcon,
  Container,
  Copyright,
  Down,
  GoToTopButton,
  ArrowUpIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuTitle,
  RocketseatIcon,
  StyledFooter,
  Top,
} from './styles';

export function Footer() {
  function handleScrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <StyledFooter>
      <Container>
        <Top>
          <Copyright>
            <BoostingPeopleIcon />

            <span>
              Rocketseat 2021 <br /> Todos os direitos reservados
            </span>
          </Copyright>

          <Menu>
            <div>
              <MenuTitle>Sessões</MenuTitle>

              <MenuItem>
                <MenuLink>O que é o NLW</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink>Método</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink>Experts</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink>Depoimentos</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink>O que é o DoWhile2021</MenuLink>
              </MenuItem>
            </div>

            <div>
              <MenuTitle>Sobre</MenuTitle>

              <MenuItem>
                <MenuLink>A Rocketseat</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink>Direitos autorais</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink>Termos de uso</MenuLink>
              </MenuItem>

              <MenuItem>
                <MenuLink>Políticas de privacidade</MenuLink>
              </MenuItem>
            </div>
          </Menu>
        </Top>

        <Down>
          <RocketseatIcon />

          <GoToTopButton onClick={handleScrollToTop}>
            <ArrowUpIcon />
          </GoToTopButton>
        </Down>
      </Container>
    </StyledFooter>
  );
}
