import { ReactNode } from 'react';

import { Container, Input, Label } from './styles';

type CheckboxProps = {
  text: ReactNode;
  value: string;
};

export function Checkbox({ text, value }: CheckboxProps) {
  return (
    <Container>
      <Input type="checkbox" value={value} />

      <Label>{text}</Label>
    </Container>
  );
}
