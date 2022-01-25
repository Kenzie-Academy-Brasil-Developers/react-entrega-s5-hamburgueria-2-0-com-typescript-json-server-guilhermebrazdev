import styled from "styled-components";

export const Container = styled.div`
  /* background: blue; */
  display: flex;
  width: 100%;
  overflow-x: scroll;

  div {
    display: flex;
    gap: 4px;
    align-items: flex-start;
  }
`;

export const SingleBurguer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--gray);
  border-radius: 4px;

  > section {
    background: var(--gray);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    margin-left: 8px;

    > h1 {
      font-size: 1.3rem;
      font-weight: 600;
    }

    > p {
      color: var(--darkGray);
    }

    > h4 {
      color: var(--green);
    }
    > button {
      width: 100px;
      height: 30px;
    }
  }
`;
