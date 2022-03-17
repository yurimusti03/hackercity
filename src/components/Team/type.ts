import { GridProps, LayoutProps, TypographyProps } from "styled-system";

export interface Props {}

export interface StyledProps extends TypographyProps, LayoutProps, GridProps {
  background?: any;
}
