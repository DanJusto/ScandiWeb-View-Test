import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 5.7rem;
  border-top: 2px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms;

  > h3 {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 600px) {
    height: 6.7rem;

    > h3 {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 7.7rem;

    > h3 {
      font-size: 1.8rem;
    }
  }
`;