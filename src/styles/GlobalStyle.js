/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';
import sourceSansRegularWoff from '../assets/fonts/source-sans-regular.woff';
import sourceSansRegularWoff2 from '../assets/fonts/source-sans-regular.woff2';
import sourceSans700Woff from '../assets/fonts/source-sans-700.woff';
import sourceSans700Woff2 from '../assets/fonts/source-sans-700.woff2';
import { device } from './deviceStyle';

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

        h1{
                font-family: 'bold';
                font-size: 1.5rem;
                line-height: 0.9;
                padding: 0;
                color: #ADC1D7;
                margin: 0;
                
        } 
        
        h2 {
                font-family: 'bold';
                font-size: 1.2rem;
                line-height: 0.9;
                padding: 0;
                color: #ADC1D7;
                margin-block-end: 10px;
        }
        
        h3, h4 {
                font-family: 'bold';
                font-size: 1rem;
                line-height: 1;
                padding: 0;
                color: #ADC1D7;
                margin-block: 0;
        }

        p {
                font-family: 'regular';
                line-height: 1.2;
                padding:0;
                margin: 0 0 20px;
                color: white;
        }			
        
        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li {
                margin: 0;
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
                padding-bottom: 10px;
        }

        @media ${device.mobileL}{
        ul, li {
              font-size: 1rem;
        }
        
        h1{
                font-size: 2.5rem;

        }

        h2 {
                font-size: 2rem;
                line-height: 1;
                margin-block: 20px;
                color: #ADC1D7;
        }

        h3, h4 {
              font-size: 1.3rem;
              margin: 0;
        }

        p{
                font-size: 1.3rem;
                margin: 0;
                margin: 0 0 20px;
        }


        }
`;
