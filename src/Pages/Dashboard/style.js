import styled from "styled-components";

export const Container = styled.div`
  /* background: orange; */
  display: flex;
  flex-direction: column;
  gap: 20px;

  > header {
    height: 50px;
    background: var(--gray);
    display: flex;
    justify-content: space-between;

    > nav {
      display: flex;
      align-items: center;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  > p {
    color: var(--red);
    margin: 6px 0 0 4px;
    font-weight: 600;
  }
`;
