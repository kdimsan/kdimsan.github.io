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
