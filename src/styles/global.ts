import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-family: 'Onest', sans-serif;
        font-size: 62.5%;
    
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);

        background: linear-gradient(45deg, #7E4D96, #5E018C, #2E1C37 );  
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
