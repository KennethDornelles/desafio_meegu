import styled from "styled-components";
import { FlexProps, flex } from "styled-system";

type InputProps = FlexProps

export const Input = styled.input<InputProps>`
  background-color: transparent;
  padding: 20px;
  border: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: '#fff';

  &::placeholder{
    color: rgba(255, 255, 255, 0.2)
  }

  ${flex}
`;