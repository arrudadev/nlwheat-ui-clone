import { ReactNode, useState } from 'react';

import { Container, Icon, Label, StyledInput } from './styles';

type InputProps = {
  icon: ReactNode;
  label: string;
};

export function Input({ icon, label }: InputProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);

  function handleInputFocus() {
    setIsInputFocused(true);
  }

  function handleInputBlur() {
    setIsInputFocused(false);
  }

  return (
    <Container isFocused={isInputFocused}>
      <Icon isFocused={isInputFocused}>{icon}</Icon>

      <Label>{label}</Label>

      <StyledInput
        placeholder={label}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}
