import styled from "styled-components";

export const ContainerListMatchs = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a1887f;
  &:hover {
    box-shadow: 1px 1px purple, 2px 2px purple, 3px 3px purple;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
`;

export const Perfil = styled.img`
  border-radius: 50%;
  padding: 15px;
  width: 12%;
  height: 70%;
`;

export const Name = styled.p`
  margin-right: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
`;

export const ListRender = styled.div`
  overflow: auto;
  padding-bottom: 60px;

  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;
