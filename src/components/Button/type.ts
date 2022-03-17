import { LayoutProps, TypographyProps } from "styled-system";

export interface Props {
  title?: string;
  onClick: Function;
  style?: any;
}

export interface StyledProps extends TypographyProps, LayoutProps {}
