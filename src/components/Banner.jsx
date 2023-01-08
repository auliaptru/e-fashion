import React from 'react';
import styled, { css } from 'styled-components';

import { tablet, mobile, laptop } from '../responsive';

const AppBanner = styled.div`
    padding: 4rem 6rem;
    background: var(--color-black);

    ${tablet(css`
        padding: 4rem;
    `)}
    ${mobile(css`
        padding: 2rem;
    `)}
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10.7236px;
    width: 1170px;
    height: 172.65px;
    padding: 4rem;
    button {
        width: 189.14px;
        height: 59.4px;
        background: #000000;
        border-radius: 40px;
        color: var(--color-white);
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        cursor: pointer;
    }

    ${laptop(css`
        width: 100%;
        gap: 1rem;
        padding: 3rem;
        button {
            font-size: 16px;
            height: 50px;
        }
    `)}
    ${mobile(css`
        padding: 1rem;
        button {
            height: 35px;
            font-size: 12px;
        }
    `)}
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    span {
        font-weight: 500;
        font-size: 10px;
        line-height: 30px;
        color: #0e0e0e;
    }
    h3 {
        font-weight: 800;
        font-size: 24px;
        line-height: 45px;
    }

    ${tablet(css`
        span {
            line-height: 20px;
        }
        h3 {
            font-size: 18px;
            line-height: 30px;
        }
    `)}
    ${mobile(css`
        h3 {
            font-size: 16px;
            line-height: 22px;
        }
    `)}
`;

const Banner = () => {
    return (
        <AppBanner>
            <Card>
                <TextWrapper>
                    <span>Request Early Access to Get Started</span>
                    <h3>
                        Register today & start exploring the endless
                        possiblities.
                    </h3>
                </TextWrapper>
                <button>Get Started</button>
            </Card>
        </AppBanner>
    );
};

export default Banner;
