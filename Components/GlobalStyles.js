import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    html {
        scroll-behavior: smooth;
    }
    
    html, body {
        height: 100%;
        font-family: 'Karla', sans-serif;
    }

    * {
        &:focus {
            /* box-shadow: 0 0 0 5px rgba(21, 156, 228, 0.4); */
            /* outline: 1px solid yellow; */
        }
        font-family: 'Karla', sans-serif;
        -webkit-overflow-scrolling: touch;
    }

    html, body, div, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, img, ol, ul, li, form, label,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }  

    button {
        cursor: pointer;
        background-color: transparent;
    }

    textarea {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, p, a, div, label {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`

export default GlobalStyles