import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
`;

export const Modal = styled.div`
  width: 300px;
  min-height: 150px;
  max-height: 400px;
  background: var(--white);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  > header {
    width: 100%;
    background: var(--green);
    border-radius: 4px 4px 0 0;
    color: var(--white);
    min-height: 40px;
    max-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0px 0 0px;

    > p {
      font-size: 1.1rem;
      margin-left: 4px;
      font-weight: 600;
    }

    > button {
      color: var(--gray);
      height: 100%;
      margin-right: 4px;
    }
  }
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;

  > div {
    display: flex;
    justify-content: space-between;

    > h3 {
      font-weight: 600;
    }

    > p {
      font-weight: 600;
      color: var(--darkGray);
    }
  }
`;
