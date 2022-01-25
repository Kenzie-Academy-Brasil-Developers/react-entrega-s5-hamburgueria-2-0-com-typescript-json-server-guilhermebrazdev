import styled from "styled-components";

export const Container = styled.div`
  /* background: orange; */
  overflow-y: scroll;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;

    /* align-items: center; */
  }
`;

export const SingleProduct = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    padding-left: 4px;

    img {
      width: 80px;
      background: var(--gray);
      border-radius: 4px;
    }

    > div {
      margin-left: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > h1 {
        font-weight: 600;
      }
    }
  }

  button {
    height: 30px;
    margin-right: 4px;
  }
`;

export const Empty = styled.div`
  > div {
    margin-top: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;

    > h1 {
      font-size: 1.3rem;
      font-weight: 600;
    }

    > p {
      color: var(--darkGray);
    }
  }
`;
