import styled from "styled-components";
import { Theme } from "../theme";

import logo from '../Assets/images/test-logo.png';

export const StyledContainer = styled.div`
    height: 100vh;

    display: grid;
    grid-template-areas: 'app-header app-header app-header app-header app-header' 'app-left app-mid app-mid app-mid app-right' 'app-left app-footer app-footer app-footer app-footer';
    grid-template-rows: 50px auto 50px;
    grid-gap: 10px;

    background: ${ ({ theme }) => (theme as Theme).primaryColor };
    color: ${ ({ theme }) => (theme as Theme).forthColor };
`;

export const StyledHeader = styled.div`
    grid-area: app-header;

    background-color:${ ({ theme }) => (theme as Theme).secondaryColor };
    color:  ${ ({ theme }) => (theme as Theme).forthColor };

    background-image: url( ${ () => logo } );
    background-size: 40px;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 5px;

    padding: 10px;
    padding-left: 50px;

    font-size: 20px;
    font-weight: bold;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const StyledLeftBar = styled.div`
    grid-area: app-left;
`;

export const StyledRightBar = styled.div`
    grid-area: app-right;
`;

export const StyledMidContent = styled.div`
    grid-area: app-mid;
`;

export const StyledFooter = styled.div`
    grid-area: app-footer;
`;