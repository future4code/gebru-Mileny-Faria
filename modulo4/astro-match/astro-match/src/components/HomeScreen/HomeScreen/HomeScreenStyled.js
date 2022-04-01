import styled from "styled-components";

export const ContainerProfileAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LoadingProfile = styled.h1`
  left: 0;
  right: 0;
  margin: 50% auto;
  animation: is-rotating 1s infinite;
  border: 6px solid purple;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const Text = styled.h3`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #40e0d0;
  text-align: center;
  margin-top: -100px;
`;