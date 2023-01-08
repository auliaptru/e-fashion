import React from 'react';
import styled, { css } from 'styled-components';
import { mobile } from '../responsive';

const Wrapper = styled.div`
    width: 50%;
    span {
        position: absolute;
        width: 38px;
        height: 3px;
        background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
            #ffffff;
    }
    h4 {
        font-weight: 800;
        color: var(--color-white);
    }

    ${mobile(css`
        width: 100%;
    `)}
`;

const SubHeading = ({ title, size, height }) => {
    return (
        <Wrapper>
            <span />
            <h4 style={{ fontSize: `${size}`, lineHeight: `${height}` }}>
                {title}
            </h4>
        </Wrapper>
    );
};

export default SubHeading;
