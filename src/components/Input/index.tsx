import { ReactNode } from 'react';

import { Container, Icon, Label, StyledInput } from './styles';

type InputProps = {
  icon: ReactNode;
  label: string;
};

export function Input({ icon, label }: InputProps) {
  return (
    <Container>
      <Icon>{icon}</Icon>

      <Label>{label}</Label>

      <StyledInput placeholder={label} />
    </Container>
  );
}
