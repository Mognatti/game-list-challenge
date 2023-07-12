import styled from "styled-components";
import {
  pallete,
  palleteOpacity,
  typografy,
} from "../../styles/styleVariables";
import { TiArrowBackOutline } from "react-icons/ti";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  opacity: 1;
  &::before {
    content: "";
    background-image: url("/images/login_bg.png");
    background-size: auto;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
    z-index: -1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${pallete.yellow + palleteOpacity.third};
  width: 30%;
  padding: 32px 20px;
  background-color: ${pallete.backgroundColorDark};
  border-radius: 15px;
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 0;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Label = styled.label``;

export const Input = styled.input`
  padding: 10px;
  border-radius: 2px;
  border: none;
  margin: 8px 0 8px 0;
  color: ${pallete.fontColorWhite};
  background-color: transparent;
  outline: 1px solid ${pallete.yellow + palleteOpacity.third};
  width: 95%;
  &:hover,
  &:focus {
    transition: 250ms;
    box-shadow: 0px 0px 10px 0px ${pallete.yellow}${palleteOpacity.third};
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 2px;
  border: none;
  margin: 8px 0 8px 0;
  color: ${pallete.fontColorWhite};
  background-color: transparent;
  outline: 1px solid ${pallete.yellow}${palleteOpacity.third};
  cursor: pointer;
  font-weight: 500;
  font-size: ${typografy.fontSize.regular};
  &:hover {
    transition: 250ms;
    box-shadow: 0px 0px 10px 0px ${pallete.yellow}${palleteOpacity.third};
  }
`;

export const GoBackIcon = styled(TiArrowBackOutline)`
  color: ${pallete.yellow};
`;
