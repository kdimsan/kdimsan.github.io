import styled from "styled-components";

export const Container = styled.header`
  .hidden {
    transform: translateY(-100%);
  }

  > div {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 13rem;

    padding: 2rem;

    background: ${({ theme }) => theme.COLORS.BG_HEADER};

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1000;

    transition: all 0.3s ease;
  }

  @media (min-width: 1024px) {
    > div {
      height: 10rem;

      padding: 2rem 10rem;

      flex-direction: row;
      gap: 5rem;

      justify-content: space-between;
    }
  }
`;
