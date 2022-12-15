import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import error from '../images/404/error.svg'
import CardMedia from '@mui/material/CardMedia';
type Props = {}

const NoMatch = (props: Props) => {
  return (
    <>
    <Header/>
    <Grid>
    <div style={{display:"flex" ,justifyContent:"center",flexDirection:"column"}}>
    {/* <img src={error} alt="404Image" style={{width:"50%",textAlign:"center"}}/> */}
    
    <CardMedia
    style={{width:"30%",paddingLeft:'35%'}}
        component="img"
        height="100%"
        sx={{ width: "100%" }}
        image={error}
        
      />
    <br/>
    <br/>
    <br/>
      <h1 style={{textAlign:"center"}}>The page you were looking for doesn't exist.</h1>
      <h5 style={{textAlign:"center"}}>It's on us, we moved the content to a different page. The search below should help!</h5>
        
        
        </div>
        </Grid>
        
<Footer/>
        </>
  )
}

export default NoMatch