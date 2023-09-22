import React, { useContext } from 'react'
import { Store } from '../Store/ContextCompo'
import "../App.css"
import { Link } from 'react-router-dom'
import Footer from './Footer'
const Bollywood = () => {
  const [contextData] = useContext(Store)
  return (
    <div className='mainHomeParent'>

  <h2 className='headingLatest'>The Latest</h2>
        <div className="hr-container">
       <hr className="custom-hr"/>
        </div>
    <div className='theLatest'>
   

        {contextData.filter((item) => item.id >39 && item.id<43).map((item,index)=>{
          return(
            // <div>
            <div key={index} className='innerparent12'>
              <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: '/bollywood' }}>
                <img className='techimageleft1' src ={item.imageUrl} alt ='not found' />
                </Link>
                {/* <div className='headingandouter1'> */}
                <h4>{item.heading}</h4>
                <p>{item.outertext}</p>
                {/* </div> */}
                <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
            </div>
            
            // </div>
            
          )
        })}
        {/* <hr className='lasthr'/> */}
        
      </div>

    <div className='techparent'>
      <div className='leftdiv'>
        <h2>Bollywood</h2>
        <div className="hr-container">
       <hr className="custom-hr"/>
        </div>


        
        <div className='outertext1'>
        {contextData.filter((item) => item.id >=29 && item.id <=35).map((item,index)=>{
          return(
            <div key={index}>
            <div className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: '/bollywood' }}>
                <img className='techimageleft' src ={item.imageUrl} alt ='not found' />
                </Link>
                <div className='headingandouter'>
                <h4>{item.heading}</h4>
                <p>{item.outertext.split(' ',15).join(' ')}</p>
                <p><span className='travel'>Travel</span>  <span className='august'>/ August 21 2021</span></p>
                </div>
                
            </div>
            <hr className='lasthr'/>
            </div>
          )
        })}
      </div>

      <div className='outertext'>
{contextData.filter((item) => item.id >=29 && item.id <=35).map((item,index)=>{
          return(
            <div key={index}>
            <div className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: '/bollywood' }}>
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
      </div>

      


     


      <div className='rightdiv'>

        <h2>Top Posts</h2>
        <div className="hr-container1">
       <hr className="custom-hr1"/>
        </div>
        <div>


{contextData.filter((item) => item.id ===36).map((item,index)=>{
  return(
    <div key={index}>
      
      <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: '/bollywood' }}>
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
      {contextData.filter((item) => item.id >36 && item.id<=39).map((item,index)=>{
          return(
            <div key={index}>
            <div className='innerparent1'>
            <Link to={`/dynamic/${item.cat}/${item.id}`} state={{ referrer: '/bollywood' }}>
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

export default Bollywood