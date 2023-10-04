import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >figure{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;

        >img {
            width: 20rem;
            height: 15rem;
            border-radius: 10%;
            box-shadow: 0 0 11px 3px #000;

            @media(min-width: 1024px) {
                width: 28rem;
                height: 20rem;
            }
        }
    }
`;