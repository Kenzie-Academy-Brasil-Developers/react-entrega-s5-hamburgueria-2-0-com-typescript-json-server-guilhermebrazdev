import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    justify-content: center;
    width: 300px;
    height: 350px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 4px;
    padding: 16px 0 16px 0;

    > h3 {
      width: 100%;
      /* background: orange; */
      display: flex;
      justify-content: space-around;

      a {
        color: var(--darkGray);
      }
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;

      > button {
        height: 40px;
      }
    }
  }
`;
