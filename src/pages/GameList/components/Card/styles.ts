import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsInfoLg } from "react-icons/bs";
import {
  pallete,
  breakPoints,
  typografy,
  palleteOpacity,
} from "../../../../styles/styleVariables";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  text-align: center;
  transition: 350ms;
  width: 25%;
  height: 470px;
  border-radius: 20px;
  &:hover {
    box-shadow: 0 0 12px 5px ${pallete.darkGray};
    transition: 350ms;
  }
  @media (max-width: ${breakPoints.bigger}) {
    width: 40%;
  }
  @media (max-width: ${breakPoints.midSmall}) {
    width: 55%;
  }
  @media (max-width: ${breakPoints.small}) {
    width: 80%;
  }
`;
export const CardThumb = styled.img`
  border-radius: 10px;
  transition: 350ms ease-in-out;
  ${CardContainer}:hover & {
    margin-top: -2%;
  }
  @media (max-width: ${breakPoints.mid}) {
    width: 80%;
  }
`;
export const CardTitle = styled.h3`
  color: ${pallete.fontColorWhite};
  border-bottom: 1px solid ${pallete.yellow};
`;

export const CardDisplayInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SmallerInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: -11px;
  margin-bottom: 11px;
  font-size: ${typografy.fontSize.small};
  color: ${pallete.fontColorWhite}${palleteOpacity.half};
`;

export const SmallerInfoText = styled.span`
  padding: 0px 8px;
`;
export const GenreInfo = styled.div`
  margin-top: 0%;
`;
export const GenreText = styled.p`
  margin: 0;
  padding: 6px 8px;
  color: ${pallete.fontColorWhite};
`;

export const CardHiddenInfoContainer = styled.div`
  opacity: 0;
  max-height: 0;
  transition: 350ms ease-in-out;
  ${CardContainer}:hover & {
    opacity: 1;
    display: flex;
    justify-content: center;
    max-height: 10%;
    width: 100%;
    gap: 20%;
    margin-top: 5%;
  }
`;
export const CardGameInfo = styled.p`
  color: ${pallete.fontColorWhite};
  margin: 8px 24px;
`;
export const CardGameLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 0;
  margin: 16px 0 0 0;
  width: 100%;
`;
export const CardGameLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  width: 30%;
  border-radius: 15px;
`;
export const CardGameLinkLabel = styled.label`
  text-decoration: none;
  color: ${pallete.fontColorWhite};
  margin-bottom: 8px;
`;
export const CardGameMoreInfoIcon = styled(BsInfoLg)`
  color: ${pallete.fontColorWhite};
  padding: 8px;
  width: 100%;
  border-radius: 15px;
  border: 2px solid ${pallete.yellow};
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;
export const CardGameStoreIcon = styled(FiShoppingCart)`
  color: ${pallete.fontColorWhite};
  padding: 8px;
  width: 100%;
  border-radius: 15px;
  border: 2px solid ${pallete.yellow};
  &:hover {
    background-color: ${pallete.yellow};
    color: ${pallete.fontColorBlack};
  }
`;
export const OutlineHeartIcon = styled(AiOutlineHeart)`
  border-radius: 50%;
  padding: 8px;
  color: ${pallete.yellow};
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const FilledHeartIcon = styled(AiFillHeart)`
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  color: red;
  cursor: pointer;
`;
