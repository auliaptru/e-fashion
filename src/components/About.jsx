import React from 'react';
import styled, { css } from 'styled-components';

import SubHeading from './SubHeading';
import { tablet, mobile, laptop } from '../responsive';
import { aboutData } from '../constants/data';
import blur from '../assets/blur-02.png';

const AppAbout = styled.div`
    height: auto;
    background: var(--color-black);
    padding: 4rem 6rem;
    ${laptop(css`
        padding: 4rem;
    `)}
    ${tablet(css`
        padding: 2rem 4rem;
    `)}
    ${mobile(css`
        padding: 2rem;
    `)}
`;

const Card = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${blur});
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #042c54;
    padding: 52px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    position: relative;

    ${laptop(css`
        padding: 50px 40px;
        background-size: 150%;
    `)}
    ${mobile(css`
        padding: 50px 30px;
        background-size: 150%;
    `)}
`;

const Desc = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        color: var(--color-blue);
        width: 70%;
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
    }
    ${laptop(css`
        p {
            font-size: 14px;
            width: 65%;
        }
    `)}

    ${tablet(css`
        flex-direction: column;
        p {
            width: 100%;
            font-size: 14px;
        }
    `)}

    ${mobile(css`
        flex-direction: column;
        p {
            width: 100%;
            font-size: 12px;
        }
    `)}
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 0;
    h1 {
        width: 50%;
        font-weight: 800;
        font-size: 34px;
        line-height: 45px;
        background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
            #ffffff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    p {
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
            #ffffff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    ${tablet(css`
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        margin: 5rem 0;
        h1 {
            text-align: left;
            font-size: 30px;
            width: 60%;
            width: 100%;
        }
        p {
            text-align: right;
        }
    `)}

    ${mobile(css`
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        h1 {
            width: 100%;
            font-size: 26px;
            margin-bottom: 2rem;
        }
        p {
            align-items: flex-end;
        }
    `)}
`;

const ListWrapper = styled.div`
    display: flex;

    ${tablet(css`
        flex-direction: column;
        gap: 3rem;
    `)}
`;

const List = styled.div`
    display: flex;
    margin: 0 10px;
    flex: 1;
    flex-direction: column;
    p {
        color: var(--color-blue);
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
    }

    ${laptop(css`
        p {
            font-size: 12px;
        }
    `)}
    ${mobile(css`
        p {
            font-size: 14px;
        }
    `)}
`;

const About = () => {
    return (
        <AppAbout>
            <Card>
                {/* <BgBlur src={blur} /> */}
                <Desc>
                    <SubHeading
                        title='What is GPT-3 '
                        size='24px'
                        height='75px'
                    />
                    <p>
                        We so opinion friends me message as delight. Whole front
                        do of plate heard oh ought. His defective nor convinced
                        residence own. Connection has put impossible own
                        apartments boisterous. At jointure ladyship an insisted
                        so humanity he. Friendly bachelor entrance to on by.
                    </p>
                </Desc>
                <TextWrapper>
                    <h1>The possibilities are beyond your imagination</h1>
                    <p>Explore The Library</p>
                </TextWrapper>
                <ListWrapper>
                    {aboutData.map((item) => (
                        <List key={item.id}>
                            <SubHeading
                                title={item.title}
                                size='24px'
                                height='75px'
                            />
                            <p>{item.desc}</p>
                        </List>
                    ))}
                </ListWrapper>
            </Card>
        </AppAbout>
    );
};

export default About;
