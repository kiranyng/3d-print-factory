import { createGlobalStyle } from "styled-components"

export type Theme = {
    name: string,

    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    forthColor: string,
    highlightColor: string,
    highlightCounterColor: string,

    primaryFontFamily: string,
    secondaryFontFamily: string,
    tertiaryFontFamily: string,

    primaryFontSize: number,
    secondaryFontSize: number,
    tertiaryFontSize: number,
}

export const lightTheme = {
    name: 'Light',

    primaryColor: '#ffffff',
    secondaryColor: '#e9e9e9',
    tertiaryColor: '#110f11',
    forthColor: '#030303',
    highlightColor: 'green',
    highlightCounterColor: 'white',

    primaryFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    secondaryFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    tertiaryFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",

    primaryFontSize: 12,
    secondaryFontSize: 10,
    tertiaryFontSize: 8,
}

export const darkTheme = {
    name: 'Dark',

    primaryColor: '#121212',
    secondaryColor: '#202020',
    tertiaryColor: '#9e9e9e',
    forthColor: '#fff',
    highlightColor: 'green',
    highlightCounterColor: 'white',

    primaryFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    secondaryFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    tertiaryFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",

    primaryFontSize: 16,
    secondaryFontSize: 10,
    tertiaryFontSize: 8,
}

type ThemeProps = {
    theme: Theme
}

export const GlobalStyles = createGlobalStyle<ThemeProps>`
    body {
        background-color: ${ props => props.theme.tertiaryColor };
        color: ${ props => props.theme.primaryColor };

        font-family: ${ props => props.theme.primaryFontFamily };
        font-size: ${ props => props.theme.primaryFontSize }px;

        width: 100vw;
        height: 100vh;

        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        box-sizing: border-box;
    }
    
    #root {
        height: 100vh;
    }
`; 