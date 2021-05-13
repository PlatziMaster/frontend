/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';
import sourceSansRegularWoff from '../assets/fonts/source-sans-regular.woff';
import sourceSansRegularWoff2 from '../assets/fonts/source-sans-regular.woff2';
import sourceSans700Woff from '../assets/fonts/source-sans-700.woff';
import sourceSans700Woff2 from '../assets/fonts/source-sans-700.woff2';

export const GlobalStyle = createGlobalStyle`
        html {
                box-sizing: border-box;
        }

	@font-face {
		font-family: 'regular';
		src: local('regular'), local('regular'),
		url(${sourceSansRegularWoff2}) format('woff2'),
		url(${sourceSansRegularWoff}) format('woff');
	}

        @font-face {
		font-family: 'bold';
		src: local('bold'), local('bold'),
		url(${sourceSans700Woff2}) format('woff2'),
		url(${sourceSans700Woff}) format('woff');
	}

        h1, h2, h3, h4 {
                font-family: 'bold';
                line-height: 1;
        }

        p {
                font-family: 'regular';
                line-height: 1.5;
        }			
        
        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }

        ul {
                list-style: none;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        body {
                height: 100vh;
                margin: 0 auto;
                overscroll-behavior: none;
                width: 100%;
                font-family: 'regular';
        }

        #app {
                overflow-x: hidden;
                min-height: 100vh;
                padding-bottom: 10px;
        }
`;
