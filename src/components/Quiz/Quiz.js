import React from 'react';
import './Quiz.css'
const Quiz = ({quiz}) => {
    const {name,logo}=quiz
    return (
        <div className='quiz bg-red-300 rounded-xl'>
            <img  src={logo} alt="" />
            <p className='mt-1 font-semibold'>{name}</p>
            <button className='rounded-lg font-semibold pl-5 pr-5 mt-3 p-2 bg-slate-300 '>start practise</button>
            
        </div>
    );
};

export default Quiz;