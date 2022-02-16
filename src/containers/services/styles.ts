import styled from "styled-components";
import { background, flexbox, layout, space, typography, grid } from "styled-system";

export const MainBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  ${layout}
  ${flexbox}
  ${background}
`;

export const Title = styled.span`
  font-size: 55px;
  color: #fff;  
  text-align: center;
  line-height: 70px;
  font-weight: bold;
  margin: 100px 120px;
  ${typography}
  ${space}

  .react-reveal {
    text-align: center;
    font-size: 40px;
  }

  span {
    color: #004357;
  }

  @media (max-width: 1040px) {
    line-height: 60px;
    text-align: center;
  }

  @media (max-width: 630px) {
    line-height: 40px;
  }

  @media (max-width: 390px) {
    line-height: 40px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 100px;
` 

export const SubTitle = styled.span`
  font-size: 32px;
  color: #fff;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  ${typography}
  ${space}

  .react-reveal {
    text-align: center;
    font-size: 36px;
  }

  span {
    color: #11FFB3;
    font-weight: bold;
  }

  @media (max-width: 1040px) {
    text-align: center;
  }

  @media (max-width: 638px) {
    max-width: 400px;

    .react-reveal {
    text-align: center;
    font-size: 30px;
  }
  }

  @media (max-width: 390px) {
    max-width: 300px;
  }
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  margin-top: 100px;
  ${layout}
  ${space}
  ${typography}
  ${flexbox}
  ${grid}

  @media (max-width: 1040px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
  @media (max-width: 638px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 390px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardTitle = styled.span`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 1040px) {
    font-size: 26px;
  }

  @media (max-width: 638px) {
    font-size: 18px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid #fff;
  border-radius: 30px;
  width: 510px;
  height: 670px;

  @media (max-width: 1040px) {
    text-align: center;
    width: 510px;
    height: 700px;
  }

  @media (max-width: 638px) {
    text-align: center;
    width: 370px;
    height: 750px;
  }

  @media (max-width: 390px) {
    text-align: center;
    width: 330px;
    height: 750px;
  }
`

export const Description = styled.div`
  color: #101010;
  font-size: 20px;
  margin-top: 30px;
  max-width: 400px;
  text-align: center;
  line-height: 35px;

  @media (max-width: 1040px) {
    font-size: 22px;
  }

  @media (max-width: 638px) {
    max-width: 290px;
    font-size: 18px;
  }

  @media (max-width: 390px) {
    max-width: 300px;
  }
`

export const IconContainer = styled.div`
  margin-top: 50px;

  svg {
    width: 140px;
    height: 140px;

    @media (max-width: 638px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 390px) {
      width: 150px;
      height: 150px;
    }
  }
`

export const RegisterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 30px;
  width: 330px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  border-radius: 40px;
  background-color: #11FFB3;
  margin-bottom: 50px;
  letter-spacing: 1px;
  box-shadow: inset 0px -7px 3px rgba(0, 0, 0, 0.45);
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
    background-color: #11FFB3;
    border-color: #11FFB3;
    box-shadow: inset 0px -6px 3px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1040px) {
    padding: 25px 20px;
    width: 300px;
    font-size: 24px;
    margin-bottom: 60px;
  }

  @media (max-width: 638px) {
    padding: 20px 20px;
    width: 240px;
    font-size: 18px;
    margin-bottom: 60px;
  }

  @media (max-width: 390px) {
    padding: 20px 20px;
    width: 240px;
    font-size: 18px;
    margin-bottom: 60px;
  }

`;