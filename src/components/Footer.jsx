import React from 'react';
import styled, { css } from 'styled-components';
import { laptop, mobile, tablet } from '../responsive';
import logo from '../assets/logo.svg';

const AppFooter = styled.div`
    height: 950px;
    width: 100%;
    background: #031b34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 4rem;
    color: var(--color-white);
    h1 {
        margin-top: 7rem;
        font-weight: 800;
        font-size: 62px;
        line-height: 75px;
        text-align: center;
        letter-spacing: -0.04em;
        background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        width: 50%;
    }
    button {
        width: 218px;
        height: 65px;
        background: transparent;
        outline: none;
        border: 1px solid var(--color-white);
        color: var(--color-white);
        font-size: 16px;
        line-height: 21px;
        cursor: pointer;
        transition: 0.5s all ease;
        &:hover {
            background: var(--color-white);
            color: #031b34;
        }
    }
    p {
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.04rem;
        padding-bottom: 1rem;
    }

    ${laptop(css`
        width: 100%;
        height: auto;
        padding: 0 3rem;
        h1 {
            font-size: 40px;
            width: 60%;
        }
        button {
            width: 200px;
            height: 65px;
        }
    `)}

    ${mobile(css`
        h1 {
            width: 100%;
        }
        button {
            font-size: 14px;
            width: 180px;
            height: 60px;
        }
    `)}
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    ${tablet(css`
        justify-content: space-around;
    `)}

    ${mobile(css`
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        text-align: center;
    `)}
`;

const Logo = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    img {
        width: 118px;
        height: 30px;
    }
    p {
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.04rem;
        width: 60%;
    }

    ${tablet(css`
        img {
            width: 100px;
        }
    `)}

    ${mobile(css`
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    `)}
`;

const Links = styled.ul`
    flex: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    margin: 0 4rem;
    &:last-child {
        pointer-events: none;
    }

    ${tablet(css`
        justify-content: space-around;
        margin: 0 2rem;
        gap: 1rem;
    `)}
`;

const LinkItem = styled.li`
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.04rem;
    cursor: pointer;
    transition: 0.5s all ease;
    &:first-child {
        font-size: 16px;
        font-weight: bold;
        pointer-events: none;
    }
    &:hover {
        color: var(--color-orange);
    }
`;

const Footer = () => {
    return (
        <AppFooter>
            <h1>Do you want to step in to the future before others</h1>
            <button>Request Early Access</button>
            <Wrapper>
                <Logo>
                    <img src={logo} alt='logo' />
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </Logo>
                <Links>
                    <LinkItem>Links</LinkItem>
                    <LinkItem>Overons</LinkItem>
                    <LinkItem>Social Media</LinkItem>
                    <LinkItem>Counters</LinkItem>
                    <LinkItem>Contact</LinkItem>
                </Links>
                <Links>
                    <LinkItem>Company</LinkItem>
                    <LinkItem>Terms & Conditions</LinkItem>
                    <LinkItem>Privacy Policy</LinkItem>
                    <LinkItem>Contact</LinkItem>
                </Links>
                <Links>
                    <LinkItem>Get in Touch</LinkItem>
                    <LinkItem>Crechterwoord K12 182 DK Alknjkcb</LinkItem>
                    <LinkItem>085-132567</LinkItem>
                    <LinkItem>info@payme.net</LinkItem>
                </Links>
            </Wrapper>
            <p>© 2022 GPT-3. All rights reserved.</p>
        </AppFooter>
    );
};

export default Footer;
