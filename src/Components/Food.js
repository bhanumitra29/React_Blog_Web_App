import React, { useContext } from 'react'
import { Store } from '../Store/ContextCompo'
import "../App.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Food = () => {
  
  const [contextData] = useContext(Store)
  return (
    <div className='mainHomeParent'>

  <h2 className='headingLatest'>The Latest</h2>
        <div class="hr-container">
       <hr class="custom-hr"/>
        </div>
        <div className='theLatest'>
   

        {contextData.filter((item) => item.id >42 && item.id<46).map((item,index)=>{
     return(
       // <div>
       <div key={index} className='innerparent12'>
        <Link to={`/dynamic/${item.cat}/${item.id}`}state={{ referrer: '/food' }} >
           <img className='techimageleft1' src ={item.imageUrl} alt ='not found' />
           {/* <div className='headingandouter1'> */}
           </Link>
           <h4>{item.heading}</h4>
           <p>{item.outertext}</p>
           <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
           {/* </div> */}
           
       </div>
       
       // </div>
       
     )
   })}
   {/* <hr className='lasthr'/> */}
 </div>


    <div className='techparent'>
      <div className='leftdiv'>
        <h2>Bollywood</h2>
        <div class="hr-container">
       <hr class="custom-hr"/>
        </div>
        {contextData.filter((item) => item.id >=46 && item.id <=52).map((item,index)=>{
          return(
            <div>
            <div key={index} className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: '/food' }}>
                <img className='techimageleft' src ={item.imageUrl} alt ='not found' />
                </Link>
                <div className='headingandouter'>
                <h4>{item.heading}</h4>
                <p>{item.outertext}</p>
                <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
                </div>
                
            </div>
            <hr className='lasthr'/>
            </div>
          )
        })}
      </div>


     


      <div className='rightdiv'>

        <h2>Top Posts</h2>
        <div class="hr-container1">
       <hr class="custom-hr1"/>
        </div>
        <div>


{contextData.filter((item) => item.id ===53).map((item,index)=>{
  return(
    <div key={index}>
    
      <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: '/food' }}>
        <img className='techimageright1' src ={item.imageUrl} alt ='not found' />
        </Link>
        <div className='imagenumber'>
       <div className='spantravel'>
        <h4>{item.heading}</h4>
        <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
        </div>
        <h1 className='toppostsnumber'>{item.topposts}</h1>
        </div>
        <hr/>
    </div>
  )
})}
</div>
      {contextData.filter((item) => item.id >53 && item.id<=56).map((item,index)=>{
          return(
            <div>
            <div key={index} className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: '/food' }}>
                <img className='techimageright' src ={item.imageUrl} alt ='not found' />
                </Link>
                
                <div className='headingandouter12'>
                  <div>
                <h4>{item.heading}</h4>
                <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
                </div>
                <h1 className='toppostsnumber'>{item.topposts}</h1>
                </div>
              
            </div>
            <hr className='lasthr'/>
            </div>

          )
        })}
        <div className='ads'><h2 className='centered-text'>Advertistement</h2></div>
      </div>
      </div>
      
      <Footer />
      </div>
  )
}  

export default Food