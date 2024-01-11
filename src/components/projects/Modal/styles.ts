import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 100;

  .fadeout {
    animation: fade-modal 0.4s;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 90%;

  height: 95vh;
  max-height: 100vh;
  min-height: 60%;

  overflow-y: scroll;

  padding: 6rem 4rem;

  background: ${({ theme }) => theme.COLORS.BG_MODAL};
  border-radius: 10px;

  opacity: 0;

  animation: open-modal 0.5s 0.1s forwards ease-in-out;

  @media (min-width: 1024px) and (max-width: 1299px) {
    padding: 4rem;
    width: 80%;
    height: 90%;
  }
  @media (min-width: 1300px) {
    width: 70%;
    display: flex;
    height: 90%;
  }

  > div {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      gap: 5rem;
    }
  }

  > button {
    position: absolute;
    top: 20px;
    right: 15px;

    > svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @keyframes fade-modal {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate(-50%, -20%);
    }
  }

  @keyframes open-modal {
    from {
      opacity: 0;
      transform: translate(-50%, -80%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

export const ModalImage = styled.div``;

export const ModalText = styled.div`
  .underline {
    position: relative;
    display: inline-block;
  }

  .underline::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.3s ease;
  }

  .underline:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  > h2 {
    font-size: 2.2rem;
    margin: 2rem 0 0;
    align-self: center;

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }

  > p {
    font-size: 1.5rem;
    text-align: justify;

    margin: 1rem 0;

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_900};
      transition: filter 0.3s;

      &:hover {
        filter: drop-shadow(0 0 2px #fff);
        outline: none;
      }
    }

    @media (min-width: 1024px) {
      font-size: 1.7rem;
    }
  }

  > span {
    display: flex;
    align-items: center;
    gap: 5px;

    margin: 1rem 0;

    font-size: 1.5rem;
    text-align: justify;

    @media (min-width: 1024px) {
      font-size: 1.7rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 5px 0;

    font-size: 1.5rem;

    transition: all 0.3s;

    &:hover {
      transform: scale(1.15);
      filter: drop-shadow(0 0 3px #fff);
    }

    > svg {
      width: 2rem;
      height: 2rem;
    }

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_900};
    }

    @media (min-width: 1024px) {
      font-size: 1.7rem;
    }
  }
`;

export const LanguagesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 1rem;

  margin: 2rem 0;

  > div {
    background: ${({ theme }) => theme.COLORS.BG_SKILLS};
    border-radius: 5px;

    padding: 5px 10px;

    > span {
      font-size: ${({ theme }) => theme.FONT_SIZE.FS_M};
      white-space: nowrap;
      cursor: default;
    }
  }
`;
