import styled from "styled-components"
import { TypographyProps, typography } from "styled-system";

type textProps = TypographyProps

export const Text = styled.p<textProps>`
  font-famly: 14px ;
  color: '#fff';
  ${typography}
`;