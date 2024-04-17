import React from 'react'
import styled from 'styled-components'
import { CauroselDiv } from '../components/CrackingProblem/Carousel'
import Footer from '../components/Footer'
import '../App.css'
import {DummyData, DummyData2} from "../data/data"

export const CoursePage = () => {
    console.log("Data:"+DummyData)
  return (
    <>
      <Outer>
        <div className='navbar' style={{marginBottom: '50px'}}>
          <img
            style={{ cursor: 'pointer' }}
            src='https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256'
            alt='logo'
          />
          <img
            src={'https://cdn-icons-png.flaticon.com/512/1999/1999625.png'}
            alt='User' 
            height={'40px'}
            style={{cursor: 'pointer'}}
          />
        </div>
        <CauroselDiv title='Some Live Classes' datamap={DummyData}/>
        <CauroselDiv title='Similar Plus Courses' datamap={DummyData2}/>
      </Outer>
      <Footer />
    </>
  )
}

const Outer = styled.div`
  max-width: 1136px;
  margin: auto;
  text-align: center;
  margin: auto;
  margin-top: 25px;
`

