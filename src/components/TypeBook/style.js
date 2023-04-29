import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  p {
    margin-top: 1rem;
    font-size: 1.4rem;
  }

  div {
    width: 35.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    label {
      font-size: 1.4rem;
    }

    input {
      width: 26rem;
      height: 3rem;
      border-radius: 0.5rem;
      padding: 0 0.8rem;
      font-size: 1.4rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media screen and (min-width: 600px) {
    gap: 2.5rem;
    
    p {
      font-size: 1.7rem;
      margin-top: 1.2rem;
    }

    div {
      width: 46rem;

      label {
        font-size: 1.7rem;
      }
    
      input {
        width: 33rem;
        height: 3.5rem;
        padding: 0 1rem;
        font-size: 1.7rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 3rem;
    
    p {
      font-size: 2rem;
      margin-top: 1.4rem;
    }
    
    div {
      width: 60rem;

      label {
        font-size: 2rem;
      }
      
      input {
        width: 40rem;
        height: 4rem;
        padding: 0 1.2rem;
        font-size: 2rem;
      }
    }
  }
`;