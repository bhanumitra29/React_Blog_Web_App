import React, { useContext, useState } from 'react'
import { Store } from '../Store/ContextCompo'
import "../App.css"
import Slider from './Slider'
import { Link } from 'react-router-dom'

const Home = () => {
  const [number] = useState(2)
    const [contextData] = useContext(Store)

    function shuffleArray(array) {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }
  return (
    <>
    <div className='mainHomeClass'>
      
      <Slider />
    </div>
    

    
  <h2 className='headingLatest'>The Latest</h2>
        <div className="hr-container">
       <hr className="custom-hr"/>
        </div>
        <div className='theLatest'>
         
   

        {shuffleArray(contextData).slice(0, 3).map((item, index) => {
     return(
       // <div>
       <div key={index} className='innerparent12'>
        {/* <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: shuffleArray(contextData).join('/') }}> */}
        <Link to={`/dynamic/${item.cat}/${item.id}`}>
           <img className='techimageleft1' src ={item.imageUrl} alt ='not found' />
           {/* <div className='headingandouter1'> */}
           </Link>
           <h4>{item.heading}</h4>
           <p>{item.outertext}</p>
           {/* </div> */}
           
       </div>
       
       // </div>
       
     )
   })}
   {/* <hr className='lasthr'/> */}
 </div>


    <div className='techparent'>
      <div className='leftdiv'>
        <h2>Home</h2>
        <div className="hr-container">
       <hr className="custom-hr"/>
        </div>
        {shuffleArray(contextData).slice(0, 7).map((item, index) => {
          return(
            <div key={index}>
            <div  className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`}>
                <img className='techimageleft' src ={item.imageUrl} alt ='not found' />
                </Link>
                <div className='headingandouter'>
                <h4>{item.heading}</h4>
                <p>{item.outertext}</p>
                </div>
                
            </div>
            <hr className='lasthr'/>
            </div>
          )
        })}
      </div>


     


      <div className='rightdiv'>

        <h2>Top Posts</h2>
        <div className="hr-container1">
       <hr className="custom-hr1"/>
        </div>
        <div>


        {shuffleArray(contextData).slice(0, 1).map((item, index) => {
  return(
    <div key={index}>
      <div className='imagenumber'>
      <Link to={`/dynamic/${item.cat}/${item.id}`}>
        <img className='techimageright1' src ={item.imageUrl} alt ='not found' />
        </Link>
        <h1 className='toppostsnumber'>1</h1>
        </div>
        <h4>{item.heading}</h4>
        
        <hr/>
    </div>
  )
})}
</div>

{shuffleArray(contextData).slice(0, 3).map((item, index) => {
            const currentNumber = number + index;
          return(
            <div key={index}>
            <div className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`}>
                <img className='techimageright' src ={item.imageUrl} alt ='not found' />
                </Link>
                <div className='headingandouter12'>
                <h4>{item.heading}</h4>
                <h1 className='toppostsnumber'>{currentNumber}</h1>
                </div>
              
            </div>
            <hr className='lasthr'/>
            </div>

          )
        })}
        <div className='ads'><h2 className='centered-text'>Advertistement</h2></div>
      </div>
      </div>
      
      
    </>
  )
}


export default Home
