import React from 'react';
import styled, { css } from 'styled-components';

import { laptop, tablet } from '../responsive';
import logo from '../assets/companies-logo.png';

const AppLogo = styled.div`
    height: 30vh;
    background: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 50%;
        height: auto;
        object-fit: cover;
    }
    ${laptop(css`
        height: 15vh;
        img {
            width: 60%;
        }
    `)}

    ${tablet(css`
        height: 15vh;
        img {
            width: 70%;
        }
    `)}
`;

const CompaniesLogo = () => {
    return (
        <AppLogo>
            <img src={logo} alt='' />
        </AppLogo>
    );
};

export default CompaniesLogo;
