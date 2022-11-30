import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type Props = {}

const NoMatch = (props: Props) => {
  return (
    <>
    <Header/>
    <div style={{display:"flex" ,justifyContent:"center"}}>
        <h1>NoMatch  <br></br><span>Wrong Path</span></h1></div>
<Footer/>
        </>
  )
}

export default NoMatch