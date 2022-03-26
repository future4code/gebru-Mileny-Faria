import styled from "styled-components";

export const ContainerClearButton = styled.div`
  
  margin-top: 18%;
  margin-left: 33%;
`;

export const ClearButton = styled.button`
  border-radius: 30px;
  background-color: #40e0d0;
  border: solid 1px;
  border-color: #40e0d0;
  padding: 4px;
  width: 130px;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  position: fixed;
  &:hover {
    background-color: purple;
    color: white;
    border: 1px solid purple;
  }
`;
