import React from 'react'
import '../App.css'
import { BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Bollywood from '../Components/Bollywood';
import Technology from '../Components/Technology';
import Hollywood from '../Components/Hollywood';
import Fitness from '../Components/Fitness';
import Food from '../Components/Food';
import Home from '../Components/Home';
import ContextCompo from '../Store/ContextCompo'
import DynamicContent from './DynamicContent';
import MobileDropdownMenu from '../Components/MobileDropdownMenu';

const DataCompo = () => {
        const hrStyles = {
          backgroundColor: '#E5E5E5',   
          height: '2px',            
          border: 'none',           
          margin: '15px 0',         
        }
  return (
    <>
    <div className='parentthe'><div className='the'>The</div> <div className='siren'>Siren</div>
    </div>

    <div>
            <BrowserRouter>

            <div className="mobile-menu">
            <MobileDropdownMenu />
          </div>
                <div className="navbar">
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/' className="link">Home</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/bollywood' className="link">Bollywood</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/technology' className="link">Technology</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/hollywood' className="link">Hollywood</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/fitness' className="link">Fitness</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? "green" : "black"})} to='/food' className="link">Food</NavLink>
                </div>
                <hr style={hrStyles}/>
            <ContextCompo>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bollywood" element={<Bollywood />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/hollywood" element={<Hollywood />} />
                <Route path="/fitness" element={<Fitness />} />
                <Route path="/food" element={<Food />} />
                <Route path ="dynamic/:cat/:id" element = {<DynamicContent />} />
            </Routes>
            </ContextCompo>

            </BrowserRouter>

           
        </div>

    </>
  )
}

export default DataCompo