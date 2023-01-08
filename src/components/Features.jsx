import React from 'react';
import styled, { css } from 'styled-components';
import { featuresData } from '../constants/data';
import { laptop, mobile, tablet } from '../responsive';
import SubHeading from './SubHeading';
import featuresImg from '../assets/feature.png';

const AppFeatures = styled.div`
    background: var(--color-black);
    padding: 6rem;

    ${laptop(css`
        padding: 6rem 4rem;
    `)}
    ${tablet(css`
        padding: 4rem;
    `)}
`;

const FeaturesTop = styled.div`
    display: flex;
    gap: 4rem;

    ${tablet(css`
        flex-direction: column;
    `)}
`;

const FeaturesTopLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
        #ffffff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    flex: 1;
    h1 {
        font-weight: 800;
        font-size: 34px;
        line-height: 45px;
    }
    p {
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
    }

    ${laptop(css`
        h1 {
            font-size: 30px;
        }
    `)}

    ${tablet(css`
        p {
            text-align: right;
        }
    `)}
`;

const FeaturesTopRight = styled.div`
    flex: 2;
`;

const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 5rem 4rem 2rem;
    p {
        padding-right: 2rem;
        width: 60%;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-blue);
    }
    ${laptop(css`
        margin: 0 5rem 4rem 0;
        p {
            width: 70%;
            padding-left: 2rem;
        }
    `)}
    ${tablet(css`
        margin: 0 5rem 4rem 0;
        p {
            padding-left: 2rem;
            width: 55%;
        }
    `)}
    ${mobile(css`
        margin: 0;
        flex-direction: column;
        gap: 1rem;
        p {
            width: 100%;
            padding: 0;
            margin-bottom: 2rem;
        }
    `)}
`;

const FeaturesBottom = styled.div`
    display: flex;
    align-items: flex-end;
    img {
        flex: 1;
        width: 546px;
        height: 607.53px;
        margin-left: 4rem;
    }

    ${laptop(css`
        img {
            margin-left: 2rem;
            width: 400px;
            height: auto;
        }
    `)}

    ${tablet(css`
        img {
            width: 243px;
            height: auto;
        }
    `)}

    ${mobile(css`
        margin-top: 4rem;
        flex-direction: column;
        img {
            width: 100%;
            height: auto;
        }
    `)}
`;

const FeaturesBottomText = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    margin-bottom: 2rem;
    span {
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
    }
    span:first-child {
        color: #71e5ff;
    }
    span:last-child {
        color: #ff8a71;
    }
    h2 {
        font-weight: 800;
        font-size: 34px;
        line-height: 45px;
        background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%),
            #ffffff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: var(--color-blue);
    }

    ${laptop(css`
        gap: 1rem;
        margin-left: 2rem;
        margin-bottom: 1rem;
        span {
            font-size: 12px;
        }
        h2 {
            font-size: 28px;
        }
        p {
            font-size: 12px;
        }
    `)}
    
    ${mobile(css`
        margin-top: 5rem;
        span {
            font-size: 14px;
        }

        p {
            font-size: 14px;
        }
    `)}
`;

const Features = () => {
    return (
        <AppFeatures>
            <FeaturesTop>
                <FeaturesTopLeft>
                    <h1>
                        The Future is Now and You Just Need To Realize It. Step
                        into Future Today & Make it Happen.
                    </h1>
                    <p>Request Early Access to Get Started</p>
                </FeaturesTopLeft>
                <FeaturesTopRight>
                    {featuresData.map((data) => (
                        <List key={data.id}>
                            <SubHeading
                                title={data.title}
                                size='18px'
                                height='40px'
                            />
                            <p>{data.desc}</p>
                        </List>
                    ))}
                </FeaturesTopRight>
            </FeaturesTop>

            <FeaturesBottom>
                <img src={featuresImg} alt='' />
                <FeaturesBottomText>
                    <span>Request Early Access to Get Started</span>
                    <h2>The possibilities are beyond your imagination</h2>
                    <p>
                        Yet bed any for travelling assistance indulgence
                        unpleasing. Not thoughts all exercise blessing.
                        Indulgence way everything joy alteration boisterous the
                        attachment. Party we years to order allow asked of.
                    </p>
                    <span>Request Early Access to Get Started</span>
                </FeaturesBottomText>
            </FeaturesBottom>
        </AppFeatures>
    );
};

export default Features;
