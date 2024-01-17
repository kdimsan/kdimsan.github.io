import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;

    > img {
      width: 28rem;
      height: 16rem;
      border-radius: 6px;
      box-shadow: 0 0 11px 3px #000;

      @media (min-width: 1024px) {
        width: 40rem;
        height: 22.5rem;
      }
    }
  }
`;
