import React from 'react';
import logo from '../../icons8-navisworks-48.png'
const HeadSection = () => {
    return (
        <div className='bg-red-200 p-2 w-9/12 mx-auto rounded-lg mb-4'>
            <img className='mx-auto border-x-yellow-900 rounded-full bg-slate-300 p-3 w-32' src={logo} alt="" />
            <h1 className='text-4xl'>Summery Of The NavisWorks Quizes</h1>
            <h2 className='text-2xl font-semibold'>Most Attractive Quizes</h2>
        </div>
    );
};

export default HeadSection;