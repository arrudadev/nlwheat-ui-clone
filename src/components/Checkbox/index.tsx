import { ReactNode } from 'react';

import { Container, Input, Label } from './styles';

type CheckboxProps = {
  text: ReactNode;
  value: string;
  checked: boolean;
  onChange: () => void;
};

export function Checkbox({ text, value, checked, onChange }: CheckboxProps) {
  return (
    <Container>
      <Input type="checkbox" value={value} />

      <Label isChecked={checked} onClick={onChange}>
        {text}
      </Label>
    </Container>
  );
}
