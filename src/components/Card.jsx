import React from 'react';
import styled, { css } from 'styled-components';
import { laptop, mobile, tablet } from '../responsive';

const AppCard = styled.div`
    width: auto;
    height: auto;
    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }
    ${laptop(css`
        img {
            width: 220px;
            height: auto;
        }
    `)}
    ${tablet(css`
        img {
            width: 195px;
            height: auto;
        }
    `)}
    ${mobile(css`
        img {
            width: 100%;
            height: 193.37px;
        }
    `)}
`;

const Wrapper = styled.div`
    background: #042c54;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    color: var(--color-white);
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    p {
        font-weight: 700;
        font-size: 11.649px;
        line-height: 35px;
    }
    h3 {
        font-weight: 800;
        line-height: 30px;
        cursor: pointer;
    }
    span {
        position: absolute;
        bottom: 20px;
        font-weight: 700;
        font-size: 11.649px;
        line-height: 35px;
        cursor: pointer;
    }

    ${laptop(css`
        width: 220px;
        height: ${(props) => props.height2};
        padding: 1rem 1.3rem;
        h3 {
            font-size: 12px !important;
            line-height: 20px;
        }
        span {
            font-size: 10px;
        }
    `)}

    ${tablet(css`
        width: 195px;
        height: ${(props) => props.height2};
        padding: 1rem 1.3rem;
        h3 {
            font-size: 12px !important;
            line-height: 20px;
        }
        span {
            font-size: 10px;
        }
    `)}

    ${mobile(css`
        width: 100%;
        height: 193.37px;
        h3 {
            font-size: 16px !important;
        }
    `)}
`;

const Card = ({
    id,
    img,
    date,
    title,
    height,
    width,
    height2,
    width2,
}) => {
    console.log(width2);
    return (
        <AppCard>
            <img src={img} alt={title} width={width} height={height} />
            <Wrapper
                width={width}
                height={height}
                height2={height2}
            >
                <p>{date}</p>
                <h3
                    style={
                        id === 1 ? { fontSize: '25px' } : { fontSize: '16px' }
                    }
                >
                    {title}
                </h3>
                <span>Read Full Article</span>
            </Wrapper>
        </AppCard>
    );
};

export default Card;
