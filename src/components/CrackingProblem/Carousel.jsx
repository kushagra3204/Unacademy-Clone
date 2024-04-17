// Carousel.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CauroselDiv = ({ title, detail, change, datamap }) => {
    console.log(datamap);

    return (
        <div style={{ display: "grid" }}>
            <Title>
                <TitleH2>{title}</TitleH2>
            </Title>
            <SecondComp>
                {/* Check if Data is defined before mapping */}
                {datamap && datamap.map(({ img, title, end, name, cat, id }) => {
                    return (
                        <InnerSecondCOmp key={id}>
                            <Link to={`/crack/${cat}/${id}`}>
                                <InnerTwo>
                                    <img src={img} alt='' />
                                </InnerTwo>
                            </Link>
                            <InnerTwo2>
                                <InnerTwo22>
                                    <Second>
                                        <SecondSpan>Hindi</SecondSpan>
                                        <SecondSpan1>Beyond School Syllabus</SecondSpan1>
                                    </Second>
                                    <LinkOne>
                                        <h4>{title}</h4>
                                    </LinkOne>
                                    <InnerTwo22P>{end}</InnerTwo22P>
                                </InnerTwo22>
                                <div style={{ webkitBoxFlex: 1, flexGrow: 1 }}></div>
                                <InnerTwo23>
                                    <h4>{name}</h4>
                                </InnerTwo23>
                            </InnerTwo2>
                        </InnerSecondCOmp>
                    );
                })}
            </SecondComp>
        </div>
    );
};

const Title = styled.div`
    display: flex;
    margin-top: 28px;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    grid-column: span 18 / auto;
`;
const TitleH2 = styled.h2`
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    color: #3c4852;
    margin: 0px;
`;

const SecondComp = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
`;
const InnerSecondCOmp = styled.div``;
const InnerTwo = styled.div`
    max-height: 100%;
    max-width: 100%;
    & img {
        max-width: 100%;
        object-fit: cover;
        box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
        cursor: pointer;
    }
`;
const InnerTwo2 = styled.div`
    max-height: 100%;
    max-width: 100%;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    text-align: left;
    padding: 16px;
`;
const InnerTwo22 = styled.div`
    padding-bottom: 8px;
    display: grid;
    column-gap: 8px;
    -webkit-box-align: center;
    align-items: center;
`;

const InnerTwo23 = styled.a`
    color: #3c4852;
    line-height: 150%;
    font-size: 12px;
    font-weight: normal;
    & h4 {
        padding-top: 8px;
        font-weight: normal;
        font-size: 12px;
        line-height: 150%;
        margin: 0px;
        color: #3c4852;
    }
`;

const InnerTwo22P = styled.div`
    padding-top: 4px;
    padding-bottom: 4px;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    margin: 0px;
    color: #3c4852;
`;

const LinkOne = styled.div`
    line-height: 150%;
    font-size: 12px;
    font-weight: normal;
    color: #3c4852;
    & h4 {
        padding-bottom: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        margin: 0px;
        color: #3c4852;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        overflow-wrap: break-word;
    }
`;

const Second = styled.div`
    display: flex;
    justify-content: start;
`;
const SecondSpan = styled.div`
    margin-right: 5px;
    color: #3c4852;
    font-size: 10px;
    font-weight: bold;
    padding: 6px;
    border-radius: 4px;
    display: inline-block;
    text-transform: uppercase;
    line-height: 1;
    line-height: 15px;
    margin-bottom: 6px;
`;
const SecondSpan1 = styled.div`
    color: #2d81f7;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 0px;
    border-radius: 4px;
    display: inline-block;
    text-transform: uppercase;
    font-family: AvertaStd-Bold;
    font-size: 12px;
    line-height: 14px;
`;