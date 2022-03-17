import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";

export interface Props {}

export interface StyledProps extends TypographyProps, LayoutProps, SpaceProps {
  background: any;
}
