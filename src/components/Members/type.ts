import { LayoutProps, TypographyProps } from "styled-system";
import { Url } from "url";

export interface Props {
  name: string;
  photo: string;
  tag: string;
  description: string;
  links?: Links;
}

interface Links {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}

export interface StyledProps extends TypographyProps, LayoutProps {
  background?: any;
}
