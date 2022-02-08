import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        -webkit-font-ssmoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        overflow: auto;
        font-family: Tahoma, sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    /**
    * Chrome has a bug with transitions on load since 2012!
    *
    * To prevent a "pop" of content, you have to disable all transitions until
    * the page is done loading.
    *
    * https://lab.laukstein.com/bug/input
    * https://twitter.com/timer150/status/1345217126680899584
    */
    body.loading * {
        transition: none !important;
    }

`;
