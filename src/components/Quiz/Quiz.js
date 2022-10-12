import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'
const Quiz = ({quiz}) => {
    const {id,name,logo}=quiz
    return (
        <div className='quiz bg-red-300 rounded-xl mt-5'>
            <img  src={logo} alt="" />
            <p className='mt-1 font-semibold'>{name}</p>
            <Link to={`/quiz/${id}`}><button className='rounded-lg font-semibold pl-5 pr-5 mt-3 p-2 bg-slate-300 '>start practise</button></Link>
            
        </div>
    );
};

export default Quiz;