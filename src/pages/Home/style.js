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

            /*.item {
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
            }*/
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

                /*.item {
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
                }*/
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

                /*.item {
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
                }*/
            }
        }
    }
`

export const Item = styled.div`
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