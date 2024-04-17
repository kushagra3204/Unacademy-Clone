import React from "react";
import styled from "styled-components";
import { FirstComp } from "../components/CrackingProblem/FirstComp";
import { CauroselDiv } from "../components/CrackingProblem/Carousel";
import Footer from "../components/Footer";
import { DummyData, DummyData2 } from "../data/data";

export const CrackPage = () => {
  const allData = [...DummyData, ...DummyData2];
  const idlink = window.location.pathname.split('/');
  const id = idlink[idlink.length - 1];
  console.log('ID:', id);
  const filteredData = allData.filter(item => item.id === id);
  const name = filteredData.length > 0 ? filteredData[0].name : null;
  console.log("Name:", name);
  
  return (
    <>
      <Outer>
        <FirstComp name={name} />
        <CauroselDiv title="Similar Classes" datamap={DummyData} />
        <CauroselDiv title="Similar Plus Cources" datamap={DummyData2} />
      </Outer>
      <Footer />
    </>
  );
};

const Outer = styled.div`
  max-width: 1136px;
  margin: auto;
  text-align: center;
  margin: auto;
  margin-top: 25px;
`;