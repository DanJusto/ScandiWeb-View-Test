import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  color: ${({ theme }) => theme.COLORS.DARK_100};
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 110%;
  gap: 0.8rem;
  box-shadow: 3px 2px 2px ${({ theme }) => theme.COLORS.LIGHT_400};
  transition: 500ms;

  &:hover {
    background: ${({ theme }) => theme.COLORS.GREEN};
  }

  @media screen and (min-width: 600px) {
    padding: 0.9rem 2rem;
    font-size: 1.4rem;
    line-height: 120%;
    gap: 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 1rem 2.2rem;
    font-size: 1.6rem;
    line-height: 120%;
    gap: 0.8rem; 
  }
`;