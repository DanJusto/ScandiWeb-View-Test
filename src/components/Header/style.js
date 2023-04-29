import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 80%;
  height: 8.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  padding: 0 2rem;
  transition: 500ms;

  @media screen and (min-width: 600px) {
    height: 10rem;
    padding: 0 3rem;
  }

  @media screen and (min-width: 1024px) {
    height: 11.4rem;
    padding: 0 4rem;
  }
`;