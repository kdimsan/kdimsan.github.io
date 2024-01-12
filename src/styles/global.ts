import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-family: 'Onest', sans-serif;
        font-size: 62.5%;
    
        color-scheme: light dark;
        color: ${({ theme }) => theme.COLORS.LIGHT_900};

        background: ${({ theme }) => theme.COLORS.BG_PRIMARY}; 
        background-size: 200% 400%;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        @media(min-width: 1024px) {
            background-size: 200% 200%;
            animation: background-movement 10s linear infinite;
        }

      ::-webkit-scrollbar {
        display: none;
      }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-width: 320px;
        min-height: 100vh;
    }

    button {
        cursor: pointer;

        background: none;
        border: none;
    }

    @font-face {
        font-family: "Modernist";
        src: url('/fonts/Sk-Modernist-Regular.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Neutral-Face-Bold";
        src: url('/fonts/NeutralFace-Bold.otf') format('opentype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "Wild-World";
        src: url('/fonts/WILD-WORLD.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
    }


    @keyframes background-movement {
        0% {
            background-position: 0% 0%;
        }

        50%{
            background-position: 100% 40%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
`;
