import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.isGray ? "var(--gray)" : "var(--green)")};
  color: ${(props) => (props.isGray ? "var(--darkGray) " : "var(--white)")};
  width: 150px;
  height: 40px;
  border-radius: 8px;
  font-size: large;
  cursor: pointer;
  border: none;
`;
