import React from 'react';
import styled, { css } from 'styled-components';

import { tablet, laptop, mobile } from '../responsive';
import headerImg from '../assets/illustration.png';
import usersImg from '../assets/users.png';
import blur from '../assets/blur-01.png';

const AppHeader = styled.div`
    /* margin-top: 10vh; */
    padding: 0 4rem;
    height: 100vh;
    background-image: url(${blur});
    background-repeat: no-repeat;
    background-position: left;
    background-size: 80%;
    background-color: var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    ${laptop(css`
        height: auto;
        background-position: top;
        background-size: 100%;
    `)}
    ${tablet(css`
        padding: 2rem 4rem;
    `)}
    ${mobile(css`
        padding: 2rem;
    `)}
`;

const HeaderLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h1 {
        font-size: 62px;
        line-height: 75px;
        font-weight: 800;
    }
    p {
        color: var(--color-blue);
        font-size: 20px;
        font-weight: 400;
        line-height: 27px;
        margin: 1.5rem 0;
    }
    ${laptop(css`
        width: 50%;
        h1 {
            font-size: 50px;
            line-height: 65px;
        }
        p {
            font-size: 16px;
        }
    `)}
    ${tablet(css`
        h1 {
            font-size: 50px;
            line-height: 65px;
        }
        p {
            font-size: 16px;
        }
    `)}
    ${mobile(css`
        h1 {
            font-size: 35px;
            line-height: 55px;
        }
        p {
            font-size: 14px;
        }
    `)}
`;

const EmailWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    input {
        width: 456px;
        height: 73px;
        background: #052d56;
        border: none;
        padding-left: 2rem;
        font-size: 20px;
        color: var(--color-white);
        font-weight: 400;
        border-radius: 5px 0px 0px 5px;
        ::placeholder {
            color: #3d6184;
        }
    }
    button {
        width: 175px;
        height: 73px;
        border: none;
        border-radius: 0px 5px 5px 0px;
        font-size: 20px;
        font-weight: 700;
        line-height: 27px;
        background: var(--color-orange);
        color: var(--color-white);
        cursor: pointer;
    }
    ${laptop(css`
        input {
            width: 300px;
            height: 50px;
            font-size: 16px;
            padding-left: 1rem;
        }
        button {
            width: 120px;
            height: 50px;
            font-size: 16px;
        }
    `)}
    ${mobile(css`
        input {
            width: auto;
            height: 50px;
            font-size: 16px;
            padding-left: 1rem;
        }
        button {
            width: 120px;
            height: 50px;
            font-size: 16px;
        }
    `)}
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 20px;
    img {
        width: 30%;
        height: 30%;
    }
    p {
        font-size: 12px;
    }
    ${mobile(css`
        gap: 1rem;
        img {
            width: 35%;
            height: 35%;
            object-fit: contain;
        }
        p {
            font-size: 10px;
            line-height: 20px;
        }
    `)}
`;

const HeaderRight = styled.div`
    flex: 1;
    width: 100%;
    height: 701.59px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${laptop(css`
        flex: 2;
    `)}
    ${tablet(css`
        display: none;
    `)}
`;

const HeaderImage = styled.img`
    position: absolute;
    width: 100%;
    height: 90%;
    object-fit: cover;
    left: 50px;
    top: 50px;
    ${laptop(css`
        width: 100%;
        height: 60%;
    `)}
`;

const Header = () => {
    return (
        <AppHeader>
            <HeaderLeft>
                <h1 className='linear__text'>
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <EmailWrapper>
                    <input type='text' placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </EmailWrapper>
                <UserWrapper>
                    <img src={usersImg} alt='user' />
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </UserWrapper>
            </HeaderLeft>
            <HeaderRight>
                <HeaderImage src={headerImg} />
            </HeaderRight>
        </AppHeader>
    );
};

export default Header;
