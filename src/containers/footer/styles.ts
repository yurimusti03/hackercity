import styled from "styled-components";
import { background, flexbox, layout, space, typography } from "styled-system";

export const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #05B4E9;
  height: 100%;
  width: 100%;
  ${background}
`;

export const MainContainer = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 318px;
  margin: 0px 100px;
  border-bottom: 2px solid #fff;

  @media (max-width: 829px) {
    justify-content: flex-start;
    border: 0px;
  }

  @media (max-width: 829px) {
    justify-content: flex-start;
    border: 0px;
  }

  @media (max-width: 523px) {
    margin: 0px 40px;
  }
`

export const LogoContainer = styled.div`

  svg {
    margin-left: -48px;
    margin-top: -20px
    width: 360px;

    @media (max-width: 829px) {
      display: none;
    }
  }
`


export const Section = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
  margin-right: 0px;
`



export const Title = styled.a`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  opacity: 0.6;
  transition: 0.5s;

  :hover {
    transform: scale(1.03);
    color: #fff;
    opacity: 1;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  svg {
    width: 30px;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.5s;

    :hover {
      transform: scale(1.07);
      opacity: 1;
    }
  }
`

export const Copyright = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 100px;
  padding-top: 20px;
  
  @media (max-width: 770px) {
    flex-direction: column;
    border-top: 1px solid #fff;
  }

  @media (max-width: 523px) {
    margin: 0px 40px;
  }

  @media (max-width: 403px) {
    margin: 0px 40px;
  }
`

export const Cnpj = styled.span`
  color: #fff;
  font-size: 14px;

  @media (max-width: 770px) {
    font-size: 13px;
  }
`

export const Terms = styled.span`
  color: #fff;
  font-size: 14px;
  text-align: center;

  @media (max-width: 770px) {
    font-size: 13px;
  }
`

export const Name = styled.div`
  display: none;
  text-align: center;
  color: #ffffff80;
  font-weight: bold;
  font-size: 18px;

  @media (max-width: 829px) {
    display: flex;
    align-self: center;
  }

  @media (max-width: 403px) {
    font-size: 15px;
  }
`

export const IconContainer = styled.a`

`