import styled from "styled-components";
import { background, flexbox, layout, space, typography } from "styled-system";

export const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  padding-top: 80px;
  ${background}
`;

export const LogoContainer = styled.div`
  margin: 0px 100px;

  svg {
    height: 332px;
    width: 480px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px 160px;
  max-width: 1200px;
  ${space}
  ${typography}
`

export const Title = styled.span`
  font-size: 40px;
  color: #000000;
  font-weight: bold;
  line-height: 10px;
  text-align: center;
  ${typography}
  ${space}

  @media (max-width: 1040px) {
    font-size: 40px;
    line-height: 70px;
  }

  @media (max-width: 639px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media (max-width: 478px) {
    font-size: 24px;
    line-height: 40px;
    margin-top: 30px;
    margin: 40px 40px;
  }

  @media (max-width: 390px) {
    font-size: 24px;
    line-height: 40px;
    margin-top: 50px;
    margin: 40px 40px;
  }
`

export const SubTitle = styled.span`
  font-size: 35px;
  color: #000000;
  text-align: center;
  line-height: 60px;
  margin-top: 50px;
  ${typography}
  ${space}

  span {
    color: #E59720;
    font-weight: bold;
  }

  @media (max-width: 1040px) {
    font-size: 34px;
    line-height: 40px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 60px;
` 

export const RegisterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 32px;
  width: 250px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  border-radius: 40px;
  font-weight: bold;
  margin-bottom: 50px;
  background-color: #11FFB3;
  letter-spacing: 1px;
  box-shadow: inset 0px -8px 3px rgba(0, 0, 0, 0.35);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
  transition: 0.5s;
  
  ${typography}
  ${flexbox}
  ${space}

    :hover {
    transform: scale(1.02);
    color: #000000;
    background-color: #2ffab9;
    border-color: #2ffab9;
    box-shadow: inset 0px -6px 3px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1040px) {
    margin-bottom: 50px;
  }

`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 120px;

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`

export const ListTitle = styled.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 10px;
  gap: 15px;
  font-weight: bold;

  span {
    color: #E59720;
  }

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;]
    font-size: 20px;
  }

  @media (max-width: 770px) {
    
  }
`


export const Elipse = styled.div`
  background-color: #EE9F16;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
  @media (max-width: 1040px) {
    display: none;
  }
`

export const TotalPriceContainer = styled.div`
  margin: 20px 160px;
  align-self: flex-start;

  @media (max-width: 1040px) {
    margin: auto;
  }

  svg {

    height: 200px;
    width: 500px;

    @media (max-width: 1340px) {
      height: 170px;
      width: 450px;
    }

    @media (max-width: 1040px) {
      height: 150px;
      width: 430px;
    }

    @media (max-width: 770px) {
      height: 160px;
      width: 400px;
    }

    @media (max-width: 642px) {
      height: 160px;
      width: 300px;
    }

  }
`

export const FinalDescription = styled.span`
  margin: 0px 160px;
  color: #000000;
  font-size: 30px;
  font-weight: bold;
  max-width: 750px;
  align-self: flex-start;
  ${space}
  ${typography}

  span {
    font-weight: bold;
    color: #E59720;
  }


  @media (max-width: 1040px) {
    text-align: center;
    font-size: 24px;
    
  }
`