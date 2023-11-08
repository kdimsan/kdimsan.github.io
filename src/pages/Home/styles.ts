import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 2rem;

  > main {
    flex: 1;

    > div {
      min-height: 90vh;

      position: relative;

      border-bottom: 3px solid #fff;
      border-radius: 30px;

      padding: 1rem;

      > h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_4L};

        margin: 1rem 0 1.5rem 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 2rem 10rem;
  }
`;
