import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.7rem;

    margin: 1rem 2rem;

    > li {
      display: flex;
      justify-content: center;
      list-style: none;
      flex-grow: 1;
      flex-basis: 250px;

      max-width: 30rem;
    }
  }

  @media (min-width: 1199px) {
    > ul {
      justify-content: flex-start;
    }
  }
`;

export const ProjectForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 3px solid ${({ theme }) => theme.COLORS.PRIMARY_BORDER};
  border-radius: 5px;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(1px 1px 5px #000) brightness(0.5);
  }

  > img {
    width: 100%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  > span {
    width: 100%;

    display: flex;
    justify-content: center;

    font-size: 1.5rem;
    font-weight: 500;

    background: ${({ theme }) => theme.COLORS.BG_PROJECTS};
  }
`;
