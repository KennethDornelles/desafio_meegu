import styled from "styled-components"
import { SpaceProps, TypographyProps, space, typography } from "styled-system";

type textProps = TypographyProps & SpaceProps

export const Text = styled.p<textProps>`
  font-famly: 14px ;
  color: '#fff';
  ${typography}
  ${space}
`;