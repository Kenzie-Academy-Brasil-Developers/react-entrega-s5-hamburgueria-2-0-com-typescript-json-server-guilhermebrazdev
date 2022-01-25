import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  #title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    width: 300px;

    > h1 {
      font-size: 1.9rem;
      font-weight: 600;
    }

    > p {
      color: var(--red);
      margin: 8px 0 0px 8px;
      margin-right: 10px;
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  > section {
    display: flex;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 4px;

    > div {
      width: 100px;
      background: #27ae601a;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      margin: 8px;

      > svg {
        width: 50px;
        height: 30px;
        color: var(--green);
      }
    }

    > p {
      margin: 8px;
    }
  }

  #formBox {
    display: flex;
    justify-content: center;
    width: 300px;
    height: 300px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 4px;
    padding: 16px 0 16px 0;

    > b {
      width: 80%;
      font-size: 1.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      width: 80%;

      > button {
        height: 40px;
      }

      > p {
        color: var(--darkGray);
        text-align: center;
      }
    }
  }
`;
