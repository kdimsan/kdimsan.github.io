import styled from "styled-components";

export const Container = styled.div`
  h4 {
    margin-left: 1.5rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_4L};

    margin: 6rem 1rem 1rem;
  }

  > p {
    font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
    margin: 0 2rem;

    text-align: justify;
  }

  @media (min-width: 1024px) {
    h4 {
      margin-left: 0;
    }
    h3 {
      margin: 4rem 1rem 2rem;
    }
    p {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_L};
    }
  }
`;
