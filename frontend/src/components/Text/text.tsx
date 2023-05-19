import styled from "styled-components"
import { color, ColorProps, space, SpaceProps, typography, TypographyProps } from "styled-system";

type textProps = TypographyProps & SpaceProps & ColorProps

export const Text = styled.p<textProps>`
  font-famly: 14px ;
  color: '#fff';
  ${color}
  ${typography}
  ${space}
`;