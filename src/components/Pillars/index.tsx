import CheckIcon from '../../assets/icons/check.svg';
import { Container, Item, List, Title } from './styles';

export function Pillars() {
  return (
    <Container>
      <Title>Os 3 pilares combinados te darão:</Title>

      <List>
        <Item>
          <CheckIcon />

          <span>Experiência e portfolio</span>
        </Item>

        <Item>
          <CheckIcon />

          <span>Domínio das ferramentas</span>
        </Item>

        <Item>
          <CheckIcon />

          <span>Conexões valiosas</span>
        </Item>

        <Item>
          <CheckIcon />

          <span>Confiança no seu código</span>
        </Item>

        <Item>
          <CheckIcon />

          <span>Velocidade de aprendizado</span>
        </Item>

        <Item>
          <CheckIcon />

          <span>Carreira acelerada</span>
        </Item>

        <Item>
          <CheckIcon />

          <span>Melhores decisões</span>
        </Item>

        <Item>
          <CheckIcon />

          <span>Maturidade profissiona</span>
        </Item>

        <Item>
          <CheckIcon />

          <span>Evolução constante</span>
        </Item>
      </List>
    </Container>
  );
}
