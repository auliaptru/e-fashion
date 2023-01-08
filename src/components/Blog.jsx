import React from 'react';
import styled, { css } from 'styled-components';

import Card from './Card';
import { blogData } from '../constants/data';
import { tablet, laptop, mobile } from '../responsive';

const AppBlog = styled.div`
    background: var(--color-black);
    padding: 4rem 6rem;
    h1 {
        font-weight: 800;
        font-size: 62px;
        line-height: 75px;
        letter-spacing: -0.04em;
        background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        width: 701px;
    }
    ${tablet(css`
        padding: 4rem;
        h1 {
            width: 70%;
            font-size: 50px;
        }
    `)}
    ${mobile(css`
        padding: 2rem 3rem;
        h1 {
            width: 100%;
            font-size: 31px;
            line-height: 55px;
        }
    `)}
`;

const BlogWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4rem;
    margin-top: 115px;
    ${laptop(css`
        gap: 2rem;
        margin-top: 90px;
        justify-content: space-around;
    `)}
    ${mobile(css`
        flex-direction: column;
    `)}
`;

const CardsLeft = styled.div``;

const CardsRight = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
    ${mobile(css`
        gap: 2rem;
    `)}
`;

const Blog = () => {
    return (
        <AppBlog>
            <h1>A lot is happening, We are blogging about it.</h1>
            <BlogWrapper>
                <CardsLeft>
                    {blogData
                        .filter((item) => item.id === 1)
                        .map((data) => (
                            <Card
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                img={data.img}
                                date={data.date}
                                width='400px'
                                height='400px'
                                height2='400px'
                            />
                        ))}
                </CardsLeft>
                <CardsRight>
                    {blogData
                        .filter((item) => item.id !== 1)
                        .map((data) => (
                            <Card
                                id={data.id}
                                key={data.id}
                                title={data.title}
                                img={data.img}
                                date={data.date}
                                width='327.34px'
                                height='193.37px'
                                width2='190px'
                                height2='180px'
                                fontSize='16px'
                            />
                        ))}
                </CardsRight>
            </BlogWrapper>
        </AppBlog>
    );
};

export default Blog;
