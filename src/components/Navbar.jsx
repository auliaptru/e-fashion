import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { tablet, laptop } from '../responsive';

import blur from '../assets/blur-01.png';
import logo from '../assets/logo.svg';

const Nav = styled.nav`
    background-image: url(${blur});
    background-repeat: no-repeat;
    background-size: 80%;
    width: 100%;
    height: 18vh;
    padding: 10px 50px;
    background-color: var(--color-black);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: fixed;
    top: 0;
    z-index: 100; */
    ${laptop(css`
        background-position: top;
        height: 10vh;
        background-size: 100%;
    `)}
    ${tablet(css`
        height: 15vh;
    `)}
`;

const Image = styled.img`
    width: 70px;
    height: 70px;
    margin-right: 87.44px;
`;

const List = styled.ul`
    flex: 2;
    display: flex;
    list-style: none;
    gap: 3.5rem;
    ${laptop(css`
        display: none;
    `)}
`;

const ListItem = styled.li`
    font-weight: 500;
    font-size: 14px;
    transition: 1s all ease;
    padding: 5px 1px;
    :hover {
        border-bottom: 1px solid var(--color-orange);
    }
`;

const Buttons = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    button {
        border: transparent;
        color: var(--color-white);
        cursor: pointer;
        transition: 0.5s all ease;
    }
    button:first-child {
        background: transparent;
        padding: 5px 10px;
        :hover {
            border-bottom: 1px solid var(--color-orange);
        }
    }
    button:last-child {
        border-radius: 5px;
        padding: 0.7rem 1.5rem;
        background: var(--color-orange);
        :hover {
            opacity: 0.8;
        }
    }

    ${laptop(css`
        margin-right: 100px;
    `)}

    ${tablet(css`
        display: none;
    `)}
`;

const Smallscreen = styled.div`
    display: none;
    ${laptop(css`
        display: block;
    `)}
`;

const Hamburger = styled(GiHamburgerMenu)`
    cursor: pointer;
    font-size: 27px;
    /* position: absolute;
    top: 30px;
    right: 40px; */
    ${tablet(css`
        top: auto;
    `)}
`;

const Close = styled(MdOutlineClose)`
    font-size: 40px;
    color: var(--color-orange);
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 40px;
`;

const SmallscreenOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: all 1s ease-in;
    background-color: var(--color-black);
    flex-direction: column;
    z-index: 10;
`;

const SmallscreenList = styled.div`
    list-style: none;
    margin: 100px 0;
    ${ListItem} {
        margin: 2rem;
        cursor: pointer;
        color: var(--color-white);
        font-size: 1.6rem;
        text-align: center;
        transition: all 0.3s ease;
    }
    ${ListItem}:hover {
        color: var(--color-orange);
    }
`;

const SmallscreenButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        padding: 0.5rem 2rem;
        border-radius: 40px;
        color: var(--color-black);
        cursor: pointer;
        transition: 0.5s all ease;
        font-size: 16px;
        font-weight: 500;
    }
    button:hover {
        background: lightgray;
    }
    span {
        width: 10px;
        height: 10px;
        color: var(--color-white);
    }
    ${laptop(css`
        display: none;
    `)}
    ${tablet(css`
        display: flex;
    `)}
`;

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <Nav>
            <Image src={logo} />
            <List>
                <ListItem>
                    <a href='#home'>Home</a>
                </ListItem>
                <ListItem>
                    <a href='#about'>What is GPT</a>
                </ListItem>
                <ListItem>
                    <a href='#open'>Open AI</a>
                </ListItem>
                <ListItem>
                    <a href='#case'>Case Studies</a>
                </ListItem>
                <ListItem>
                    <a href='#library'>Library</a>
                </ListItem>
            </List>
            <Buttons>
                <button>Sign In</button>
                <button>Sign Up</button>
            </Buttons>
            <Smallscreen>
                <Hamburger onClick={() => setToggle(true)} />
                {toggle && (
                    <SmallscreenOverlay>
                        <Close onClick={() => setToggle(false)} />
                        <SmallscreenList>
                            <ListItem>
                                <a href='#home'>Home</a>
                            </ListItem>
                            <ListItem>
                                <a href='#about'>What is GPT</a>
                            </ListItem>
                            <ListItem>
                                <a href='#open'>Open AI</a>
                            </ListItem>
                            <ListItem>
                                <a href='#case'>Case Studies</a>
                            </ListItem>
                            <ListItem>
                                <a href='#library'>Library</a>
                            </ListItem>
                        </SmallscreenList>
                        <SmallscreenButtons>
                            <button>Sign In</button>
                            <span />
                            <button>Sign Up</button>
                        </SmallscreenButtons>
                    </SmallscreenOverlay>
                )}
            </Smallscreen>
        </Nav>
    );
};

export default Navbar;
