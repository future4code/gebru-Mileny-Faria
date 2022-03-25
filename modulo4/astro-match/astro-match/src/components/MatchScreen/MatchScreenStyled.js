import styled from "styled-components";

export const ContainerListMatchs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #a1887f;
  &:hover {
    background-color: #bdbdbd;
  }
`;

export const Perfil = styled.img`
  border-radius: 50%;
  padding: 15px;
  width: 70px;
  height: 70px;
`;

export const Name = styled.p`
  margin-right: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
`;
