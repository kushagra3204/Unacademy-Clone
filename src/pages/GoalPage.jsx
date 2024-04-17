import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Second } from "../components/Goal/Second";
import { FourthDiv } from "../components/Goal/FourDiv";
import { FivthDiv } from "../components/Goal/Five";
import { SixthDiv } from "../components/Goal/SixThDiv";
import { SevenTH } from "../components/Goal/SeventhDiv";
import { Reviews } from "../components/Goal/Reviews";
import Footer from "../components/Footer.js";
import LoadingBar from "react-top-loading-bar";
import { MainDiv, InnerDiv, InnerDiv1, HeaderDiv, SecondInner, Htag, Htag3, ButtonDiv } from "../components/Goal/Goal-css";

const Outer = styled.div`
  /* border: 2px solid red; */
`;

export const Goal = () => {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const [recent, setRecent] = useState([]);
  const [best, setBest] = useState([]);
  const [comp, setComp] = useState([]);

  const subscription = useRef(null);

  const ScrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: 'smooth'
    })
  }


  return (
    <>
      <LoadingBar color='#08BD80' height='4px' />
      <Outer>
        <MainDiv>
          <InnerDiv>
            <InnerDiv1>
              <HeaderDiv>
                <Htag>Prepare for {data.name}</Htag>
              </HeaderDiv>
              <SecondInner>
                <Htag3>
                  Learn with the best classroom experience on India’s largest learning platform
                </Htag3>
              </SecondInner>
              <ButtonDiv onClick={() => ScrollToSection(subscription)}>
                Get subscription
              </ButtonDiv>
            </InnerDiv1>
          </InnerDiv>
        </MainDiv>
        <Second />
        <FourthDiv items={data.topTut} />
        <FivthDiv items={course} title='Courses starting soon' desc='Enroll in upcoming courses...' />
        <FivthDiv items={recent} title='Recently started courses' desc='Start learning live from...' />
        <FivthDiv items={best} title='Best of all time' desc='Get unlimited access to popular past...' />
        <SixthDiv comp={comp} />
        <div ref={subscription}>
          <SevenTH name={data.name} className='subscription' />
        </div>
        <OfferLine>
          <p>
            <img src='/images/UpArrow.svg' alt='' /> Special offer price valid only till 30th March 2024
          </p>
        </OfferLine>
        <Ques>
          <h4>
            Have questions? <SPan>Read our FAQs</SPan>
          </h4>
        </Ques>
        <Reviews />
        <Footer />
      </Outer>
    </>
  );
};
const OfferLine = styled.div`
  max-width: 100%;
  height: 70px;
  background-color: #ffdae1;
  width: 100%;
  max-width: 1136px;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
  & p {
    margin: auto;
    color: #c53d3d;
    display: flex;
    align-items: center;
  }
  & img {
    margin-right: 5px;
  }
`;

const Ques = styled.div`
  max-width: 100%;
  height: 70px;
  width: 100%;
  max-width: 1136px;
  margin: auto;
  margin-bottom: 50px;
  display: flex;

  & h4 {
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    color: #3c4852;
    margin: auto;
  }
`;

const SPan = styled.span`
  border-color: #08bd80;
  border-width: 0px 0px 1px;
  border-style: dashed;
  color: #08bd80;
  cursor: pointer;
`;