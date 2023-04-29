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

            #delete-product-btn:hover {
                background: ${({ theme }) => theme.COLORS.RED_400};
            }
        }
    }

    > main {
        width: 80%;
        padding: 0 2rem 8.7rem;

        .section {
            display: flex;
            gap: 0.8rem;
            flex-wrap: wrap;
            justify-content: center;
        }
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

            .section {
                gap: 1rem;
            }
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

            .section {
                gap: 1.2rem;
            }
        }
    }
`