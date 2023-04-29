import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 11.4rem;
    transition: 500ms;

    > .header {
        h1 {
            font-size: 2.4rem;
        }

        .buttons {
            display: flex;
            gap: 1.6rem;

            #cancel-btn:hover {
                background: ${({ theme }) => theme.COLORS.RED_400};
            }
        }
    }

    > main {
        width: 80%;
        padding: 0 2rem 8.7rem;
    }

    @media screen and (min-width: 600px) {
        padding-top: 13rem;

        > .header {
            height: 10rem;
            padding: 0 3rem;

            h1 {
            font-size: 3.0rem;
            }

            .buttons {
            gap: 1.8rem;
            }
        }

        > main {
            padding: 0 3rem 9.7rem;
        }
    }

    @media screen and (min-width: 1024px) {
        padding-top: 14.4rem;

        > .header {
            height: 11.4rem;
            padding: 0 4rem;

            h1 {
            font-size: 3.6rem;
            }

            .buttons {
            gap: 2rem;
            }
        }
        
        > main {
            padding: 0 4rem 10.7rem;
        }
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    transition: 500ms;

    > .input-wrap {
        width: 35.5rem;
        display: flex;
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

        select {
            width: 18rem;
            height: 3rem;
            border-radius: 0.5rem;
            padding: 0 0.8rem;
            font-size: 1.4rem;
            background-color: ${({ theme }) => theme.COLORS.DARK_1000};
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    > .input-wrap:nth-child(4) {
        padding-bottom: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    @media screen and (min-width: 600px) {
        width: 100%;
        gap: 2.5rem;

        > .input-wrap {
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

            select {
                width: 24rem;
                height: 3.5rem;
                padding: 0 1rem;
                font-size: 1.7rem;
            }
        }

        > .input-wrap:nth-child(4) {
            padding-bottom: 2.5rem;
        }
    }

    @media screen and (min-width: 1024px) {
        width: 100%;
        gap: 3rem;

        > .input-wrap {
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

            select {
                width: 30rem;
                height: 4rem;
                padding: 0 1.2rem;
                font-size: 2rem;
            }
        }

        > .input-wrap:nth-child(4) {
            padding-bottom: 3rem;
        }
    }
`