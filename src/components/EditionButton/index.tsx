import { Button, Container } from './styles';

type EditionButtonProps = {
  edition: string;
  onClick: () => void;
  isActive?: boolean;
};

export function EditionButton({
  edition,
  onClick,
  isActive = false,
}: EditionButtonProps) {
  return (
    <Container className={isActive ? 'active' : ''}>
      <Button onClick={onClick}>
        <span>Edição</span>

        <strong>#0{edition}</strong>
      </Button>
    </Container>
  );
}
