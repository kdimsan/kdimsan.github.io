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

    z-index: 1;

    transition: all 0.3s ease;

    > .apresentation {
      > span {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_XS};
      }
      > h1 {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_3L};
        white-space: nowrap;
        line-height: 30px;
      }
      > h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
      }

      @media (min-width: 1024px) {
        span {
          font-size: ${({ theme }) => theme.FONT_SIZE.FS_S};
        }
        > h1 {
          font-size: ${({ theme }) => theme.FONT_SIZE.FS_4L};
          white-space: nowrap;
        }

        > h2 {
          font-size: ${({ theme }) => theme.FONT_SIZE.FS_2L};
        }
      }
    }
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
