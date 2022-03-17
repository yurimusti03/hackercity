import { LayoutProps, TypographyProps } from "styled-system";

export interface Props {
  title?: string;
  route?: Array<Item>;
}

interface Item {
  title?: string;
  routeName?: string;
  url?: string;
}

export interface StyledProps extends TypographyProps, LayoutProps {}
