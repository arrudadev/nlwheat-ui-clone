import { Button, Container } from './styles';

type EditionButtonMobileProps = {
  edition: string;
  onClick: () => void;
  isActive?: boolean;
};

export function EditionButtonMobile({
  edition,
  onClick,
  isActive = false,
}: EditionButtonMobileProps) {
  return (
    <Container className={isActive ? 'active' : ''}>
      <Button onClick={onClick}>
        <strong>#0{edition}</strong>
      </Button>
    </Container>
  );
}
