import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 14rem;
    height: 14rem;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
    color: ${({ theme }) => theme.COLORS.DARK_100};
    border-radius: 0.5rem;
    box-shadow: 2px 2px 2px ${({ theme }) => theme.COLORS.LIGHT_400};
    transition: 500ms;

    > input {
        position: absolute;
        top: 1.1rem;
        left: 1.1rem;
        height: 1.1rem;
    }

    > p {
        font-size: 1.2rem;
        text-align: center;
    }

    @media screen and (min-width: 600px) {
        width: 17rem;
        height: 17rem;

        > input {
            top: 1.3rem;
            left: 1.3rem;
            height: 1.3rem;
        }

        > p {
            font-size: 1.4rem;
        }
    }

    @media screen and (min-width: 1024px) {
        width: 20rem;
        height: 20rem;

        > input {
            top: 1.5rem;
            left: 1.5rem;
            height: 1.5rem;
        }

        > p {
            font-size: 1.6rem;
        }
    }
`;