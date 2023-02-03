import styled from "styled-components";

export const MainPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  margin-top: 20%;
`;

export const MainTitle = styled.p`
  font-size: 1.5rem;
`;

export const MainButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
`;

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  line-height: 1.6;
  color: white;
  user-select: none;
  background-color: rgb(19, 23, 32);
  border: 1px solid rgba(250, 250, 250, 0.2);
  font-size: 1.5rem;
  margin-left: 3rem;

  cursor: pointer;

  &:hover{
    color: red;
    border-color: red;
  }
`;