import styled from "styled-components";

export const ContainerButtons = styled.div`
  padding: 10px 0px;
  position: absolute;
  margin-top: 550px;
`;

export const ButtonX = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  color: red;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
  border: 1px solid red;
  margin-left: 58px;
  &:hover {
    background-color: red;
    color: white;
    border: 1px solid red;
  }
`;

export const ButtonHeart = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  color: green;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
  border: 1px solid green;
  margin-left: 122px;
  &:hover {
    background-color: green;
    color: white;
    border: 1px solid green;
  }
`;
