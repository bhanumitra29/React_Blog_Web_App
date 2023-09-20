import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Store } from '../Store/ContextCompo';
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaShare, FaHeart} from 'react-icons/fa'

const DynamicContent = () => {

    const { id, cat } = useParams();
    const [contextData] = useContext(Store);
    const navigate = useNavigate();
    const location = useLocation();

    const selectedItem = contextData.find((item) => item.id === parseInt(id));


    // const handeBack = () => {
        // navigate(location.state.referrer);
        // navigate(`/${cat}` || '/');
        // navigate(location.state.referrer || '/');
    // }

    const handeBack = () => {
        
        if (location.state && location.state.referrer) {
            navigate(location.state.referrer);
          } else {
            navigate('/');
      };
    }

   
        const hrStyles = {
          backgroundColor: '#E5E5E5',   
          height: '2px',            
          border: 'none',           
          margin: '15px 0',        
        }
    

  return (
    <div>
      <div className='parentparent'>
      <div className='likeandshare'>
        <span><FaHeart />  Like</span>
        <span><FaShare />  Share</span>
      </div>
      <div className='dynamicParent'>
      {/* <h2>Dynamic Content Page</h2> */}
      {selectedItem ? (
        <div>
          <h2>{selectedItem.heading}</h2>
          <div className='logomainparent'>
            <div className='logoinnerparent'>
              <img className='logoedit' src='https://avatars.githubusercontent.com/u/5465207?v=4' alt='Not Fount' />
              <p>Bhanu Mitra<br/>
                Nov 29, 2021
              </p>

            </div>
            <div>
              <FaFacebook className='icons facebook' />
              <FaTwitter className='icons twitter' />
              <FaInstagram className='icons instagram' />
              <FaYoutube className='icons youtube' />
              <FaGithub className='icons github' />         
            </div>
          </div>
          <img className='techimageleft1' src={selectedItem.imageUrl} alt='not found' />
          <p>{selectedItem.innertext}</p>
        </div>
      ) : (
        <p>No content found for ID: {id}</p>
      )}
      </div>
      </div>

        <div className='buttonparent'>
      <button onClick={handeBack} className='backbutton'>Back</button>
      </div>

        <div className='more'>
      <h2>More from The Siren</h2>
        <hr style={hrStyles}/>
        </div>
      <div className='theLatest'>
   

      {contextData.filter((item) => {return item.cat === cat}).slice(0, 3).map((item,index)=>(
        <div key={index} className='innerparent12'>
        <Link to= {`/dynamic/${item.cat}/${item.id}`} state={{ referrer: location.cat === cat }}>
        <img className='techimageleft1' src ={item.imageUrl} alt ='not found' />
        </Link>
        <h4>{item.heading}</h4>
        <div className='logoinnerparent'>
              <img className='logoedit' src='https://avatars.githubusercontent.com/u/5465207?v=4' alt='Not Fount' />
              <p>Bhanu Mitra<br/>
                Nov 29, 2021
              </p>

            </div>
        </div>
        

      ))}
      </div>
      
    </div>
  )
}

export default DynamicContent