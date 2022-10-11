import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../icons8-navisworks-48.png'
import './Header.css'
const Header = () => {
    return (
     <nav className="flex bg-red-200 justify-between items-center p-3">
     
     <div className='flex items-center text-3xl'>
        <img src={logo} alt="" />
        <h2 className='ml-12 '>NavisWorks Quizes</h2>
     </div>
        
        
       
            
        <div>
        <Link to='/'>Home</Link>
        <Link to='/'>Topics</Link>
        <Link to='statistics'>Statistics</Link>
        <Link to='/blog'>Blog</Link>
        </div>
     
    
     </nav>
    );
};

export default Header;