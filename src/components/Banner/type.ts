import {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export interface Props {}

export interface StyledProps
  extends TypographyProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    FlexboxProps {
  src?: any;
  background?: any;
}
