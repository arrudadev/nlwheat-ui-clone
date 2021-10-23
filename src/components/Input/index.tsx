import { Container, Icon, Label, StyledInput } from './styles';

type InputProps = {
  icon: string;
  label: string;
};

export function Input({ icon, label }: InputProps) {
  return (
    <Container>
      <Icon src={`/icons/inputs/${icon}`} />

      <Label>{label}</Label>

      <StyledInput placeholder={label} />
    </Container>
  );
}
